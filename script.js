// This is a single line comment

/*
  This is a
  multi line comment
*/

/* 
  Declaring a const called helloWorld and assigning a string to it.
  A const is a variable that is constant, meaning the value of it will not change
*/
const helloWorld = "Hello, world!"

// Logs a value to the console, in this case, the variable helloWorld
console.log(helloWorld)

// If uncommented, line 18 returns an error since you cannot change the value of a const
// helloWorld = "Hello, changing world!"

// Notice how when I use let I can change the value
let helloChangingWorld = "Hello, new world!" //assign original value
console.log(helloChangingWorld) //print original value

helloChangingWorld = "Hello, new value!" //assign new value
console.log(helloChangingWorld) //print new value


// This is a function that shows an alert when called
function alertBox() {
  alert("This is an alert")
}


// function that changes the content of a html tag, in this case it searches for an element with the id = "changeText" and changes the innerHTML when called
function chageText() {
  document.getElementById("changeText").innerHTML = "Paragraph changed!";
}


/*
  A let is different to a const in that the value of a let can be changed later on.

  This is a function where I get the value from elements with the id #name and #age.  Then I print the values to an element with id #displayNameAge
*/
function displayNameAge() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  document.getElementById("displayNameAge").innerHTML = name + " is " + age + " years old";
}

