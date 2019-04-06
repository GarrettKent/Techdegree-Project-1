/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/***
Here I created five quote objects in an array. Each object consists of
a 'quote' and a 'source' property, while one object contains a 'year' property.
***/
let quotes = [
  {
    quote:'We have to do the best we are capable of. This is our sacred human responsibility.',
    source:'Albert Einstein'
},
{
    quote:'From error to error one discovers the entire truth.',
    source:'Sigmund Freud'
},
{
    quote:'Before software can be reusable it first has to be usable.',
    source:'Ralph Johnson'
},
{
    quote:'The only way to do great work is to love what you do.',
    source:'Steve Jobs',
    year: 2005
},
{
    quote:'One finds limits by pushing them.',
    source:'Herbert Simon'
}
];



/***
I created the 'getRandomQuote' function. Next, I assigned randomNumber
to a variable and made it equal to a random object from my array of quotes. Lastly,
I made another variable which accepts the random number quote to be pulled, then I returned that.
***/
function getRandomQuote() {
  let randomNumber = Math.floor((Math.random() * quotes.length));
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};


/***
   First, I made the 'printQuote' function and called my 'getRandomQuote' function.
   Next, I assigned a variable named 'message' in order to store my object properties
   in a HTML string. I repeated the process of creating an HTML string with a
  conditional statement for my 'year' property. Lastly, I used 'document.getElementById'
   to set the 'innerHTML' of my 'quote-box' equal to my 'message', making it a part of my HTML string.
***/
function printQuote() {
  var random = getRandomQuote(quotes);
  var message = "";
  message += '<p class="quote">' + random.quote + '</p>';
  message += '<p class="source">' + random.source + '</p>';
    
    document.getElementById("quote-box").innerHTML= message;
};
printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
