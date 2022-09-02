//Example :1
/*
placesToVisit = ["Paris", "New York", "Switzerland"];
console.log(placesToVisit[0]);
// Paris
console.log(placesToVisit[2]);
// Switzerland
*/


//Example :2
/*
numArr=[100,200,300];
var [a,b,c]=numArr;
// the numArr is now destructured and individual values are stored in the individual variables.
console.log(a);
console.log(b);
console.log(c);
*/

//Example :3 push
/*
places = ["Paris", "New York"];
places.push("Switzerland");
console.log(places);
// ["Paris", "New York", "Switzerland"]

*/

//Example :4 pop
/*
places = ["Paris", "New York",  "Switzerland"];
places.pop();
console.log(places);
// ["Paris", "New York"]

*/
//example :5 indexof
/*
places = ["Paris", "New York",  "Switzerland"];
console.log(places.indexOf("New York"));
// 1
*/

//Exampl :6  splice(pos, n)
/*
places = ["Paris", "New York",  "Switzerland"];
places.splice(1, 2); // This will remove 2 elements from index 1
console.log(places);
// ["Paris"]

*/

//Example :7 forEach()
/*
places = ["Paris", "New York",  "Switzerland"];
places.forEach(function(place) {
    console.log(place);
    }
);
// Paris
// New York
// Switzerland
*/
//Example :8 map
/*
placesToVisit= ["Paris", "New York",  "Switzerland"];
function display_uppercase(place) {
    return place.toUpperCase();
}
placesUpparCase = placesToVisit.map(display_uppercase);
console.log(placesUpparCase);
*/

//example :9 Filter
/*
placesToVisit= ["Paris", "New York",  "Switzerland"];
function filterPlaces(val) {
    if (val.length <=5) {
        return true;
    }
}
filteredPlaces = placesToVisit.filter(filterPlaces);
console.log(filteredPlaces );
*/

//Example :10 find()
/*
placesToVisit= ["Paris", "New York",  "Switzerland"];
function filterPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}
filteredPlaces = placesToVisit.filter(filterPlaces);
console.log(filteredPlaces );

*/

//Example :11 Array in forEach
/*
placesToVisit= ["Paris", "New York",  "Switzerland"];
placesToVisit.forEach(place => console.log("Trip to " + place));
// Trip to Paris
// Trip to New York
// Trip to Switzerland

*/

//Example :12
placesToVisit= ["Paris", "New York",  "Switzerland"];
placesUpperCase = placesToVisit.map(place => place.toUpperCase());
console.log(placesUpperCase);
// ["PARIS", "NEW YORK", "SWITZERLAND"]


