//Write a function to add the numbers

function addNum(num){
    let sum = 0;
    let splittedNums = num.toString().split('');

    splittedNums.forEach(nums=> {
        sum += parseInt(nums);
    })
    return sum;
}

console.log(addNum(12))

