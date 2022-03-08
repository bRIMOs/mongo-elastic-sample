const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const dbconnection = require("./config/dbconnect");

const testRoutes = require("./routes/testRoutes");

const app = express();

// morgan logger extra logs
app.use(logger("combined"));

app.use(bodyParser.urlencoded({ extended: false }));

// use body-parser middleware (to get params in req.body )
app.use(bodyParser.json());



// cors and options req
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === "OPTIONS") {
//         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//         return res.status(200).json({});
//     }
//     next();
// });
  


app.get("/",function(req, res) {
    res.send("hello");
})

// Setting routes
app.use("/test", testRoutes);





// handle 4040 error when trying to reach non existing route 
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});


// handle error that reach this middle waore  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;