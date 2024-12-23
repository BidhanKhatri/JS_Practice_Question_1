//Write a function that calculates and returns the average of a set of numbers.

const nums = [1, 2, 3];
function calculateAverage(nums) {
  let averageNums = nums.length;
  let totalNums = 0;

  let answer;

  for (let i = 0; i < nums.length; i++) {
    totalNums += nums[i];
  }

  answer = totalNums / averageNums;

  return answer;
}

console.log("The average is", calculateAverage(nums));
