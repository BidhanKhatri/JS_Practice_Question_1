//Write a function that finds all the factors of a given number
//--> Factor is a number that divides the given number evenly or exactly, leaving no remainder.

function findAllFactors(nums) {
  let factors = [];

  for (let i = 1; i <= nums; i++) {
    if (nums % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

console.log("Factors are ", findAllFactors(4));
