import subhelloworld from "./SubComponents/SubHelloWorld.js";
export default {
  name: "HelloWorld",
  components: {
    subhelloworld
  },
  props: ["dados"],
  data: function() {
    return {
      dadosJSON: []
    };
  },
  created() {},
  template: `
  <div>
      <h1>Hello World from HelloWorld.js</h1>
      <subhelloworld></subhelloworld>
  </div>
  `
};
