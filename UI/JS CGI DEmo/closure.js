/* 
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  */
  // nested function example (closure)

  /*
  // outer function
  function greet(name) {
  
      // inner function
      function displayName() {
          console.log('Hi' + ' ' + name);
      }
  
      // calling inner function
      displayName();
  }
  
  // calling outer function
  greet('John'); // Hi John

  */

  //Returning A Function

  function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('John');
console.log(g1); // returns the function definition
g1(); // calling the function