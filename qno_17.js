//WAP to count words in a sentence

function countWordsInSentence(sentence) {
  let count = 0;
  if (typeof sentence !== "string") {
    throw new Error("Input must be a string");
  }

  let splittedSentence = sentence.trim().split(" ");
  let nonEmptySplittedSentence = splittedSentence.filter((elem) => elem != "");
  count = nonEmptySplittedSentence.length;

  return count;
}

console.log(
  "length of sentence is",
  countWordsInSentence("   Hello This is Bidhan       How are you   ")
);
