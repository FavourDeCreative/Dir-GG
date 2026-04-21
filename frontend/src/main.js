import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons/css/boxicons.min.css";
import App from "./App.vue";
import router from "./router"; // ✅ import router

createApp(App)
  .use(router) // ✅ connect router
  .mount("#app");

