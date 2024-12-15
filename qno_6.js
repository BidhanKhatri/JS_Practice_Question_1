//Write a function that returns the reverse of a string

const str = "bidhan";
function reverseString(str){

const result =  str.split('').reverse().join('');
return result;    

}

console.log(reverseString(str));
