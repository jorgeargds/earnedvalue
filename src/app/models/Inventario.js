// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var inventarioSchema = new Schema({
  Producto: String,
  Proveedor: String,
  Cantidad: Number
  
});

// the schema is useless so far
// we need to create a model using it
var Inventario = mongoose.model('Inventario', inventarioSchema);

// make this available to our users in our Node applications
module.exports = Inventario;
