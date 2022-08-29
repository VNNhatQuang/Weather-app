var appId = '97234812a700ced559577a99acae33dc';
var search = document.querySelector('.search-icon');


function Weather() {
    var city = document.querySelector('input[type="text"]');
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${appId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var htmls = {
                city: `${data.name}`,
                country: `${data.sys.country}`,
                description: `${data.weather[0].description}`,
                icon: `${data.weather[0].icon}`,
                temp: `${(data.main.temp-273.15).toFixed()}`,
                tempMin: `${(data.main.temp_min-273.15).toFixed()}`,
                tempMax: `${(data.main.temp_max-273.15).toFixed()}`,
                windSpeed: `${data.wind.speed}`,
                humidity: `${data.main.humidity}`,
            };
            console.log(htmls);
            getIcon(htmls.icon);
            getTemp(htmls.temp);
            getWindSpeed(htmls.windSpeed);
            getHumidity(htmls.humidity);
            getCityCountry(htmls.city, htmls.country);
            getTempMinMax(htmls.tempMin, htmls.tempMax);
            getDescription(htmls.description);
        })
        .catch(err => alert("Wrong city name!"));
}


// HANDLE

var getIcon = icon => {
    var iconWeatherDisplay = document.querySelector('.icon-weather>img');
    iconWeatherDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
}

var getWindSpeed = windSpeed => {
    var windSpeedDisplay = document.querySelector('.wind-speed>span');
    windSpeedDisplay.innerHTML = `${windSpeed}km/h`;
}

var getHumidity = humidity => {
    var humidityDisplay = document.querySelector('.humidity>span');
    humidityDisplay.innerHTML = `${humidity}%`;
}

var getCityCountry = (city, country) => {
    var cityCountryDisplay = document.querySelector('.city-country>span');
    cityCountryDisplay.innerHTML = ` ${city}, ${country}`;
}

var getTemp = temp => {
    var tempDisplay = document.querySelector('.weather-detail>.temp');
    tempDisplay.innerHTML = `${temp}&deg;C`;
}

var getTempMinMax = (tempMin, tempMax) => {
    var tempMinDisplay = document.querySelector('.temp-min-max>.min');
    var tempMaxDisplay = document.querySelector('.temp-min-max>.max');
    tempMinDisplay.innerHTML = tempMin;
    tempMaxDisplay.innerHTML = tempMax;
}

var getDescription = description => {
    var descriptionDisplay = document.querySelector('h3.description');
    descriptionDisplay.innerHTML = `${description}`;
}



// GET LOCATION

function weatherLocation(lat, lon) {
    var city = document.querySelector('input[type="text"]');
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var htmls = {
                city: `${data.name}`,
                country: `${data.sys.country}`,
                description: `${data.weather[0].description}`,
                icon: `${data.weather[0].icon}`,
                temp: `${(data.main.temp-273.15).toFixed()}`,
                tempMin: `${(data.main.temp_min-273.15).toFixed()}`,
                tempMax: `${(data.main.temp_max-273.15).toFixed()}`,
                windSpeed: `${data.wind.speed}`,
                humidity: `${data.main.humidity}`,
            };
            console.log(htmls);
            getIcon(htmls.icon);
            getTemp(htmls.temp);
            getWindSpeed(htmls.windSpeed);
            getHumidity(htmls.humidity);
            getCityCountry(htmls.city, htmls.country);
            getTempMinMax(htmls.tempMin, htmls.tempMax);
            getDescription(htmls.description);
        })
        .catch(err => alert("Wrong city name!"));
}




export { Weather, getIcon, getWindSpeed, getHumidity, getCityCountry, getTemp, getTempMinMax, getDescription, weatherLocation };