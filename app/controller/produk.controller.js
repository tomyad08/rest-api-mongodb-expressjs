const db = require("../models");
const Produk = db.produk;

exports.create = (req, res) => {
  Produk.create(req.body)
    .then(() => res.send({ message: "data berhasil di simpan" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.findAll = async (req, res) => {
  try {
    const data = await Produk.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};
