import { Weather, getIcon, getWindSpeed, getHumidity, getCountry, getTemp, getTempMinMax, getDescription } from './modules/handle.js';

var appId = '97234812a700ced559577a99acae33dc';
var search = document.querySelector('.search-icon');
var areaSearch = document.querySelector('html');


search.onclick = function() {
    Weather();
}

areaSearch.onkeyup = function(e) {
    if (e.which == 13) {
        Weather();
    }
}