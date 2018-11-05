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
  if(num === 0) {
    return '';
  }

  let str = `${num} - Another sheep jumps over the fence \n`;
  console.log(str);
  return str + countingSheep(num - 1);

}

countingSheep(3);

