const express = require('express');
const router = express.Router();

//sending orders from .json array
router.post('/', function(req, res) {
    var selectedMonth = req.body.month;

    //array of orders
    var orders = [
        { topping: "cherry", quantity: 2 },
        { topping: "plain", quantity: 6 },
        { topping: "chocolate", quantity: 3 }
    ];

    // send response
    res.json(orders);
});

module.exports = router;
