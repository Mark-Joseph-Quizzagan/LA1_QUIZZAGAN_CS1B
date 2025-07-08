//Comparison Activity

//favorite numbers
let firstFavNumb = 99;
let secondFavNumb = 11;
let thirdFavNumb = 99.9;

//It will perform comparisons
let isGreater = firstFavNumb > secondFavNumb;
let isLess = firstFavNumb < secondFavNumb;
let isGreaterOrEqual = firstFavNumb >= thirdFavNumb;
let isLessOrEqual = secondFavNumb <= thirdFavNumb;
let isStrictEqual = firstFavNumb === thirdFavNumb;
let isLooseEqual = firstFavNumb == thirdFavNumb;
let isStrictNotEqual = secondFavNumb !== thirdFavNumb;
let isLooseNotEqual = secondFavNumb != thirdFavNumb;

//Log all results
console.log("First Favorite Number: " + firstFavNumb);
console.log("Second Favorite Number: " + secondFavNumb);
console.log("Third Favorite Number: " + thirdFavNumb);
console.log("-----------------------------");
console.log("Is firstFavNumb > secondFavNumb? " + isGreater);
console.log("Is firstFavNumb < secondFavNumb? " + isLess);
console.log("Is firstFavNumb >= thirdFavNumb? " + isGreaterOrEqual);
console.log("Is secondFavNumb <= thirdFavNumb? " + isLessOrEqual);
console.log("Is firstFavNumb === thirdFavNumb? " + isStrictEqual);
console.log("Is firstFavNumb == thirdFavNumb? " + isLooseEqual);
console.log("Is secondFavNumb !== thirdFavNumb? " + isStrictNotEqual);
console.log("Is secondFavNumb != thirdFavNumb? " + isLooseNotEqual);
