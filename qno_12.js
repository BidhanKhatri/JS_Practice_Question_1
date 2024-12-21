//Write a function that prints the vowels and consonants of a given string.
function printVowelsAndConsonants(str) {
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelsCount++;
    } else {
      consonantsCount++;
    }
  }

  return vowelsCount + " " + consonantsCount;
}
console.log(printVowelsAndConsonants("bidhan"));
