//Example :1
/*
function validateTravellerPassword(password) {
    for (i = 0; i < password.length; i++) {
    }
}
function validateTravellerName(name) {
    console.log("The value of i is "+i);
    for (i = 0; i < name.length; i++) {
    }
}
validateTravellerPassword("12345");
validateTravellerName("Jack");
*/
 /*
As shown above, the variable i used in the for-loop of validateTravellerPassword() is global.
*/


//Example 2 :using var
/*
function validateTravellerPassword(password) {
    for (var i = 0; i < password.length; i++) {
    }
}
function validateTravellerName(name) {
    console.log("The value of i is "+i);
        for (var i = 0; i < name.length; i++) {
    }
}
validateTravellerPassword("password");
validateTravellerName("Josh");
*/
//Example :3
/*
function validateTravellerName(name) {

    for (let i = 0; i < name.length; i++) {
     }
  console.log(i); // This will give an error as i is not accessible outside the for block.
}
validateTravellerName("Josh");

*/

//Example :5
function validateTravellerName() {

    const a=10
    console.log(a);
    //a=20
    console.log(a);
  }
 // console.log(a) //Error a is not defined as it is having scope inside the function.
  validateTravellerName()