"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/india");
request.send();
// console.log(request.responseText);
request.addEventListener("load", function (){
  // console.log(this.responseText);
  // destroring object to array
  const [data] =JSON.parse(this.responseText);
  const html = `
    <article class="country">
    <img class="country__img" src="${data.flags['png']}" />
      <div class="country__data">
        <h3 class="country__name">${data.name['common']}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/10000000).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${data.languages['hin']}</p>
        <p class="country__row"><span>💰</span>${data.currencies['INR']['name']
      }</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});