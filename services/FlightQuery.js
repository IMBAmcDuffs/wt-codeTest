// our primary service handler for all the requests to pull / manage and orchistrate our data to the controller //
class FlightQuery {

    constructor() {
        this.uri = "https://gist.githubusercontent.com/bgdavidx/132a9e3b9c70897bc07cfa5ca25747be/raw/8dbbe1db38087fad4a8c8ade48e741d6fad8c872/gistfile1.txt";
        this.flights = [];
    }


    // This will handle pulling down the response data from the target and then will score //
    async scoreFlights(query) {
        const flights = await this.call()

        console.log('flights', flights)
    }

    // Our primary handler for calling out to our data //
    async call () {
        try {
            const request = await fetch(this.uri, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'GET'
            });

            return await request.json()
        // lets make sure we have our data //
        }
        catch(e) {

            console.error('Fetch Error ', e)
            // TODO Add logger and reasons //
            // throw Error(`Could not fetch the data`)
        }
    }
}

module.exports = FlightQuery