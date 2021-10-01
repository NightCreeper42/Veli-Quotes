getQuote();

function getQuote(){
    fetch('https://raw.githubusercontent.com/NightCreeper42/Veli-Quotes/main/quotes.txt')
    .then(response => response.text())
    .then(data => {
        data = data.toString();
        quotesArray = data.split('\n');

        quote = quotesArray[Math.floor(Math.random()*quotesArray.length)];
        document.getElementById("quoteBox").innerText = quote;
})}