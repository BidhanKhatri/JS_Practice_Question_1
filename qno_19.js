//WAP to swap the two numbers using third variable

let a = 10;
let b = 20;

console.log(`Before swapping a = ${a}, b=${b}`);

function swapNumbers(a, b) {
  let temp = b;
  b = a;
  a = temp;

  console.log(`After swapping a = ${a}, b=${b}`);
}

swapNumbers(a, b);

//WAP to swap the two numbers without using third variable
