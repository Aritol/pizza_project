const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderScheme = new Schema({
  deliveryType: { type: String, required: true, minlength: 1, maxlength: 60 },
  userName: { type: String, required: true, minlength: 3, maxlength: 100 },
  userSecondName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  userSurname: { type: String, required: true, minlength: 3, maxlength: 100 },
  userPhoneNumber: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
  },
  userMail: { type: String, required: true, minlength: 3, maxlength: 50 },
  address: { type: String, required: true, minlength: 3, maxlength: 500 },

  message: { type: String, maxlength: 1000 },
  status: { type: String, required: true, minlength: 1, maxlength: 30 },
  totalPrice: { type: Number, required: true, minlength: 1, maxlength: 30 },
  date: { type: Array, required: true, minlength: 1, maxlength: 30 },
  orderList: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
});
const OrderModel = mongoose.model("Order", orderScheme);

module.exports = OrderModel;
