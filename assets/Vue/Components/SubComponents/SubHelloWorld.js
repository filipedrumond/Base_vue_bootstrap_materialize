export default {
  name: "SubHelloWorld",
  props: ["dados"],
  data: function() {
    return {
      dadosJSON: []
    };
  },
  created() {},
  template: `
  <div>
      <h1>Hello World from SubHelloWorld.js</h1>
  </div>
  `
};
