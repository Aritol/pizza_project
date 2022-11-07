import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";

axios.interceptors.request.use(function (config) {
  const isAuthenticated = store.getters["auth/isAuthenticated"]();
  if (isAuthenticated) {
    config.headers["Authorization"] =
      "Bearer " + store.getters["auth/getAccessToken"]();
  } else {
    config.headers["Authorization"] = null;
  }
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      // Якщо сервер відповів «401»
      console.log(error.response.status);
      console.log("error.response.status");
      // const crearAuthData = store.actions["auth/CLEAR_AUTH_DATA"]();
      // const test = store.actions["auth/clearAuthData"];
      // console.log(test);
      // store.mapMutations("auth", ["clearAuthData"]);
      // this.clearAuthData();
      localStorage.removeItem("authData");
      localStorage.removeItem("expiresAt");
      console.log(store);
      store.dispatch("auth/CLEAR_AUTH_DATA");
      // auth.dispatch("CLEAR_AUTH_DATA");

      router.push({ path: "/forbidden" });
    }
    if (error.response.status === 500) {
      // router.push({ path: "/pageNotFound" });
      console.log("someError");
    }
    return Promise.reject(error);
  }
);
//---------------------------
router.beforeEach((to, from, next) => {
  let requireAuth = to.matched.some((element) => element.meta.auth);

  let check =
    (requireAuth && !store.getters["auth/isAuthenticated"]()) ||
    (!store.getters["auth/isAuthenticated"]() &&
      ["/signup", "/products/edit", "/products/edit/", "/letters"].includes(
        to.path
      ));

  //
  if (check) {
    // Недопускаємо до захищених роутів, якщо немає токена

    next({ path: "/forbidden" });
    return;
  } else {
    next();
  }

  // next();
});

createApp(App).use(router).use(store).mount("#app");
