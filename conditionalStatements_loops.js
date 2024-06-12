// Exercise 1: Temperature Check

// Temperature check using if-else statements
var temperature = 18;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else if (temperature > 25) {
  console.log("It's warm.");
}

// Temperature check using switch statements
var temperature = 18;

switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature >= 0 && temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature >= 16 && temperature <= 25:
    console.log("It's mild.");
    break;
  case temperature > 25:
    console.log("It's warm.");
    break;
  default:
    console.log("Invalid temperature range.");
}

//Exercise 2: Divisibility Check

// Divisibility check using if-else statements
var number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// Divisibility check using switch statements
var number = 12;

switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log("Divisible by both.");
    break;
  case number % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case number % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For Loops

// Print numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Print all even numbers between 1 and 20
for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}

//  Calculate the sum of all numbers from 1 to 100 and print the result
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Print each element of the array numbers = [1, 2, 3, 4, 5]
const numbers1 = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

// Find and print the largest number in the array numbers = [3, 7, 2, 5, 10, 6]
const numbers2 = [3, 7, 2, 5, 10, 6];
var largest = numbers2[0];

for (var i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    largest = numbers2[i];
  }
}

console.log(largest);

// Exercise 4: While loops

// Print numbers from 1 to 10
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Print all even numbers between 1 and 20
var i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// Calculate the sum of all numbers from 1 to 100 and print the result
var sum = 0;
var i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

// Print all multiples of 5 less than 50
var i = 5;
while (i < 50) {
  console.log(i);
  i += 5;
}

// Exercise 5: Do While loops

// Print numbers from 1 to 10
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Calculate the sum of all numbers from 1 to 100 and print the result
var sum = 0;
var i = 1;
do {
  sum += i;
  i++;
} while (i <= 100);
console.log(sum);

// Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.
var number;
do {
  number = parseInt(prompt("Enter a number greater than 10: "), 10);
} while (isNaN(number) || number <= 10);
console.log("You entered: " + number);

//Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number
var correctNumber = Math.floor(Math.random() * 10) + 1;
var guess;
do {
  guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
  if (guess === correctNumber) {
    console.log(
      "Congratulations! You guessed the correct number: " + correctNumber
    );
  } else {
    console.log("Wrong guess. Try again!");
  }
} while (guess !== correctNumber);
