// Write a function that calculates and prints the area of a rectangle given its length and witdth;
function calculateAreaOfRectangle(length,width){
    

    if (length  <= 0 ){
       throw new RangeError (`length  cannot be negative`)
    }
    if (width <= 0){
        throw new RangeError(`width cannot be negative`)
    }

    const area = length * width;
    console.log(`Area of reactangle is ${area}`);

}

calculateAreaOfRectangle(10,20)