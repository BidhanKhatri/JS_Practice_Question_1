//Write a function that returns the result of raising a given number to specified power (logical one)

function raiseToPower(base,exponent){
   
    let result = 1;
    for(let i = 1; i <= exponent; i++){
        result *= base;
    }
    return result;

}

console.log(raiseToPower(2,3));