"use strict";

// 1

const book = {};
// an apple costs 67 cents
book["apple"] = 0.67;
// milk costs $1.49
book["milk"] = 1.49;
book["avocado"] = 1.49;

console.log(book); // {apple: 0.67, milk: 1.49, avocado: 1.49}

// 2

const voted = {};

/**
 * Vote check
 * @param {string} name Voter name
 */
function check_voter(name) {
  if (voted[name]) {
    console.log("kick them out!");
  } else {
    voted[name] = true;
    console.log("let them vote!");
  }
}

check_voter("tom"); // let them vote!
check_voter("mike"); // let them vote!
check_voter("mike"); // kick them out!


// 3
