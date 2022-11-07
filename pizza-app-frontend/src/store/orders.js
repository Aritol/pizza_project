// import { createStore } from "vuex";
import axios from "axios";
import apiEndpoints from "@/constants/apiEndpoints";

const store = {
  namespaced: true,
  state: {
    orders: [],

    loading: false, //індикатор завантаження
    error: false, //індикатор помилки
  },
  getters: {
    orders: (state) => state.orders,

    isLoading: (state) => state.loading,
    isError: (state) => state.error,
  },
  mutations: {
    setOrders(state, order) {
      state.orders = order;
    },
    addOrderToList(state, order) {
      state.orders.push(order);
    },
    deleteOrderFromList(state, orderId) {
      state.orders = state.orders.filter((order) => order._id !== orderId);
    },

    setLoading(state, data) {
      state.loading = data;
    },
    setError(state, data) {
      state.error = data;
    },
  },
  actions: {
    loadOrders({ commit }) {
      commit("setLoading", true);
      commit("setError", null);
      //Запит на сервер
      axios
        .get(apiEndpoints.orders.readList) //Асинхронна дія
        .then(
          //Якщо добре
          (res) => res.data
        )
        .then((resData) => {
          if (resData.success) {
            commit("setOrders", resData.data);
          } else throw new Error("Fatch failed!");
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
    updateOrder({ commit }, orderStatus) {
      commit("setLoading", true);
      commit("setError", null);

      // const formData = new FormData();
      // for (const key in product) {
      //   formData.append(key, product[key]);
      // }
      return new Promise((resolve, reject) => {
        axios
          .put(apiEndpoints.orders.update, orderStatus)
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

    getOrderById({ commit }, orderId) {
      commit("setLoading", true);
      commit("setError", null);
      return new Promise((resolve, reject) => {
        axios
          .get(apiEndpoints.orders.getOrderById(orderId))
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
    deleteOrder({ commit }, id) {
      commit("setLoading", true);
      commit("setError", null);
      new Promise((resolve, reject) => {
        axios
          .delete(apiEndpoints.orders.delete, { data: { id } })
          .then(
            //Якщо добре
            (res) => res.data
          )
          .then((resData) => {
            if (resData.success) {
              commit("deleteOrderFromList", id);
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
