import { Weather, getIcon, getWindSpeed, getHumidity, getCityCountry, getTemp, getTempMinMax, getDescription, weatherLocation } from './modules/handle.js';


var appId = '97234812a700ced559577a99acae33dc';
var search = document.querySelector('.search-icon');
var areaSearch = document.querySelector('html');
var lat;
var lon;


// GET LOCATION
var getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

var showPosition = position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude
    console.log(lat);
    console.log(lon);
    weatherLocation(lat, lon);
}

getLocation();
// showPosition();
// console.log(lat);
// console.log(lon);
// weatherLocation(lat, lon)




// SEARCH LOCATION
search.onclick = function() {
    Weather();
}

areaSearch.onkeyup = function(e) {
    if (e.which == 13) {
        Weather();
    }
}