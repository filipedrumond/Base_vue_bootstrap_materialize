export default {
  name: "Pagination",
  props: ["dados"],
  data: function() {},
  created() {
    var url = "https://jsonplaceholder.typicode.com/photos";
    var data = {
      username: "usuario_novo",
      password: "123"
    };
    // this.$session.set("KEY", this.dados);
    this.$http.get(url, data).then(function(response) {
      console.log(response);
    });
  },
  template: `
  <div>
      <h1>Hello World from Pagination.js</h1>
  </div>
  `
};
