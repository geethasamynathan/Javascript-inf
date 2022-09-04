/*
function greet(name,callback)
{
    console.log("Hi "+name);
    callback();
}

function CallMe()
{
    console.log("Hello from callback function");
}

greet('Geetha',CallMe);

*/

/*
function greet()
{
    console.log("Welcome");
}
function SayHello(name)
{
    console.log("Hello "+ name)
}

setTimeout(greet,3000);
SayHello('Geetha');
*/


function greet(name,mycallfun)
{
    console.log('Welcome');
    mycallfun(name);
}
function SayName(name)
{
    console.log("Hello " +name);
}
setTimeout(greet,2000,'Geetha',SayName);