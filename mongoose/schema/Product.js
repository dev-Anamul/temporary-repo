const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String,
    category: String,
  },
  {
    timestamps: true,
    methods: {},
    statics: {},
  }
);

const Product = model("Product", productSchema);
module.exports = Product;
