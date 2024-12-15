//Write a function that calculate factorial of a given number

function calulateFactorial(num){

    if(num <= 0){
    throw new Error("Number cannot be zero or negative");
    }

    let result = 1;

    for(let i = num; i >=1; i--){

        result *= i;
    }
    return result;
}

console.log(calulateFactorial(5));


