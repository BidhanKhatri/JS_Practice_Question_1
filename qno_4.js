//Write a function that tells if a give number is even or odd

function checkEvenOdd(num){

    if(num % 2 === 0){
        console.log(`${num} is even`)
    }else{
        console.log(`${num} is odd`);
    }

}

checkEvenOdd(10);