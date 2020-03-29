const Product = require("../model/product");

module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then(products => {
      res.json(products);
    })
    .catch(err => console.log(err));
};

module.exports.getProduct = (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .then(product => {
      res.json(product);
    })
    .catch(err => console.log(err));
};

module.exports.addProduct = (req, res) => {
  if (typeof req.body == undefined) {
    res.json({
      status: "error",
      message: "data is undefined"
    });
  } else {
    res.json({
      id: 21,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category
    });
  }
};

module.exports.editProduct = (req, res) => {
  if (typeof req.body == undefined || req.body.id == null) {
    res.json({
      status: "error",
      message: "something went wrong! check your sent data"
    });
  } else {
    res.json({
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category
    });
  }
};

module.exports.deleteProduct = (req, res) => {
    if (typeof req.body == undefined || req.body.id == null) {
        res.json({
          status: "error",
          message: "something went wrong! check your sent data"
        });
      } else {
      Product.findById(req.params.id)
      .then(product=>{
        res.json({
            id: req.body.id,
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category
          });
      })
    }
  };