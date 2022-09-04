//Exmaple 1
/*
function myFunction(num1,num2)
{
    num3=num1+num2;
    return num3;
}

console.log(myFunction(23,56));
*/

//Example :2
/*
var funVariable=function myFunction(num1,num2)
{
    num3=num1+num2;
    return num3;
}
console.log(funVariable(56,78));
*/

//Example :3
/*
function welcome()
 { 
    console.log('Hello Welcome');
}

function goodBye()
{
    console.log(' goodBye. See You later');
}

function greet(choice)
{
    choice();
}

greet(welcome);
greet(goodBye);

*/

//Example :4
/*
function greet()
{
    var hello =function welcome(){console.log("Hello Welocme");}
    return hello;
}

var result=greet();
result();
*/
// Anonymous Function

/*
function greet(choice)
{
    choice();
}

greet( function () {
    console.log('Anonymous Function');
});
*/

//Arrow Function
/*
CalculateCost=(tickectPrice,noOfPerson) =>{
    tickectPrice =noOfPerson*tickectPrice;
    return tickectPrice;
}

console.log('TotalCost '+CalculateCost(500,5));
*/
/*
trip= () => "Lets go for Trip";
console.log(trip());
*/
trip= place => "Lets go for Trip to "+place;
console.log(trip('England'));