import { createApp } from "vue";
import App from "./App.vue";
import ContactDetails from "./ContactDetails.vue";

var app = createApp(App);

app.component("contact-details", ContactDetails);

app.mount("#app");

// createApp(App).mount('#app')

// var app = createApp({
// //   data() {
// //     return {
// //       msg: "Welcoet to the vue ",
// //     };
// //   },

// //   render() {
// //     return h("div", {}, [h("h1", {}, this.msg)]);
// //   },

// //   //   template: `   <h1>{{msg}}</h1>`,
// // });
// app.mount("#app");
