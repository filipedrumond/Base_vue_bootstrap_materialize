var template = `
<div>
  <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col"><a href="javascript:void(0)" @click="sort('id')">#</a></th>
        <th scope="col"><a href="javascript:void(0)" @click="sort('title')">Title</a></th>
        <th scope="col"><a href="javascript:void(0)">Image</a></th>
      </tr>
    </thead>
    <tr v-for="conteudo in sortedDados">
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
      currentSort: "id",
      currentSortDir: "asc",
      icone_sku: "fa fa-fw fa-sort",
      icone_name: "fa fa-fw fa-sort",
      icone_brand: "fa fa-fw fa-sort",
      icone_stock: "fa fa-fw fa-sort",
      icone_price: "fa fa-fw fa-sort",
      icone_cost: "fa fa-fw fa-sort"
    };
  },
  methods: {
    limpar_sort: function() {
      this.icone_sku = "fa fa-fw fa-sort";
      this.icone_name = "fa fa-fw fa-sort";
      this.icone_brand = "fa fa-fw fa-sort";
      this.icone_stock = "fa fa-fw fa-sort";
      this.icone_price = "fa fa-fw fa-sort";
      this.icone_cost = "fa fa-fw fa-sort";
    },
    sort: function(s) {
      this.limpar_sort();
      if (s === this.currentSort) {
        if (this.currentSortDir === "asc") {
          this[`icone_${s}`] = "si si-arrow-up";
          this.currentSortDir = "desc";
        } else {
          this.currentSortDir = "asc";
          this[`icone_${s}`] = "si si-arrow-down";
        }
      } else {
        this[`icone_${s}`] = "si si-arrow-down";
      }
      this.currentSort = s;
    }
  },
  computed: {
    sortedDados: function() {
      return this.dados.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    }
  },
  beforeCreate() {
    var url = "https://jsonplaceholder.typicode.com/photos";
    this.$http.get(url).then(function(response) {
      this.dados = response.body;
    });
    this.$session.set("username", "usuario_novo");
    this.$session.set("password", "123");
  },
  created() {},
  template: template
});
export default Pagination;
