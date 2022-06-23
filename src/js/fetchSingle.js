
//variable
import { lost } from './variable.js';
import { key } from './variable.js';
import { lang } from './variable.js';
import { units } from './variable.js';
import { page } from './variable.js';
import { urlLandscape } from './variable.js';

//addCards
import { showWeatherLonLat } from './addCards.js';
import { showWeather } from './addCards.js';
import { showNextWeather } from './addCards.js';

//backgroundImage
import { bgLandscape } from './backgroundImage.js';
import { unsplashCall } from './backgroundImage.js';

// fetch by Lat & Lon
export const getLatLon = () => {
    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longitude').value;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(`get weather data by lat ${lat} & lon ${lon}`);
            /*console.log(`url: ${url}`);*/
            showWeatherLonLat(data);
            showNextWeather(data);
        })
        .catch(error => {
            console.log('Noob !', error);
            alert(lost);
        });
    if (page.style.backgroundImage != urlLandscape) {
        bgLandscape();
    };
};

//fetch by Current Location
export const getLocation = () => {
    let options = {
        enableHighAccuracy: true,
        timeout: 1000 * 10,
        maximumAge: 1000 * 60 * 5,
    };
    navigator.geolocation.getCurrentPosition(enablePosition, disablePosition, options);
};

const enablePosition = (position) => {
    document.getElementById('latitude').value =
        position.coords.latitude.toFixed(2);
    document.getElementById('longitude').value =
        position.coords.longitude.toFixed(2);
    console.log(`get geolocation`);
    console.log(`lat: ${document.getElementById('latitude').value} lon: ${document.getElementById('longitude').value}`);
    getLatLon();
};

const disablePosition = () => {
    console.log('Noob !');
    alert(lost);
};

//fetch by Name
export const getName = () => {
    let city = document.getElementById('nameCity').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=40&units=${units}&APPID=${key}&lang=${lang}`;
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log(`get weather data by city name: ${city}`);
            /*console.log(`url: ${url}`);*/
            showWeather(data);
            unsplashCall();
        })
        .catch(error => {
            console.log('Noob !', error);
            alert(lost);
        });
};