// strings.js

// Favorite actor 1
let favActorFirstName1 = "Dweyne";
let favActorLastName1 = "Johnson";

// Favorite actor 2
let favActorFirstName2 = "Kevin";
let favActorLastName2 = "Hart";

// Full names
let fullName1 = favActorFirstName1 + " " + favActorLastName1;
let fullName2 = favActorFirstName2 + " " + favActorLastName2;

// It will turn into uppercase versions
let uppercase1 = fullName1.toUpperCase();
let uppercase2 = fullName2.toUpperCase();

// Messages
let message1 = "My favorite actor is " + uppercase1;
message1 += " and his best show is Central Intelligence.";

let message2 = "My favorite actor is " + uppercase2;
message2 += " and his best movie is Central Intelligence.";

// Log everything
console.log("Actor 1 First Name: " + favActorFirstName1);
console.log("Actor 1 Last Name: " + favActorLastName1);
console.log("Actor 1 Full Name: " + fullName1);
console.log("Actor 1 Uppercase: " + uppercase1);
console.log("Message 1: " + message1);
console.log("-------------------------------");
console.log("Actor 2 First Name: " + favActorFirstName2);
console.log("Actor 2 Last Name: " + favActorLastName2);
console.log("Actor 2 Full Name: " + fullName2);
console.log("Actor 2 Uppercase: " + uppercase2);
console.log("Message 2: " + message2);

