const apiKey = "e9be85180ad59947560c4bad5c364b71";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const text = document.querySelector('.search input');
const button = document.querySelector('.search button');


async function weatherDetails(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector('.temp').textContent = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').textContent = data.main.humidity + "%";
    document.querySelector('.wind').textContent = data.wind.speed + " km/h";

}

button.addEventListener('click', () => {
    weatherDetails(text.value);
})



