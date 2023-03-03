const stocksList = document.getElementById('stocksList')

function getStocks() {
    let request = new XMLHttpRequest()

    request.addEventListener('load', function () {
        let result = JSON.parse(this.responseText)
        const showStocks = `
            <li>${result.symbol}<li>
            <li>${result.title}<li>
            <li>${result.price}<li>
            <li>${result.quantitiy}<li>
        `
        stocksList.innerHTML = showStocks
    })
    

    request.open("GET", 'https://endurable-bead-polo.glitch.me/stocks')
    request.send()

}

getStocks()