//Create the array of quote objects.

var quotes = [
  {
      quote: "Don't cry because it's over, smile because it happened.", 
      source: "Dr. Seuss",
      citation: 'Book',
      year: 1952,
  },
  {
      quote: "Be yourself; everyone else is already taken.",  
      source: "Oscar Wilde",
  },
  {
      quote: "Be the change that you wish to see in the world.",
      source: "Mahatma Gandhi",
      citation: 'Magazine',
      year: 1945,
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


/*** Create the getRandomQuote function which will hold a variable to get a random number. 
 Create a variable to generate a random number.
 Make sure the limit is set to how many quotes there are. 
 Then, return a random quote from the quotes array.***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/*** Create a printQuote function which will hold a variable that will call the getRandomQuote function. 
  Create a HTML string and set it equal to an empty string.
  Add to the HTML string. 
  Add the code provided in the instructions. 
  Add the variable set for calling the getRandomQuote function. Add the property (quote, source, etc.) and add the closing p tag.
  Repeat the last step for source but DO NOT add the closing p tag. 
  ***/

function printQuote() {
  var storeRandomQuote = getRandomQuote();
  var htmlString = "";
  htmlString += "<p class='quote'>" + storeRandomQuote.quote + "</p>";
  htmlString += "<p class='source'>" + storeRandomQuote.source;

  /***Create a conditional statement that adds the HTML string and the code provided in the instructions for citation.
          Then add the variable set for calling the getRandomQuote function. Add the property (quote, source, etc.) and add the closing span tag.

   Create a conditional statement that adds the HTML string and the code provided in the instructions for year.
             Then add the variable set for calling the getRandomQuote function. Add the property (quote, source, etc.) and add the closing span tag.

  ***/
  if (storeRandomQuote.citation) {
    htmlString += "<span class='citation'>" + storeRandomQuote.citation + "</span>";
  }

  
  if (storeRandomQuote.year) {
    htmlString += "<span class='year'>" + storeRandomQuote.year + "</span>"
  }

  //add the closing p tag to the HTML string.

    htmlString += "</p>";

    /*** Find the div tag for id quote-box in the index file. 
     Set the property to innerHTML. And equal it to your HTML string.
     See on console if it works. 
     Use the load quote code provided in the instructions. 
     ***/
    document.getElementById('quote-box').innerHTML = htmlString;
  }

console.log(printQuote());

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


