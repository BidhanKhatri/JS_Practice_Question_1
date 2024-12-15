//Write a dunction that tells if provided year is a leap year or not

function checkLeapYear(year){

if(year % 4 === 0){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is not a leap year`);
}
    

}

checkLeapYear(2024);