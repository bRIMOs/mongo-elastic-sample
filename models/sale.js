const mongoose = require("mongoose");

const mongoosastic = require('mongoosastic');

var Schema = mongoose.Schema;

const salesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    OrderID: Number,
});

salesSchema.plugin(mongoosastic, {
    "host": "localhost",
    "port": 9200
});

module.exports = mongoose.model('Sale', salesSchema); 