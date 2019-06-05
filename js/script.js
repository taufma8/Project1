/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
      quote: "Don't cry because it's over, smile because it happened.", 
      source: "Dr. Seuss",
      citation: 'book',
      year: 1952,
  },
  {
      quote: "Be yourself; everyone else is already taken.",  
      source: "Oscar Wilde",
  },
  {
      quote: "Be the change that you wish to see in the world.",
      source: "Mahatma Gandhi",
  },
  {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      source: "Robert Frost",
  },
     {
      quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.", 
      source: "Marilyn Monroe",
  },
];

console.log(quotes);


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var storeRandomQuote = getRandomQuote();
  var message = "";
  message += "<p class='quote'>" + storeRandomQuote.quote + "</p>";
  message += "<p class='source'>" + storeRandomQuote.source;

  if (storeRandomQuote.citation) {
    message += "<span class='citation'>" + storeRandomQuote.citation + "</span>";
  }
  if (storeRandomQuote.year) {
    message += "<span class='year'>" + storeRandomQuote.year + "</span>"
  }
    message += "</p>";

  }

console.log(printQuote);



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


