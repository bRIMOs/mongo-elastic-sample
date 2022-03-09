const mongoose = require("mongoose");

const mongoosastic = require('mongoosastic');

var Schema = mongoose.Schema;

const salesSchema = new Schema({

    _id: Schema.Types.ObjectId,
    Order_ID: Number,
    Order_Priority: String,
    Order_Quantity:Number,
    Sales: Number,
    Ship_Mode: String,
    Profit: Number,
    Customer_Name: String,
    Region: String,
    Customer_Segment: String,
    Product_Category: String,
    Product_Sub_Category: String,
    Product_Name: String,
    Product_Container: String

});

salesSchema.plugin(mongoosastic, {
    "host": "localhost",
    "port": 9200
});



Sale = mongoose.model('Sale', salesSchema); 

sync = Sale.synchronize()
  , count = 0;

sync.on('data', function(err, doc){
  count++;
});
sync.on('close', function(){
  console.log('indexed ' + count + ' documents!');
});
sync.on('error', function(err){
  console.log(err);
});

module.exports = Sale;