//Write a function that returns the reverse of a string

const str = "bidhan";
function reverseString(str){

    if(typeof str !== 'string'){
        throw new Error('Input must be a string')
        }

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
