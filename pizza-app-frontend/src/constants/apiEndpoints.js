export default {
  products: {
    read: (category) => `${process.env.VUE_APP_API_URL}/products/${category}`,
    readList: `${process.env.VUE_APP_API_URL}/products`,
    add: `${process.env.VUE_APP_API_URL}/products`,
    update: `${process.env.VUE_APP_API_URL}/products`,
    getProductById: (category, id) =>
      `${process.env.VUE_APP_API_URL}/products/${category}/${id}`,
    delete: `${process.env.VUE_APP_API_URL}/products`,
  },
  user: {
    login: `${process.env.VUE_APP_API_URL}/users/login`,
    signup: `${process.env.VUE_APP_API_URL}/users/signup`,
    usersList: `${process.env.VUE_APP_API_URL}/users`,
  },
  orders: {
    add: `${process.env.VUE_APP_API_URL}/orders/add`,
    readList: `${process.env.VUE_APP_API_URL}/orders`,
    getOrderById: (id) => `${process.env.VUE_APP_API_URL}/orders/${id}`,
    update: `${process.env.VUE_APP_API_URL}/orders`,
    delete: `${process.env.VUE_APP_API_URL}/orders`,
  },
};
