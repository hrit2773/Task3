const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
  price:{type: Number,required:true},
  quantity:{type: Number,required:true}
});

const products = mongoose.model('Products', productSchema);

module.exports = products;