const formidable = require("formidable");
const OrderModel = require("../models/order");
const fs = require("fs");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = req.query.searchParams || {};

  OrderModel.find(searchObj)
    .populate("orderList.product")
    .exec(function (err, orders) {
      if (err)
        return sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Fetch faild!" },
        });

      sendJSONResponse(res, 200, { success: true, data: orders });
    });
};

module.exports.update = function (req, res, next) {
  let order = {
    status: req.body.status,
  };

  OrderModel.findByIdAndUpdate(
    req.body.id,
    order,
    { new: true }, //у колбек передається оновлений документ
    function (err) {
      // mongoose.disconnect()
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Update faild!" },
        });
        return;
      }

      sendJSONResponse(res, 200, { success: true });
    }
  );
};

module.exports.add = function (req, res, next) {
  let order = new OrderModel({
    deliveryType: req.body.deliveryType,
    userName: req.body.userName,
    userSecondName: req.body.userSecondName,
    userSurname: req.body.userSurname,
    userPhoneNumber: req.body.userPhoneNumber,
    userMail: req.body.userMail,
    // address: req.body.address,
    message: req.body.message,
    status: "В обробці",
    totalPrice: parseInt(req.body.totalPrice),
    date: req.body.date,
    orderList: req.body.productList,
  });
  order.save(function (err, savedOrder) {
    console.log("saving");
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Saving faild!" },
      });
      console.log(err);
      return;
    }
    sendJSONResponse(res, 201, { success: true, data: savedOrder });
  });
};

module.exports.delete = function (req, res) {
  console.log("---------req.body");
  console.log(req.body);
  OrderModel.findByIdAndDelete(req.body.id, function (err) {
    if (err) {
      console.log("---------err");
      console.log(err);
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Delete faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true });
  });
};

module.exports.getById = function (req, res) {
  OrderModel.findById(req.params.id)
    .populate("orderList.product")
    .exec(function (err, searchOrder) {
      if (err) {
        sendJSONResponse(res, 500, {
          success: false,
          err: { msg: "Find product faild!" },
        });
        return;
      }
      sendJSONResponse(res, 200, { success: true, data: searchOrder });
    });
};

// module.exports.getById = function (req, res) {
//
//   console.log("norm");
//   console.log(req.params.id);
//   OrderModel.findById(req.params.id, function (err, searchOrder) {
//     if (err) {
//       sendJSONResponse(res, 500, {
//         success: false,
//         err: { msg: "Find product faild!" },
//       });
//       return;
//     }
//     sendJSONResponse(res, 200, { success: true, data: searchOrder });
//   });
// };
