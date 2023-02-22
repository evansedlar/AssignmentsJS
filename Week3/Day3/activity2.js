const symbolTextBox = document.getElementById('symbolTextBox')
const searchButton = document.getElementById('searchButton')
const quoteNameHeading = document.getElementById('quoteNameHeading')
const quotePriceHeading = document.getElementById('quotePriceHeading')
let intervalID = 0

// searchButton.addEventListener('click', getStockQuote)

searchButton.addEventListener('click', () => {

    window.clearInterval(intervalID)

    const symbol = symbolTextBox.value

    intervalID = window.setInterval(function () {
        const quote = getStockQuote(symbol)

        quoteNameHeading.innerHTML = quote.name
        quotePriceHeading.innerHTML = `$${quote.price}`
    }, 2000)


})