
//variable
import { keyUnsplash } from './variable.js';
import { page } from './variable.js';
import { urlLandscape } from './variable.js';

//background unsplash landscape random
export const bgLandscape = () => {
    page.style.backgroundImage = urlLandscape;
    console.log(`backgroundImage change by ${urlLandscape}`);
};

//Unsplash call
export const unsplashCall = () => {
    let city = document.getElementById('nameCity').value;
    let urlUnsplash = `https://api.unsplash.com/search/photos/?client_id=${keyUnsplash}&query=${city}`;

    fetch(urlUnsplash)
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then((dataUnsplash) => {
            console.log(dataUnsplash);
            console.log(`get unsplash image by city name: ${city}`);
            backgroundCity(dataUnsplash);
        })
        .catch(error => {
            console.log('Noob !', error);
            if (page.style.backgroundImage != urlLandscape) {
                bgLandscape()
            }
            alert(`Background image for the city ${city} was not found :c`);
        });
};

//Unsplash background city
export const backgroundCity = (data) => {
    let randomIdx = Math.floor(Math.random() * data.results.length);
    let randomPhoto = data.results[randomIdx];
    console.log(`result ${randomIdx} selected`);
    let urlPhoto = randomPhoto.urls.regular;
    page.style.backgroundImage = `url(${urlPhoto})`;
    console.log(`backgroundImage change by result ${randomIdx}: ${urlPhoto}`);
};