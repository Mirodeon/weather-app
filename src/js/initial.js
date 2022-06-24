
//backgroundImage
import { bgLandscape } from './backgroundImage.js'

//fetchSingle
import { getLatLon } from './fetchSingle.js';
import { getLocation } from './fetchSingle.js';
import { getName } from './fetchSingle.js';

//comparator
import { compareCity } from './comparator.js';

// set Input
const inputBtn = () => {
    document.getElementById('btnGet').addEventListener('click', getLatLon);
    document.getElementById('btnCurrent').addEventListener('click', getLocation);
    document.getElementById('btnCityName').addEventListener('click', getName);
    document.getElementById('btnCityCompareName').addEventListener('click', compareCity);
    console.log('add eventlistener input button');
}

const inputKey = () => {
    document.getElementById('nameCity').addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            document.getElementById("btnCityName").click();
        };
    });
    let idLatLon = document.querySelectorAll('#latitude, #longitude');
    for (let i = 0; i < idLatLon.length; i++) {
        idLatLon[i].addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                document.getElementById("btnGet").click();
            };
        });
    };
    let idCityCompare = document.querySelectorAll('#nameCompareCity1, #nameCompareCity2');
    for (let i = 0; i < idCityCompare.length; i++) {
        idCityCompare[i].addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                document.getElementById("btnCityCompareName").click();
            };
        });
    };
    console.log('add eventlistener key enter');
};

//App Init
export const appInit = () => {
    inputBtn();
    inputKey();
    bgLandscape();
    console.log("bonjour!");
};