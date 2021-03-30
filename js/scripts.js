// Business Logic

// function wordCounter(text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let wordCount = 0;
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) {
//     if (!Number(element)) { 
//       wordCount++;
//     }

//   });
//   return wordCount;
// }

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
  // word.toUppercase(function(elemnt))
    if (word.toUpperCase().includes(element.toUpperCase())) {
      wordCount++
    }
  });
  console.log(wordArray);
  console.log(wordCount);
  return wordCount;
}

numberOfOccurrencesInText("RED", "My fav color is red");