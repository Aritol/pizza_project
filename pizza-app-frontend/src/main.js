import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import axios from "axios";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
