const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/elastic-mongo', { useNewUrlParser: true, useUnifiedTopology: true, }).
    catch(error => handleError(error));

mongoose.Promise = global.Promise;

module.exports = mongoose;
