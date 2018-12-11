var template = `
<div>
  <div>
    <ul class="pagination">
      <li class="paginate_button page-item previous" :disabled="indicie_atual == 0 ? true : false">
          <a class="page-link" @click="ir_pagina(0)">Primeira</a>
      </li>
      <li class="paginate_button page-item previous" :disabled="indicie_atual == 0 ? true : false">
          <a class="page-link" @click="ir_pagina(indicie_atual-1)">Anterior</a>
      </li>
      <li class="paginate_button page-item" v-if="indicie_atual > 2"> <a class="page-link"
              @click="pagina_anterior()">...</a>
      </li>
      <li class="paginate_button page-item" v-if="indicie_atual > 1"><a class="page-link"
              @click="ir_pagina(indicie_atual-2)">{{indicie_atual-1}}</a>
      </li>
      <li class="paginate_button page-item" v-if="indicie_atual > 0"><a class="page-link"
              @click="ir_pagina(indicie_atual-1)">{{indicie_atual}}</a>
      </li>
      <li class="paginate_button page-item active"> <a class="page-link" @click="ir_pagina(indicie_atual)">{{indicie_atual+1}}</a></li>
      <li class="paginate_button page-item" v-if="indicie_atual < (total_paginas)"> <a @click="ir_pagina(indicie_atual+1)"
              class="page-link">{{indicie_atual+2}}</a>
      </li>
      <li class="paginate_button page-item" v-if="indicie_atual < (total_paginas-1)"> <a
              @click="ir_pagina(indicie_atual+2)" class="page-link">{{indicie_atual+3}}</a>
      </li>
      <li class="paginate_button page-item" v-if="indicie_atual < (total_paginas-2)">
          <a class="page-link">...</a>
      </li>
      <li class="paginate_button page-item next" :disabled="indicie_atual ==  total_paginas ? true : false">
          <a class="page-link" @click="ir_pagina(indicie_atual+1)">Próximo</a>
      </li>
      <li class="paginate_button page-item previous" :disabled="indicie_atual == 0 ? true : false">
          <a class="page-link" @click="ir_pagina(total_paginas)">Última</a>
      </li>
    </ul>
  </div>
  <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col"><a href="javascript*:void">#</a></th>
        <th scope="col"><a href="javascript*:void">Title</a></th>
        <th scope="col"><a href="javascript*:void">Image</a></th>
      </tr>
    </thead>
    <tr v-for="conteudo in pagina_atual">
      <th scope="row">{{conteudo.id}}</th>
      <td>{{conteudo.title}}</td>
      <td class="custom_thumb"><img class="custom_image" :src="conteudo.url"></td>
    </tr>
  </table>
</div>

`;

var Pagination = Vue.component("Pagination", {
  props: ["dados"],
  data: function() {
    return {
      results: null,
      indicie_atual: 0,
      tamanho_pagina: 10,
      pagina_atual: [],
      dados_paginados: []
    };
  },
  methods: {
    ir_pagina: function(val) {
      if (val < 0) val = 0;
      else if (val > this.total_paginas) val = this.total_paginas;
      this.indicie_atual = val;
    },
    carregar_pagina: function() {
      this.pagina_atual = this.dados_paginados[this.indicie_atual];
    }
  },
  watch: {
    indicie_atual: function() {
      this.pagina_atual = this.dados_paginados[this.indicie_atual];
    }
  },
  computed: {
    total_paginas: function() {
      return this.dados_paginados.length - 1;
    }
  },
  beforeCreate() {
    var url = "https://jsonplaceholder.typicode.com/photos";
    this.$http.get(url).then(function(response) {
      this.dados_paginados = this.arrayChunk(
        response.body,
        this.tamanho_pagina
      );
      this.carregar_pagina();
    });
    this.$session.set("username", "usuario_novo");
    this.$session.set("password", "123");
  },
  created() {},
  template: template
});
export default Pagination;
