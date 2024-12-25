//WAP to print if the given number is a prime number or not
//ans --> A prime number is a number that is only divisible by 1 and itself

function findPrimeNumber(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    console.log(num + " is a prime number");
  } else {
    console.log(num + " is not a prime number");
  }
}

findPrimeNumber(7);
findPrimeNumber(8);
