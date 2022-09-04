function bookFlight(){
    return new Promise(function (resolve,reject){
        setTimeout(resolve(89000),2000);
    });
}

function bookHotel(flightCost){
    return new Promise(function (resolve){
        setTimeout(resolve(50000+flightCost),2000);
    })
}
/*
function getTotal()
{
    bookFlight()
    .then(function (flightCost){return bookHotel(flightCost) })
    .then( function (cumulativeDate){console.log("Total cost for Your Trip is"+cumulativeDate);
})
}
*/

async function getTotal(){
    var flightCost=await bookFlight();
    var TotalCost=await bookHotel(flightCost);
    console.log("Total Cost for your Trip is"+TotalCost);
}
getTotal();