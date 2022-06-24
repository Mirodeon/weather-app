const h=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};h();let p=`Perceval: 
C'est un coup \xE0 se planter \xE7a ! De toutes fa\xE7ons, on dit le Nord ! Selon comme on est tourn\xE9 \xE7a change tout !`,c="bf810c5f76b2c2062b7f341ddeffdb37",s="en",l="metric",y="AmgElZrQY_Xo6lKtytnTGHpRnQNZDg2JJzrr2jxRiCI",_=document.body,m='url("https://source.unsplash.com/1600x900/?landscape")';const g=()=>{_.style.backgroundImage=m,console.log(`backgroundImage change by ${m}`)},C=()=>{let e=document.getElementById("nameCity").value,a=`https://api.unsplash.com/search/photos/?client_id=${y}&query=${e}`;fetch(a).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{console.log(t),console.log(`get unsplash image by city name: ${e}`),w(t)}).catch(t=>{console.log("Noob !",t),_.style.backgroundImage!=m&&g(),alert(`Background image for the city ${e} was not found :c`)})},w=e=>{let a=Math.floor(Math.random()*e.results.length),t=e.results[a];console.log(`result ${a} selected`);let n=t.urls.regular;_.style.backgroundImage=`url(${n})`,console.log(`backgroundImage change by result ${a}: ${n}`)},v=()=>{let e=[...document.querySelectorAll(".cardFlip")];e.forEach((a,t)=>{a.addEventListener("click",()=>{a.classList.contains("active")?(a.classList.remove("active"),console.log(`show front card ${t+1}`)):(e[t].classList.add("active"),console.log(`show back card ${t+1}`))}),console.log(`add eventlistener flip on card ${t+1}`)})},b=()=>{let e=document.querySelector(".mainCard");e.addEventListener("click",()=>{e.classList.contains("active")?(e.classList.remove("active"),console.log("show front main card")):(e.classList.add("active"),console.log("show back main card"))}),console.log("add eventlistener flip on main card")},$=e=>{let a=document.getElementById("weatherApp");a.innerHTML="";let t=e.daily[0],n=new Date(t.dt*1e3),i=new Date(t.sunrise*1e3).toTimeString(),o=new Date(t.sunset*1e3).toTimeString();console.log("add main card"),a.insertAdjacentHTML("afterbegin",`<article class="mainCard">
        <div class="date__mainCard">${n.toDateString()}</div>
        <div class="front__mainCard">
            <div class="container-txt__mainCard">
                <p class="location__mainCard">${e.timezone}</p>
                <p class="meteo__mainCard">${t.weather[0].description}</p>
                <p class="temp__mainCard"><b>High:</b> ${t.temp.max}&deg;C</p>
                <p class="temp__mainCard"><b>Low:</b> ${t.temp.min}&deg;C</p>
            </div>
            <div class="container-img__mainCard">
                <img src="./src/img/${t.weather[0].icon}.png" class="imgMeteo__MainCard"
                    alt="${t.weather[0].description}" />
            </div>
        </div>
        <div class="back__mainCard">
            <p class="card-text"><b>High Feels like:</b> ${t.feels_like.day}&deg;C</p>
            <p class="card-text"><b>Pressure:</b> ${t.pressure}mb</p>
            <p class="card-text"><b>Humidity:</b> ${t.humidity}%</p>
            <p class="card-text"><b>Wind:</b> ${t.wind_speed}m/s, ${t.wind_deg}&deg;</p>
            <p class="card-text"><b>Sunrise:</b> <i>${i}</i></p>
            <p class="card-text"><b>Sunset:</b> <i>${o}</i></p>
        </div>
       </article>`),b()},k=e=>{let a=e.coord.lat,t=e.coord.lon,n=`https://api.openweathermap.org/data/2.5/onecall?lat=${a}&lon=${t}&appid=${c}&units=${l}&lang=${s}`;fetch(n).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>{console.log(r),console.log(`get weather data by second call lat: ${a} & lon: ${t}`),u(r)}).catch(r=>{console.log("Noob !",r),alert(p)});let i=document.getElementById("weatherApp");i.innerHTML="";let o=new Date(e.dt*1e3),d=new Date(e.sys.sunrise*1e3).toTimeString(),x=new Date(e.sys.sunset*1e3).toTimeString();console.log("add main card"),i.insertAdjacentHTML("afterbegin",`<article class="mainCard">
        <div class="date__mainCard">${o.toDateString()}</div>
        <div class="front__mainCard">
            <div class="container-txt__mainCard">
                <p class="location__mainCard">${e.name} - ${e.sys.country}</p>
                <p class="meteo__mainCard">${e.weather[0].description}</p>
                <p class="temp__mainCard"><b>High:</b> ${e.main.temp_max}&deg;C</p>
                <p class="temp__mainCard"><b>Low:</b> ${e.main.temp_min}&deg;C</p>
            </div>
            <div class="container-img__mainCard">
                <img src="./src/img/${e.weather[0].icon}.png" class="imgMeteo__MainCard"
                    alt="${e.weather[0].description}" />
            </div>
        </div>
        <div class="back__mainCard">
            <p class="card-text"><b>High Feels like:</b> ${e.main.feels_like}&deg;C</p>
            <p class="card-text"><b>Pressure:</b> ${e.main.pressure}mb</p>
            <p class="card-text"><b>Humidity:</b> ${e.main.humidity}%</p>
            <p class="card-text"><b>Wind:</b> ${e.wind.speed}m/s, ${e.wind.deg}&deg;</p>
            <p class="card-text"><b>Sunrise:</b> <i>${d}</i></p>
            <p class="card-text"><b>Sunset:</b> <i>${x}</i></p>
        </div>
       </article>`),b()},u=e=>{let a=document.querySelector(".cardFlip__section");a.innerHTML=e.daily.map((t,n)=>{if(n<6&&n!=0){let i=new Date(t.dt*1e3);return console.log(`add card ${n}`),`<article class="cardFlip">
          <div class="date__cardFlip">${i.toDateString()}</div>
          <div class="front">
              <div class="container-img__cardFlip">
                  <img src="./src/img/${t.weather[0].icon}.png" class="imgMeteo__cardFlip"
                      alt="${t.weather[0].description}" />
              </div>
              <div class="container-txt__cardFlip">
                  <p class="meteo__cardFlip">${t.weather[0].description}</p>
                  <p class="location__cardFlip"><b>Timezone:</b> ${e.timezone}</p>
                  <p class="temp__cardFlip"><b>High:</b> ${t.temp.max}&deg;C</p>
                  <p class="temp__cardFlip"><b>Low:</b> ${t.temp.min}&deg;C</p>
              </div>
          </div>
          <div class="back">
              <p class="card-text"><b>High Feels like:</b> ${t.feels_like.day}&deg;C</p>
              <p class="card-text"><b>Pressure:</b> ${t.pressure}mb</p>
              <p class="card-text"><b>Humidity:</b> ${t.humidity}%</p>
              <p class="card-text"><b>Wind:</b> ${t.wind_speed}m/s, ${t.wind_deg}&deg;</p>
              <p class="card-text"><b>UV Index:</b> ${t.uvi}</p>
              <p class="card-text"><b>Precipitation:</b> ${t.pop*100}%</p>
          </div>
          </article>`}}).join(" "),console.log("join cards"),v()},f=()=>{let e=document.getElementById("latitude").value,a=document.getElementById("longitude").value,t=`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${a}&appid=${c}&units=${l}&lang=${s}`;fetch(t).then(n=>{if(!n.ok)throw new Error(n.statusText);return n.json()}).then(n=>{console.log(n),console.log(`get weather data by lat ${e} & lon ${a}`),$(n),u(n)}).catch(n=>{console.log("Noob !",n),alert(p)}),_.style.backgroundImage!=m&&g()},F=()=>{let e={enableHighAccuracy:!0,timeout:1e4,maximumAge:3e5};navigator.geolocation.getCurrentPosition(E,L,e)},E=e=>{document.getElementById("latitude").value=e.coords.latitude.toFixed(2),document.getElementById("longitude").value=e.coords.longitude.toFixed(2),console.log("get geolocation"),console.log(`lat: ${document.getElementById("latitude").value} lon: ${document.getElementById("longitude").value}`),f()},L=()=>{console.log("Noob !"),alert(p)},I=()=>{let e=document.getElementById("nameCity").value,a=`https://api.openweathermap.org/data/2.5/weather?q=${e}&cnt=40&units=${l}&APPID=${c}&lang=${s}`;fetch(a).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{console.log(t),console.log(`get weather data by city name: ${e}`),k(t),C()}).catch(t=>{console.log("Noob !",t),alert(p)})},z=()=>{let e=document.getElementById("nameCompareCity1").value,a=document.getElementById("nameCompareCity2").value,t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&cnt=40&units=${l}&APPID=${c}&lang=${s}`,n=`https://api.openweathermap.org/data/2.5/weather?q=${a}&cnt=40&units=${l}&APPID=${c}&lang=${s}`;Promise.all([fetch(t),fetch(n)]).then(i=>Promise.all(i.map(o=>o.json()))).then(i=>{console.log(i),console.log(`get weather data by comparator city 1: ${e} & city 2: ${a}`),B(i)}).catch(i=>{console.log("Noob !",i),alert(p)})},B=e=>{let a=e;window.myChart instanceof Chart&&(window.myChart.destroy(),console.log("destroy chart"));const t=document.getElementById("myChart").getContext("2d");window.myChart=new Chart(t,{type:"bar",data:{labels:[a[0].name,a[1].name],datasets:[{label:"",data:[e[0].main.temp,e[1].main.temp],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)"],borderWidth:1,fill:!1}]},options:{plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0}}}}),console.log("create chart")},S=()=>{document.getElementById("btnGet").addEventListener("click",f),document.getElementById("btnCurrent").addEventListener("click",F),document.getElementById("btnCityName").addEventListener("click",I),document.getElementById("btnCityCompareName").addEventListener("click",z),console.log("add eventlistener input button")},P=()=>{document.getElementById("nameCity").addEventListener("keyup",t=>{t.key==="Enter"&&document.getElementById("btnCityName").click()});let e=document.querySelectorAll("#latitude, #longitude");for(let t=0;t<e.length;t++)e[t].addEventListener("keyup",n=>{n.key==="Enter"&&document.getElementById("btnGet").click()});let a=document.querySelectorAll("#nameCompareCity1, #nameCompareCity2");for(let t=0;t<a.length;t++)a[t].addEventListener("keyup",n=>{n.key==="Enter"&&document.getElementById("btnCityCompareName").click()});console.log("add eventlistener key enter")},j=()=>{S(),P(),g(),console.log("bonjour!")};j();
