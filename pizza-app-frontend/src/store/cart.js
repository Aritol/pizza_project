import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

const store = {
  namespaced: true,
  state: {
    cart: [],
    totalPrice: [],
    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    getCartList: (state) => state.cart,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,

    getTotalPrice: (state) => state.totalPrice,
  },
  mutations: {
    setCart: (state, product) => {
      state.cart.push(product);
    },
    removeFromCart: (state, index) => {
      state.cart.splice(index, 1);
    },
    increment: (state, index) => {
      state.cart[index].quantity++;
    },
    decrement: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    clearCartList: (state) => {
      state.cart = [];
    },

    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },

    setTotalPrice(state, price) {
      state.totalPrice = price;
    },
  },
  actions: {
    AddOrderToDB({ commit }, userData) {
      // const formData = new FormData();
      // for (const key in userData) {
      //   formData.append(key, userData[key]);
      // }
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.orders.add, userData)
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(true);
            else throw new Error("Fatch failed!");
          })
          .catch((err) => {
            //Якщо погано
            commit("setError", err);
            reject(err);
          })
          .finally(
            //Завжди
            () => commit("setLoading", false)
          );
      });
    },

    incrementQuantity({ commit, dispatch }, index) {
      commit("increment", index);
      dispatch("saveToLocalStorage");
    },

    decrementQuantity({ commit, dispatch }, index) {
      commit("decrement", index);
      dispatch("saveToLocalStorage");
    },

    loadFromLocalStorage({ commit }) {
      if (localStorage.getItem("cart")) {
        let item = JSON.parse(localStorage.getItem("cart"));
        for (let i = 0; i < item.length; i++) {
          commit("setCart", item[i]);
        }
      }
      // return JSON.parse(localStorage.getItem("cart"));
    },
    saveToLocalStorage({ state }) {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    AddProductToCart({ commit, state, dispatch }, product) {
      console.log(product);
      if (state.cart.length) {
        let isProductExist = false;
        state.cart.map(function (item) {
          if (item.name === product.name) {
            isProductExist = true;
            item.quantity++;
          }
        });
        if (!isProductExist) {
          // state.cart.push(product);
          commit("setCart", product);

          // this.saveToLocalStorage();
          dispatch("saveToLocalStorage");
        } else {
          // this.saveToLocalStorage();
          dispatch("saveToLocalStorage");
        }
      } else {
        // console.log(product);
        // state.cart.push(product);
        commit("setCart", product);

        // this.saveToLocalStorage();
        dispatch("saveToLocalStorage");
      }

      //   localStorage.setItem("cart", JSON.stringify(product));
    },
    DeleteProductFromCart({ commit, dispatch }, index) {
      commit("removeFromCart", index);
      dispatch("saveToLocalStorage");
    },
    clearCart({ commit }) {
      commit("clearCartList");
      localStorage.removeItem("cart");
    },
    addTotalPrice({ commit }, totalPrice) {
      console.log("totalPrice");
      commit("setTotalPrice", totalPrice);
    },
  },
};

export default store;
