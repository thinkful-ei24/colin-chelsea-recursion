'use strict';
//What is the input to the program
//
//What is the output of the program
//
//What is the input to each recursive calls
//
//What is the output of each recursive calls

//Counting Sheep
//
//the input is going to be a number
//
//the output is going to be an array "number - Another sheep jump over the fence" counting all the way down to one
//
//input of each recursive call is the current number - 1
//
//output of each recursive call is the string "number - another sheep jump over the fence"

function countingSheep(num) {
  if (num === 0) {
    return '';
  }

  let str = `${num} - Another sheep jumps over the fence \n`;
  return str + countingSheep(num - 1);
}

console.log(countingSheep(3));

//Array Double

//input is an array of numbers
//output is original array of numbers values doubled
// input to each recursive call will be one value from the array
// output to each recursive call will be the double of that value and array minus value you just doubled

function arrayDouble(arr) {
  if (!arr.length) {
    return [];
  }

  let doubledNum = arr[0] * 2;
  return [doubledNum, ...arrayDouble(arr.slice(1))];
}

console.log(arrayDouble([1, 2, 3]));

//input will be a string
//output will be a string but backwards
//recursive input will be a character
//recursive output will be an array

function reverseStr(str) {
  if (!str.length) {
    return '';
  }

  return reverseStr(str.slice(1)) + str[0];
}

let string = 'colin AND chelsea';
console.log(string);
console.log(reverseStr(string));

//nth Triangular Number
// input will be a position number
// output will be a triangular number
// recursive input will be a value of the current position - 1
// recursive output will be a the value

// lastValue + currentPositionNum

function triangularNum(currentPositionNum) {
  if (currentPositionNum === 0) {
    return 0;
  }
  return triangularNum(currentPositionNum - 1) + currentPositionNum;
}

console.log(triangularNum(6));
//input 4
// output 10
