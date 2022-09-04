/*placesToVisit=["Paris","New York","Switzerland"]
console.log(placesToVisit[0]);
console.log(placesToVisit[1]);
console.log(placesToVisit[2]);
*/
/*
numArray=[100,200,300];
var [a,b,c]=numArray;
console.log(a);
console.log(b);
console.log(c);

*/
/*
places =["Paris","New York"];
places.push("Switzerland");
console.log(places);
places.pop();
console.log("After called pop "+places);

console.log(places.indexOf("Paris"));
console.log(places.indexOf("New York"));

*/
/*
places =["Paris","New York","Switzerland","England"];
places.splice(1,2);
console.log(places);
*/
/*
places =["Paris","New York","Switzerland","England"];

places.forEach(function(place){
    console.log(place);
})

*/
/*
places =["Paris","New York","Switzerland","England"];

function display_uppercase(place){
    return place.toUpperCase();
}
placesUpperCase =places.map(display_uppercase);
console.log(placesUpperCase);

*/
/*
places =["Paris","New York","Switzerland","England"];

function FilterPlaces(val)
{
    if(val.length >5)
    return true;
}
filteredplaces=places.filter(FilterPlaces);
console.log(filteredplaces)
filteredplaces=places.find(FilterPlaces);
*/

places =["Paris","New York","Switzerland","England"];

places.forEach(place => console.log("I wish to visit "+place));
placesinUpperCase=places.map(place => place.toUpperCase());
console.log(placesinUpperCase)
filteredPlaces=places.filter(place => place.length >7);
console.log(filteredPlaces);
