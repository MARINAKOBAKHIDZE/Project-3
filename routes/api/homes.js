const router = require("express").Router();
const Homes = require("../../models/homesSale");

module.exports = router;

//getting all homes

router.get('/', (req,res) => {

    Homes.findAll({}).then(results => {
        // results are available to us inside the .then
        res.json(results);
      });

});