import helloworld from "./components/HelloWorld.js";
import Vue from "../node_modules/vue/dist/vue.esm.browser.js";
console.log(
  `%c
   _____ _ _ _              _         
  |   __|_| |_|___ ___    _| |___ _ _ 
  |   __| | | | . | -_|  | . | -_| | |
  |__|  |_|_|_|  _|___|  |___|___|\_/ 
              |_|                           
            `,
  "color:#f20000"
);
console.log(
  `%c\n"Nada de interesante por aqui não??" --filipe dev`,
  "color:#f20000"
);

var VUEAPP = new Vue({
  el: ".app",
  data: function() {
    return {
      teste: "vue js é top sim"
    };
  },
  components: {
    helloworld
  }
});
