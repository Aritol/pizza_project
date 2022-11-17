import { createStore } from "vuex";

import products from "./products";
import auth from "./auth";
import cart from "./cart";
// import message from "./message";
import orders from "./orders";

const store = createStore({
  modules: {
    products,
    auth,
    cart,
    // message,
    orders,
  },
});

export default store;
