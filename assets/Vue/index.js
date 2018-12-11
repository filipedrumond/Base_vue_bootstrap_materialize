import HelloWorld from "./components/HelloWorld.js";
import Pagination from "./components/Pagination.js";
import Sorting from "./components/Sorting.js";
import Filtering from "./components/Filtering.js";
import VueSession from "../node_modules/vue-session/index.esm.js";
import VueResourse from "../node_modules/vue-resource/dist/vue-resource.esm.js";
console.log(
  `%c
   _____ _ _ _              _         
  |   __|_| |_|___ ___    _| |___ _ _ 
  |   __| | | | . | -_|  | . | -_| | |
  |__|  |_|_|_|  _|___|  |___|___|__/ 
              |_|                           
            `,
  "color:#f20000"
);

console.log(
  `%c"Nada de interesante por aqui não??" --filipe dev`,
  "color:#f20000"
);

/*
 * IMPORTANDO E USANDO PLUGINS DO VUE
 */
Vue.use(VueSession, VueResourse);

/*
 * ATRIBUINDO UM MIXIN GLOBAL PARA USAR FILTROS E FUNÇÕES
 * "TAPA BURACO" DO JAVA SCRIPT NÃO NATIVO
 */
Vue.mixin({
  data: function() {
    return {
      global: '%c"Eu sou um Mix global cara!!"'
    };
  },
  methods: {
    sleep: function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    arrayChunk: function(array, size) {
      var chunks = [];
      var chunk = [];
      var i = 0;
      while (i < array.length) {
        chunk = array.slice(i, i + size);
        chunks.push(chunk);
        i += size;
      }
      return chunks;
    }
  }
});

/*
 * USANDO O VUE DE FATO E STARTANDO TODA A APLICAÇÃO EM CIMA DO COMPONENTE
 * <div class="app"></div>
 */
new Vue({
  el: ".app",
  created() {
    console.log(this.global, "color:#42f4b0");
  },
  components: {
    Pagination,
    HelloWorld,
    Sorting,
    Filtering
  }
});
