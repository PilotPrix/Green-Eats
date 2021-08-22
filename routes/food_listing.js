const express = require('express');
const fs = require('fs');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('food_listing', { title: 'Express' });
});

router.post('/', function(req, res) {
    let food = []
    let quantity = []
    let price = []
    /*const food = req.body["food_item_1"];
    const quantity = req.body["quantity_1"];
    const price = req.body["price_1"];*/

    let i = 0
  
    while ("food_item_" + (i + 1) in req.body) {
        console.log(req.body)
        try{
            food[i] = req.body["food_item_" + (i + 1)]
            quantity[i] = req.body["quantity_" + (i + 1)]
            price[i] = req.body["price_" + (i + 1)]
        }
        catch{
            break
        }
        i++;
    }

    const address = req.body["location"]
    const company = req.body["company"]
    
    const jsonOut = {food,quantity,price};
    fs.appendFile("jsons/food_listing.json", JSON.stringify({food,quantity,price,address,company}) + "\n", function (err) {
        if(err) {
            console.log("Error adding listing");
            return console.log(err);
        } else {
            console.log("Listing added");
        }
    });
    res.render('listing_confirm', { title: 'Express' });
})

module.exports = router;
