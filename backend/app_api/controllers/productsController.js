const formidable = require("formidable");
const ProductModel = require("../models/product");
const fs = require("fs");

const sendJSONResponse = (res, status, content) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(status).json(content);
};

module.exports.getList = function (req, res) {
  const searchObj = {};
  // const searchObj = { category: req.params.category } || {};
  // console.log("req.params.category");
  // console.log(req.params.category);

  // console.log("searchObj");
  // console.log(searchObj);

  // ProductModel.find(searchObj).exec(function (err, products) {
  //   if (err)
  //     return sendJSONResponse(res, 500, {
  //       success: false,
  //       err: { msg: "Fetch faild!" },
  //     });

  //   sendJSONResponse(res, 200, { success: true, data: products });

  //   // console.log(products);
  // });
  // console.log(searchObj);
  ProductModel.find(searchObj, function (err, products) {
    if (err) {
      return sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Fetch faild!" },
      });
    } else {
      if (!products.length) {
        return sendJSONResponse(res, 500, { success: false });
      } else {
        sendJSONResponse(res, 200, { success: true, data: products });
      }
    }
  });
};

module.exports.add = function (req, res, next) {
  let num = 0;
  let product;

  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log("fields");
    // console.log(fields);
    // product = new ProductModel();
    // if (fields.price) {
    //   console.log("if");
    //   product = {
    //     name: fields.name,
    //     price: parseInt(fields.price),
    //     description: fields.description,
    //     photo: {
    //       data: fs.readFileSync(files.photo.filepath),
    //       contentType: files.photo.mimetype,
    //     },
    //     category: fields.category,
    //   };
    // } else {
    //   console.log("else");
    //   product = {
    //     name: fields.name,
    //     priceS: parseInt(fields.priceS),
    //     priceM: parseInt(fields.priceM),
    //     description: fields.description,
    //     photo: {
    //       data: fs.readFileSync(files.photo.filepath),
    //       contentType: files.photo.mimetype,
    //     },
    //     category: fields.category,
    //   };
    // }
    if (fields.price) {
      product = new ProductModel({
        name: fields.name,
        price: parseInt(fields.price),
        description: fields.description,
        photo: {
          data: fs.readFileSync(files.photo.filepath),
          contentType: files.photo.mimetype,
        },
        category: fields.category,
      });
    }
    if (fields.priceS) {
      product = new ProductModel({
        name: fields.name,
        priceS: parseInt(fields.priceS),
        priceM: parseInt(fields.priceM),
        description: fields.description,
        photo: {
          data: fs.readFileSync(files.photo.filepath),
          contentType: files.photo.mimetype,
        },
        category: fields.category,
      });
    }
    console.log("product");
    console.log(product);
  });
  form.on("end", function (d) {
    console.log("3333333333");
    num++;
    //Помилка модуля (викликається двічі)
    if (num == 1) {
      //Збереження моделі і відключення від бази даних
      product.save(function (err, savedProduct) {
        if (err) {
          sendJSONResponse(res, 500, {
            success: false,
            err: { msg: "Saving faild!" },
          });
          console.log(err);
          return;
        }
        sendJSONResponse(res, 201, { success: true, data: savedProduct });
      });
    }
  });
};

module.exports.update = function (req, res, next) {
  let num = 0;
  let product;
  console.log("req.body");
  console.log(req.body);
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    console.log("111111");
    if (err) {
      next(err);
      return;
    }
    if (fields.price) {
      //Створення об’єкта моделі
      product = {
        name: fields.name,
        price: parseFloat(fields.price),
        description: fields.description,
        category: fields.category,
      };
    } else {
      product = {
        name: fields.name,
        priceS: parseFloat(fields.priceS),
        priceM: parseFloat(fields.priceM),
        description: fields.description,
        category: fields.category,
      };
    }
    req.body.id = fields._id;
    req.body.product = product;
    console.log("req.body.id");
    console.log(req.body.id);
    console.log("req.body.product");
    console.log(req.body.product);
    if (files.photo.originalFilename) {
      //Якщо надіслано нове фото, то змінюємо поле фото
      product.photo = {
        data: fs.readFileSync(files.photo.filepath),
        contentType: files.photo.mimetype,
      };
    }
  });
  form.on("end", function (d) {
    console.log("3333333333");
    console.log("asdasdasdasdasdasdasdasdasdasdasd");
    num++;
    //Помилка модуля (викликається двічі)
    if (num == 1) {
      //Збереження моделі і відключення від бази даних
      ProductModel.findByIdAndUpdate(
        req.body.id,
        req.body.product,
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
    }
  });
};

module.exports.delete = function (req, res) {
  console.log("---------req.body");
  console.log(req.body);
  ProductModel.findByIdAndDelete(req.body.id, function (err) {
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

// module.exports.getById = function (req, res) {
//   //Пошук об"єкта-книги за id
//   ProductModel.findById(req.params.id)
//     .populate("owner")
//     .exec(function (err, searchProduct) {
//       if (err) {
//         sendJSONResponse(res, 500, {
//           success: false,
//           err: { msg: "Find product faild!" },
//         });
//         return;
//       }
//       sendJSONResponse(res, 200, { success: true, data: searchProduct });
//     });
// };

module.exports.getById = function (req, res) {
  //Пошук об"єкта-книги за id
  console.log("norm");
  console.log(req.params.id);
  ProductModel.findById(req.params.id, function (err, searchProduct) {
    if (err) {
      sendJSONResponse(res, 500, {
        success: false,
        err: { msg: "Find product faild!" },
      });
      return;
    }
    sendJSONResponse(res, 200, { success: true, data: searchProduct });
  });
};
