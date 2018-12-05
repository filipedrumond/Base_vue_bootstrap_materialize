import HelloWorld from "./components/HelloWorld.js";
import Pagination from "./components/Pagination.js";
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
  `%c\n"Nada de interesante por aqui não??" --filipe dev`,
  "color:#f20000"
);
Vue.use(VueSession, VueResourse);
var VUEAPP = new Vue({
  el: ".app",
  data: function() {
    return {
      teste: "vue js é top sim"
    };
  },
  components: {
    Pagination,
    HelloWorld
  }
});
