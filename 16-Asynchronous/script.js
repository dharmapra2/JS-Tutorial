"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//----------------- Render Country ---------------
function renderCountry(data) {
  let lang = Object.values(data.languages).join(",");
  let currencies = Object.values(data.currencies)[ 0 ][ "name" ];
  let countryName = data.name?.[ "common" ];
  const html = `
    <article class="country">
    <img class="country__img" src="${data.flags[ "png" ]}" />
      <div class="country__data">
        <h3 class="country__name">${countryName}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
      +data.population / 10000000
    ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${lang}</p>
        <p class="country__row"><span>💰</span>${currencies}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}
///////////////////////////////////////
const getCountry = (cname) => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${cname}`);
  request.send();
  // console.log(request.responseText);
  request.addEventListener("load", function () {
    // console.log(this.responseText);
    // destroring object to array
    const [ data ] = JSON.parse(this.responseText);
    console.log(data);
    //REnder country
    renderCountry(data);
    //Neighbour Countries
    const neighbourCountry = data.borders;
    console.log(neighbourCountry);
    neighbourCountry.forEach((country) => {
      const requestNeighbourCountry = new XMLHttpRequest();
      requestNeighbourCountry.open(
        "GET",
        `https://restcountries.com/v3.1/alpha/${country}`
      );
      requestNeighbourCountry.send();
      requestNeighbourCountry.addEventListener("load", function () {
        const [ data ] = JSON.parse(this.responseText);
        //REnder country
        renderCountry(data);
        // console.log(data);
      });
    });
  });
};
getCountry("portugal");
