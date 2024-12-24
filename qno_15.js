//Write a program to calculate simple interest

function calculateSimpleInterest(principal, rate, time) {
  if (principal < 0 || rate < 0 || time < 0) {
    throw new Error("Input cannot be a negative number");
  }

  let result = (principal * time * rate) / 100;

  return result;
}

console.log("The simple interest is ", calculateSimpleInterest(1000, 10, 2));
