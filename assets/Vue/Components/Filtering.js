var template = `
<div>
  <p>
    <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
  </p>
  <div id="slider-range"></div>
  <form action="javascript:void()">
                <div class="input-group form-group">
                    <button type="button" class="btn btn-secondary" @click="clean_search()">
                        <i class="text-danger fa fa-times"></i>
                    </button>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i class="fa fa-angle-down"></i> &nbsp;{{type_search}}
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(164px, 34px, 0px); top: 0px; left: 0px; will-change: transform;">
                          <div v-for="(value, key, index) in filteredDados[0]">
                              <a class="dropdown-item text-info" href="javascript:void(0)" @click="change_search(key)">
                                  <i class="fas fa-sort-numeric-down"></i>  {{key}}
                              </a>
                          </div>                        
                        </div>    
                    </div>
                    <input placeholder="Notebook" v-model="search">                    
                    <input type="text" class="form-control disabled col-2" disabled :value="'Encontrados : '+find_count">
                </div>
            </form>
  <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col"><a>#</a></th>
        <th scope="col"><a>Title</a></th>
        <th scope="col"><a>Image</a></th>
      </tr>
    </thead>
    <tr v-for="conteudo in filteredDados">
      <th scope="row">{{conteudo.id}}</th>
      <td>{{conteudo.title}}</td>
      <td class="custom_thumb"><img class="custom_image" :src="conteudo.url"></td>
    </tr>
  </table>
</div>
`;

var Pagination = Vue.component("Pagination", {
  props: [""],
  data: function() {
    return {
      dados: [],
      type_search: "id",
      range_search: [0, 99999],
      search: ""
    };
  },
  methods: {
    search_number: function(objects, type_search, range_search) {
      if (
        parseFloat(objects[`${type_search}`]) >= range_search[0] &&
        parseFloat(objects[`${type_search}`]) <= range_search[1]
      )
        return objects;
    },
    change_search: function(type_search) {
      this.type_search = type_search;
    },
    clean_search: function() {
      this.search = "";
    },
    load_range(min, max) {
      var Vue = this;
      $("#slider-range").slider({
        range: true,
        min: min,
        max: max,
        values: [min, max],
        slide: function(event, ui) {
          $("#amount").val(ui.values[0] + " - " + ui.values[1]);
          Vue.range_search = [ui.values[0], ui.values[1]];
        }
      });
    }
  },
  computed: {
    filteredDados: function() {
      var result = [];
      if (this.type_search == "id" || this.type_search == "album_id") {
        result = this.dados.filter(post => {
          return this.search_number(post, this.type_search, this.range_search);
        });
      } else {
        result = this.dados.filter(post => {
          return post[`${this.type_search}`]
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      }
      return result;
    },
    min_max_range: function() {
      var sort = this.dados.sort((a, b) => {
        let modifier = 1;
        if (a[this.type_search] < b[this.type_search]) return -1 * modifier;
        if (a[this.type_search] > b[this.type_search]) return 1 * modifier;
        return 0;
      });
      // console.log(sort[0], sort[sort.length - 1]);
      return [sort[0], sort[sort.length - 1]];
    },
    find_count: function() {
      return this.filteredDados.length;
    }
  },
  beforeCreate() {
    var url = "https://jsonplaceholder.typicode.com/photos";
    this.$http.get(url).then(function(response) {
      this.dados = response.body;
      this.load_range(this.dados[0].id, this.dados[this.dados.length - 1].id);
    });
    this.$session.set("username", "usuario_novo");
    this.$session.set("password", "123");
  },
  created() {},
  mounted() {},
  template: template
});
export default Pagination;
