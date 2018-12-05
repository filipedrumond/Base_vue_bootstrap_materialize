import SubHelloWorld from "./SubComponents/SubHelloWorld.js";
export default {
  name: "HelloWorld",
  props: ["dados"],
  data: function() {
    return {
      dadosJSON: []
    };
  },
  created() {},
  components: {
    SubHelloWorld
  },
  template: `
  <div>
      <h1>Hello World from HelloWorld.js</h1>
      <SubHelloWorld></SubHelloWorld>
  </div>
  `
};
