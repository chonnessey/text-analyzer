// Business Logic

function wordCounter(text) {
  if (noInputtedword(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) { 
      wordCount++;
    }

  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toUpperCase().includes(word.toUpperCase())) {
      wordCount++
    }
  });

  return wordCount;
}

function boldPassage(word, text) {
  let htmlString = "<p>"
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    htmlString = htmlString.concat(" ");
  });
  return htmlString + "</p>";
}

//UI Logic //s
$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
  });

  function noInputtedWord() {
    for (let i=0; i < arguments.length; i++) {
      console.log(arguments[i]);
      if (arguments[i].trim().length === 0) {
        return true;
      }
    }
    return false;
  }
});