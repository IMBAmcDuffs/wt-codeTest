var express = require('express');
const FlightQuery = require('../../services/FlightQuery');
var router = express.Router();

router.get('/', async function (req, res, next) {
    // define expected query data //
    let query = {
        range: {
            min: null,
            max: null
        },
        duration: null,
        carrier: null
    }

    const FlightService = new FlightQuery(query)

    // setup the flights (needs to be moved) //
    await FlightService.call()
    // lets search against our flights //

    const flightList = FlightService.scoreFlights(query)


    res.send({
        flights: flightList
    })

});

module.exports = router;
