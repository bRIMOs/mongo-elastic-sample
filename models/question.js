const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const qChoiseSchema = new Schema({
    title: String,
    isCorrectAnswer: Boolean,
    urlImage:String
})

const salesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    isMultiChoise: Boolean,
    isImageChoise:Boolean,
});

module.exports = mongoose.model('Question', questionSchema); 