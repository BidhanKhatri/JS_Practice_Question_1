//Write a function that returns the reverse of a string

const str = "bidhan";
function reverseString(str){

const result =  str.split('').reverse().join('');
return result;    

}

console.log(reverseString(str));


//Alternative way

// function reverseString(str){

//     let reversedStr = '';

//     for(let i = str.length - 1; i >= 0; i--){
        
//         reversedStr += str[i];
//     }
//     return reversedStr;

// }
// console.log(reverseString(str));
