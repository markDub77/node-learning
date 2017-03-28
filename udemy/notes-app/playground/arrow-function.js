// longform
var square1 = (x) => {
  var result = x * x;
  return result;
};

// shorthand
var square2 = (x) => x * x;

// shorthand with only one argument
var square3 = x => x * x;


// console.log(square1(9));
// console.log(square2(9));
// console.log(square3(9));




// ========================================================================
// arrow functions do not bind the this key word or the arguments variable
// ========================================================================

var user = {
  name: 'Mark',
  sayHi: () => {
    console.log(arguments);
    console.log (`Hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log (`Hi. I'm ${this.name}`);
  }
};

//// this does not work
// user.sayHi(1,2,3);
// user.sayHi();

//// this does work
// user.sayHiAlt(1,2,3);
// user.sayHiAlt();
