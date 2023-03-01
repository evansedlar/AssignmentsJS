// const productsList = document.getElementById('productsList')

// const result = fetch('https://api.escuelajs.co/api/v1/products')
// .then(response => response.json())
// .then(result => {

//     const productItems = result.map(product => {
//         return `<li>
//         ${product.title},
//         ${product.description}
//         </li>`
//     })
//     productsList.innerHTML = productItems.join('')
// })

const inputEmail = document.getElementById("inputEmail")
const inputType = document.getElementById("inputType")
const inputSize = document.getElementById("inputSize")
const inputPrice = document.getElementById("inputPrice")
const coffeeOrders = document.getElementById('coffeeOrders')
const submitButton = document.getElementById("submitButton")


const result = fetch('https://troubled-peaceful-hell.glitch.me/orders')
    .then(response => response.json())
    .then(result => {
        const coffeeItems = result.map(coffee => {
            return `<li>
        ${coffee.email},
        ${coffee.type},
        ${coffee.size},
        ${coffee.price}
        </li>`
        })
        coffeeOrders.innerHTML = coffeeItems.join("")
    })


submitButton.addEventListener('click', () => {

    const body = {
        email: inputEmail.value,
        type: inputType.value,
        size: inputSize.value,
        price: inputPrice.value,
    }

    fetch('https://troubled-peaceful-hell.glitch.me/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
   


})



