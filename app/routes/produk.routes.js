const produk = require("../controller/produk.controller");

module.exports = (app) => {
  const r = require("express").Router();
  r.get("/", produk.findAll);
  r.post("/", produk.create);

  app.use("/produk", r);
};
