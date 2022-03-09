const mongoose = require("mongoose");
const saleModel = require("../models/sale");

    exports.search = (req, res, next ) => {
        
        saleModel.on('es-indexed', function(err,res) {
            if(!err) console.log("index lunched -");
            else console.log("Tessssssssssssst ! ");
        });  

        let terms = {
            "multi_match": {
                "query": "Safco",
                "fields": ["Product_Name", "Product_Category"]
            }
        };

        saleModel.search( terms , { hydrate:true } , function(err,results) {
            if(!err)
                res.status(200).json(results.hits.hits);
            else 
                res.status(500).json(err);
        })
        
    }

    exports.getall = (req, res, next ) => {
        saleModel.find({}, function(err, sales) {
        res.status(200).json(sales);
    });
}