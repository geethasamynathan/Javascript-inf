//example
/*function getTrip(){
    return new Promise(function(resolve){
      setTimeout(function() {
        resolve("Lets go to Trip");
      }, 2000);
    });
  };

    getTrip().then(
    function(futureData){
        console.log(futureData);
    }
);
*/
 

/*
  function getTrip(location) {
    return new Promise(function(resolve, reject) {
      if (location == "ooty") {
          resolve("Trip to " + location);
      } else {
        reject(Error("Some error occured"));
      }
    });
  }
  
  
  getTrip("Kodai").then(
    function(data) {
      console.log(data);
    },
    function(error) {
      console.log(error);
    }
  );
  // Trip to ooty
  getTrip("Kodai").then(
    function(data) {
      console.log(data);
    }.catch(
    function(error) {
      console.log(error);
    })
  );

  getTrip("coorg").then(
  function(data) {
    console.log(data);
  },
  function(error) {
    console.log(error.message);
  }
);
// Error: Some error occurred

  */

/*
  function bookFlight() {
    return new Promise(function (resolve) {
        setTimeout(resolve(5600), 2000);
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
bookFlight()
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
  */
/*
    function bookFlight(airline) {
        return new Promise(function (resolve, reject) {
            if (airline == "AirIndia") {
                setTimeout(resolve(5600), 2000);
            } else {
                reject(Error("Flight can not be booked"))
            }
        })
    }
    function bookHotel(flightPrice) {
        return new Promise(function (resolve) {
            setTimeout(resolve(7000 + flightPrice), 1000);
        })
    }
    bookFlight("indigo")
        .then(function (flightData) { return bookHotel(flightData) })
        .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
        .catch(e => console.log(e.message))
    */

     // chaining of promises using a concept called as async-await.

     function bookFlight() {
        return new Promise(function (resolve) {
            setTimeout(resolve(5600), 2000);
        })
    }
    function bookHotel(flightPrice) {
        return new Promise(function (resolve) {
            setTimeout(resolve(7000 + flightPrice), 1000);
        })
    }
    // function getTotal(){
    // bookFlight()
    //     .then(function (flightData) { return bookHotel(flightData) })
    //     .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
    // }
    // getTotal()
    
    async function getTotal(){
        var flightData=await bookFlight();
        var cumulativeData=await bookHotel(flightData);
        console.log(" Total is " + cumulativeData) 
        }
    getTotal();