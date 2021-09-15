/* FUNDAMENTALS */

/* COMMENTS */

// This is a single line comment
/*
  This is a
  multi line comment
*/

/* OUTPUT */

// A message logged to the console
console.log("This is a message logged to the console")

// function that shows an alert box when called
function alertBox() {
  alert("This is an alert")
}

// function that changes the content of a html tag, in this case it searches for an element with the id = "changeText" and changes the innerHTML when called
function chageText() {
  document.getElementById("changeText").innerHTML = "Paragraph changed!";
}


/* VARIABLES */
/* 
  Declaring a const called helloWorld and assigning a string to it.
  A const is a variable that is constant, meaning the value of it will not change
*/
const helloWorld = "Hello, world!"

// the value of the variable helloWorld logged to the console
console.log(helloWorld)

// If uncommented, line 18 returns an error since you cannot change the value of a const
// helloWorld = "Hello, changing world!"

// Notice how when I use let I can change the value
let helloChangingWorld = "Hello, new world!" //assign original value
console.log(helloChangingWorld) //print original value

helloChangingWorld = "Hello, new value!" //assign new value
console.log(helloChangingWorld) //print new value


/*
  A let is different to a const in that the value of a let can be changed.

  This is a function where I get the value from elements with the id #name and #age.  Then I print the values to an element with id #displayNameAge
*/
function displayNameAge() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  document.getElementById("displayNameAge").innerHTML = name + " is " + age + " years old";
}


/* DATA TYPES */

// We can assign numbers to variables
let x = 10
let y = 5

/* 
  Here we do some math with the variables we decleared above and log the result to the console
  I am using backticks `` and that way I can use a variable inside the string using ${var}
*/
console.log(`${x} + ${y} = ` + (x+y))
console.log(`${x} - ${y} = ` + (x-y))
console.log(`${x} * ${y} = ` + (x*y))
console.log(`${x} / ${y} = ` + (x/y))


// An if statement that checks if x is lager then y, this returns true since 10 is lager then 5 so it runs the code in the if code block
if (x>y) {
  console.log(x + " is bigger then " + y)
}


// Array

// Declaring an array called fruits
const fruitBasket = ["banana", "apple", "orange", "kiwi"]

console.log(fruitBasket[3]) // prints the forth item in the array
console.log("There are " + fruitBasket.length + " fruits in the basket") // prints the amount of items in the array


// Objects
// Objects are variables too. But objects can contain more then one value.

// Here is an object for a person, this object contains information about the person, for example name, age and eyecolor
const person = {
  fname: "John",
  lname: "Doe",
  // A function that combines first and last name to become full name
  fullName: function(){
    return this.fname + " " + this.lname;
  },
  age: 24,
  eyeColor: "green"
}

// We can then call each value from the object
console.log("Hello " + person.fullName())

// We can also add values to the object
person.hairColor = "brown"

console.log(person.hairColor) // printing the newly added property

delete person.age // deleting the age proterty from the person object

console.log(person.age) // now person.age is undefined
