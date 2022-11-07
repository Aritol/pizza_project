import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

const store = {
  namespaced: true,
  state: {
    products: [],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    products: (state) => state.products,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addProductToList(state, product) {
      state.products.push(product);
    },
    deleteProductFromList(state, productId) {
      state.products = state.products.filter(
        (product) => product._id !== productId
      );
    },

    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },
  },
  actions: {
    loadProducts({ commit }, category) {
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      axios
        .get(apiEndpoints.products.read(category)) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) commit("setProducts", resData.data);
          else throw new Error("Fatch failed!");
        })
        .catch((err) => {
          //Якщо погано
          commit("setError", err);
        })
        .finally(
          //Завжди
          () => commit("setLoading", false)
        );
    },

    addProduct({ commit }, product) {
      commit("setLoading", true);
      commit("setError", null);

      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      return new Promise((resolve, reject) => {
        axios
          .post(apiEndpoints.products.add, formData)
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
    updateProduct({ commit }, product) {
      commit("setLoading", true);
      commit("setError", null);

      const formData = new FormData();
      for (const key in product) {
        formData.append(key, product[key]);
      }
      return new Promise((resolve, reject) => {
        axios
          .put(apiEndpoints.products.update, formData)
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

    getProductById({ commit }, searchData) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .get(
            apiEndpoints.products.getProductById(
              searchData.category,
              searchData.id
            )
          )
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) resolve(resData.data);
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
    deleteProduct({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      new Promise((resolve, reject) => {
        axios
          .delete(apiEndpoints.products.delete, { data: { id } })
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            console.log("-resData");
            console.log(resData);
            if (resData.success) {
              commit("deleteProductFromList", id);
              resolve(true);
            } else throw new Error("Delete failed!");
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
  },
};

export default store;
