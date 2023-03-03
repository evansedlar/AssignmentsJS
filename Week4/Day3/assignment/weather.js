
const inputCity = document.getElementById("inputCity")
const searchButton = document.getElementById("searchButton")
const weatherUL = document.getElementById("weatherUL")
const currentWeatherUL = document.getElementById("currentWeatherUL")

//Display weather 
function showWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=houston&appid=feeb1e15933c3850daf212f6801a413c&units=imperial')
    .then(response => response.json())
    .then(result => {
        weatherDesc =
            `<h1>${result.name}</h1>
            <li>Current Temp: ${result.main.temp}F</li>
            <li>Min Temp: ${result.main.temp_min}F</li>
            <li>Max Temp: ${result.main.temp_max}F</li>
            <li>Pressure: ${result.main.pressure}</li>
            `
            weatherUL.innerHTML = weatherDesc
        })

}

//display the weather by search
function cityWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`)
    .then(response => response.json())
    .then(result => {
        weatherDesc =
            `<h1>${result.name}</h1>
            <li>Current Temp: ${result.main.temp}F</li>
            <li>Min Temp: ${result.main.temp_min}F</li>
            <li>Max Temp: ${result.main.temp_max}F</li>
            <li>Pressure: ${result.main.pressure}</li>
            `
            weatherUL.innerHTML = weatherDesc
        })
}

function failure() {
    window.alert("Could not retrieve location")
}

function success(position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`)
    .then(response => response.json())
    .then(result => {
        currWeather =
            `<h1>${result.name}</h1>
            <li>Current Temp: ${result.main.temp}F</li>
            <li>Min Temp: ${result.main.temp_min}F</li>
            <li>Max Temp: ${result.main.temp_max}F</li>
            <li>Pressure: ${result.main.pressure}</li>
            `
            currentWeatherUL.innerHTML = currWeather
        })
}



navigator.geolocation.getCurrentPosition(success, failure)


searchButton.addEventListener('click', cityWeather)

showWeather()