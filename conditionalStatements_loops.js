// Exercise 1: Temperature Check

// Temperature check using if-else statements
let temperature1 = 18;

if (temperature1 < 0) {
  console.log("It's freezing!");
} else if (temperature1 >= 0 && temperature1 <= 15) {
  console.log("It's cold.");
} else if (temperature1 >= 16 && temperature1 <= 25) {
  console.log("It's mild.");
} else if (temperature1 > 25) {
  console.log("It's warm.");
}

// Temperature check using switch statements
let temperature2 = 18;

switch (true) {
  case temperature2 < 0:
    console.log("It's freezing!");
    break;
  case temperature2 >= 0 && temperature2 <= 15:
    console.log("It's cold.");
    break;
  case temperature2 >= 16 && temperature2 <= 25:
    console.log("It's mild.");
    break;
  case temperature2 > 25:
    console.log("It's warm.");
    break;
  default:
    console.log("Invalid temperature range.");
}
