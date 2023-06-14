module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama_produk: String,
      harga: Number,
      jumlah_produk: Number,
      varian: Object,
    },
    {
      timestamps: true,
    }
  );
  return mongoose.model("produk", schema);
};
