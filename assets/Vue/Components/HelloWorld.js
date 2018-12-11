import SubHelloWorld from "./SubComponents/SubHelloWorld.js";
export default {
  name: "HelloWorld",
  props: ["dados"],
  data: function() {
    return {
      dadosJSON: []
    };
  },
  created() {
    console.log("here");
    var url = "https://jsonplaceholder.typicode.com/photos";
    var data = {
      username: "usuario_novo",
      password: "123"
    };
    this.$session.set("username", "usuario_novo");
    this.$session.set("password", "123");
    this.$http.get(url, data).then(function(response) {
      console.log(response.body);
      this.dados = response.body;
    });
  },
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
