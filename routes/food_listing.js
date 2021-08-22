const express = require('express');
const fs = require('fs');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('food_listing', { title: 'Express' });
});

router.post('/', function(req, res) {
    const food = req.body["food_item_1"];
    const quantity = req.body["quantity_1"];
    const price = req.body["price_1"];
    const jsonOut = {food,quantity,price};
    fs.writeFile("jsons/food_listing.json", JSON.stringify({food,quantity,price}), function (err) {
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
