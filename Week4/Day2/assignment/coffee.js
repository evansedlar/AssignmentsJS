
const emailTextBox = document.getElementById("emailTextBox")
const typeTextBox = document.getElementById("typeTextBox")
const sizeTextBox = document.getElementById("sizeTextBox")
const priceTextBox = document.getElementById("priceTextBox")
const orderButton = document.getElementById("orderButton")
const allOrders = document.getElementById('allOrders')
const selectedEmail = document.getElementById('selectedEmail')
const searchTextBox = document.getElementById('searchTextBox')
const searchButton = document.getElementById('searchButton')
const deleteTextBox = document.getElementById('deleteTextBox')
const deleteButton = document.getElementById('deleteButton')

// show the coffee orders that have been made

function showOrders() {
    let request = new XMLHttpRequest()

    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)
        const orders = parsed.map(function(order) {
            return `<li>${order.email}
            ${order.type}
            ${order.size}
            ${order.price}
            </li>`
        })
        allOrders.innerHTML = orders
    })
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.send()
}


// Add a new coffee order to the list

function createOrder() {
    const request = new XMLHttpRequest()

    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')

    const body = {
        email: emailTextBox.value,
        type: typeTextBox.value,
        size: sizeTextBox.value,
        price: priceTextBox.value
    }

    request.setRequestHeader('Content-type', 'application/json')

    request.send(JSON.stringify(body))
    showOrders()
}


// get the order by email
  
function getByEmail() {
    const request = new XMLHttpRequest()
    request.addEventListener('load', function () {
        const parsed = JSON.parse(this.response)
        console.log(parsed)
        const selectedOrder = `
                <h1>${parsed.email}</h1>
                <li>${parsed.type}</li>
                <li>${parsed.size}</li>
                <li>${parsed.price}</li>
            `
        selectedEmail.innerHTML = selectedOrder
    })
    

    const userEmail = searchTextBox.value

    request.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${userEmail}`)
    request.send()
}

// delete the order by email

function deleteOrder() {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function(){

    })

    const userEmail = deleteTextBox.value

    request.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${userEmail}`)
    request.send()
}

showOrders()
searchButton.addEventListener('click', getByEmail)
orderButton.addEventListener('click', createOrder)
deleteButton.addEventListener('click', deleteOrder)
