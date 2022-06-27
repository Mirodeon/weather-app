
//variable
import { lost } from './variable.js';
import { key } from './variable.js';
import { lang } from './variable.js';
import { units } from './variable.js';

//flipCard
import { flipMainCard } from './flipCard.js';
import { flipCard } from './flipCard.js';

//dynamicImgUrl
import { getImageUrl } from './dynamicImgUrl.js';

//weather via Lon & Lat
export const showWeatherLonLat = (response) => {
    /*if (window.myChart instanceof Chart) {
      window.myChart.destroy();
      console.log("destroy chart");
    }*/
    let rowWeather = document.getElementById('weatherApp');
    rowWeather.innerHTML = "";
    let day = response.daily[0]
    let dt = new Date(day.dt * 1000);
    let sr = new Date(day.sunrise * 1000).toTimeString();
    let ss = new Date(day.sunset * 1000).toTimeString();
    console.log("add main card");
    rowWeather.insertAdjacentHTML('afterbegin',
        `<article class="mainCard">
        <div class="date__mainCard">${dt.toDateString()}</div>
        <div class="front__mainCard">
            <div class="container-txt__mainCard">
                <p class="location__mainCard">${response.timezone}</p>
                <p class="meteo__mainCard">${day.weather[0].description}</p>
                <p class="temp__mainCard"><b>High:</b> ${day.temp.max}&deg;C</p>
                <p class="temp__mainCard"><b>Low:</b> ${day.temp.min}&deg;C</p>
            </div>
            <div class="container-img__mainCard">
                <img src="${getImageUrl(day.weather[0].icon)}" class="imgMeteo__MainCard"
                    alt="${day.weather[0].description}" />
            </div>
        </div>
        <div class="back__mainCard">
            <p class="card-text"><b>High Feels like:</b> ${day.feels_like.day}&deg;C</p>
            <p class="card-text"><b>Pressure:</b> ${day.pressure}mb</p>
            <p class="card-text"><b>Humidity:</b> ${day.humidity}%</p>
            <p class="card-text"><b>Wind:</b> ${day.wind_speed}m/s, ${day.wind_deg}&deg;</p>
            <p class="card-text"><b>Sunrise:</b> <i>${sr}</i></p>
            <p class="card-text"><b>Sunset:</b> <i>${ss}</i></p>
        </div>
       </article>`
    );
    flipMainCard();
};

// Weather initial via Name City
export const showWeather = (response) => {
    /*if (window.myChart instanceof Chart) {
      window.myChart.destroy();
      console.log("destroy chart");
    }*/
    let latitude = response.coord.lat;
    let longitude = response.coord.lon;
    let fetchWeatherApp = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}&lang=${lang}`;
    fetch(fetchWeatherApp)
        .then((respWeather) => {
            if (!respWeather.ok) throw new Error(respWeather.statusText);
            return respWeather.json();
        })
        .then((dataWeather) => {
            console.log(dataWeather);
            console.log(`get weather data by second call lat: ${latitude} & lon: ${longitude}`);
            /*console.log(`url: ${fetchWeatherApp}`);*/
            showNextWeather(dataWeather);
        })
        .catch(error => {
            console.log('Noob !', error);
            alert(lost);
        });
    let rowWeather = document.getElementById('weatherApp');
    rowWeather.innerHTML = "";
    let dt = new Date(response.dt * 1000);
    let sr = new Date(response.sys.sunrise * 1000).toTimeString();
    let ss = new Date(response.sys.sunset * 1000).toTimeString();
    console.log("add main card");
    rowWeather.insertAdjacentHTML('afterbegin',
        `<article class="mainCard">
        <div class="date__mainCard">${dt.toDateString()}</div>
        <div class="front__mainCard">
            <div class="container-txt__mainCard">
                <p class="location__mainCard">${response.name} - ${response.sys.country}</p>
                <p class="meteo__mainCard">${response.weather[0].description}</p>
                <p class="temp__mainCard"><b>High:</b> ${response.main.temp_max}&deg;C</p>
                <p class="temp__mainCard"><b>Low:</b> ${response.main.temp_min}&deg;C</p>
            </div>
            <div class="container-img__mainCard">
                <img src="${getImageUrl(response.weather[0].icon)}" class="imgMeteo__MainCard"
                    alt="${response.weather[0].description}" />
            </div>
        </div>
        <div class="back__mainCard">
            <p class="card-text"><b>High Feels like:</b> ${response.main.feels_like}&deg;C</p>
            <p class="card-text"><b>Pressure:</b> ${response.main.pressure}mb</p>
            <p class="card-text"><b>Humidity:</b> ${response.main.humidity}%</p>
            <p class="card-text"><b>Wind:</b> ${response.wind.speed}m/s, ${response.wind.deg}&deg;</p>
            <p class="card-text"><b>Sunrise:</b> <i>${sr}</i></p>
            <p class="card-text"><b>Sunset:</b> <i>${ss}</i></p>
        </div>
       </article>`
    );
    flipMainCard();
};

//Next Five days Weather
export const showNextWeather = (respWeather) => {
    let row = document.querySelector('.cardFlip__section');
    row.innerHTML = respWeather.daily
        .map((day, idx) => {
            if (idx < 6 && idx != 0) {
                let dt = new Date(day.dt * 1000);
                console.log(`add card ${idx}`);
                return `<article class="cardFlip">
          <div class="date__cardFlip">${dt.toDateString()}</div>
          <div class="front">
              <div class="container-img__cardFlip">
                  <img src="${getImageUrl(day.weather[0].icon)}" class="imgMeteo__cardFlip"
                      alt="${day.weather[0].description}" />
              </div>
              <div class="container-txt__cardFlip">
                  <p class="meteo__cardFlip">${day.weather[0].description}</p>
                  <p class="location__cardFlip"><b>Timezone:</b> ${respWeather.timezone}</p>
                  <p class="temp__cardFlip"><b>High:</b> ${day.temp.max}&deg;C</p>
                  <p class="temp__cardFlip"><b>Low:</b> ${day.temp.min}&deg;C</p>
              </div>
          </div>
          <div class="back">
              <p class="card-text"><b>High Feels like:</b> ${day.feels_like.day}&deg;C</p>
              <p class="card-text"><b>Pressure:</b> ${day.pressure}mb</p>
              <p class="card-text"><b>Humidity:</b> ${day.humidity}%</p>
              <p class="card-text"><b>Wind:</b> ${day.wind_speed}m/s, ${day.wind_deg}&deg;</p>
              <p class="card-text"><b>UV Index:</b> ${day.uvi}</p>
              <p class="card-text"><b>Precipitation:</b> ${day.pop * 100}%</p>
          </div>
          </article>`;
            }
        })
        .join(' ');
    console.log("join cards");
    flipCard();
};