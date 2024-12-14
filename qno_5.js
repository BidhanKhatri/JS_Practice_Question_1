//Write a function that finds and prints the smallest number among three given numbers.

function findSmallestNumber(num1,num2,num3){

    let smallest = num1;


    if(num2 < smallest){
        smallest = num2;
    }

    if(num3 < smallest){
        smallest = num3;
    }

    console.log(`smallest number among ${num1}, ${num2}, ${num3} is ${smallest}`);

}

findSmallestNumber(40,20,30);
