
//variable
import { lost } from './variable.js';
import { key } from './variable.js';
import { lang } from './variable.js';
import { units } from './variable.js';

//fetch for Compare City
export const compareCity = () => {
  let cityCompare1 = document.getElementById('nameCompareCity1').value;
  let cityCompare2 = document.getElementById('nameCompareCity2').value;
  let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityCompare1}&cnt=40&units=${units}&APPID=${key}&lang=${lang}`;
  let url2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityCompare2}&cnt=40&units=${units}&APPID=${key}&lang=${lang}`;
  Promise.all([
    fetch(url1),
    fetch(url2)
  ])
    .then(responses => {
      return Promise.all(responses.map(response => {
        return response.json();
      }));
    })
    .then(data => {
      console.log(data);
      console.log(`get weather data by comparator city 1: ${cityCompare1} & city 2: ${cityCompare2}`);
      /* console.log(`url1: ${url1}`);
       console.log(`url2: ${url2}`);*/
      showCompareCity(data);
    })
    .catch(error => {
      console.log('Noob !', error);
      alert(lost);
    });
  /*if (page.style.backgroundImage != urlLandscape) {
    bgLandscape()
  };*/
};

//City Comparator
const showCompareCity = (compareCity => {
    /*let rowWeather = document.getElementById('weatherApp');
    rowWeather.innerHTML = "";
    let row = document.querySelector('.cardFlip__section');
    row.innerHTML = "";*/
    let city = compareCity;
    if (window.myChart instanceof Chart) {
      window.myChart.destroy();
      console.log("destroy chart");
    }
    const ctx = document.getElementById('myChart').getContext('2d');
    window.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [city[0].name, city[1].name],
        datasets: [
          {
            label: '',
            data: [compareCity[0].main.temp, compareCity[1].main.temp],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
  
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
  
            ],
            borderWidth: 1,
            fill: false
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    console.log("create chart");
  });