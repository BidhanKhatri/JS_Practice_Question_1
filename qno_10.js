// Write a function that checks if a string is palindrome or not

let str = "lool"

function checkPalindrome(str){

    let reversedString = str.split("").reverse().join("")

    if(reversedString === str){
        console.log(str + " is a palindrome")
    }
    else{
        console.log(str + " is not a palindrome")
    }
}

checkPalindrome(str);


//alternative way

// function checkPalindrome(str){

//     let reversedString = "";

//     for(let i = str.length - 1; i >= 0; i--){
//         reversedString += str[i];
//     }

//     if(str === reversedString){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkPalindrome(str));