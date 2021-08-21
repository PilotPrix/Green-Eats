let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('food_listing', { title: 'Express' });
});

router.post('/', function(req, res) {
  const food = req.body["food_item_1"]
  const quantity = req.body["quantity_1"]
  const price = req.body["price_1"]

  res.json({food, quantity, price})
})

module.exports = router;
