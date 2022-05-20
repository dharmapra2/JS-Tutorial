"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
let map = document.querySelector("#map");
let text = document.querySelector("#text");
//----------------- Render Country ---------------
function renderCountry(data, className = "") {
  let lang = Object.values(data.languages).join(",");
  let currencies = Object.values(data.currencies)[0]["name"];
  let countryName = data.name?.["common"];
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags["png"]}" />
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
  // countriesContainer.style.opacity = 1;
}
///////////////////////////////////////
/*const getCountry = (cname) => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${cname}`);
  request.send();
  // console.log(request.responseText);
  request.addEventListener("load", function () {
    // console.log(this.responseText);
    // destroring object to array
    const [ data ] = JSON.parse(this.responseText);
    //REnder country
    renderCountry(data);
    //Neighbour Countries
    const neighbourCountry = data.borders;
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
        renderCountry(data ,'neighbour');
        // console.log(data);
      });
    });
  });
};*/
// getCountry("sri");

/* -----------------------mordern way to call asynchronous ------------ */
const renderError = (err) => {
  countriesContainer.insertAdjacentHTML("beforeend", err);
  // countriesContainer.style.opacity = 1;
};
/*const getCountry = async (cname) => {
  await fetch(`https://restcountries.com/v3.1/name/${cname}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Country not found for name: ${cname} (${res.status}), Try Agian !..`
        );
      }
      return res.json();
    })
    .then((data) => {
      let country = data[0];
      renderCountry(country);
      // render neighbour countries
      const neighbourCountries = country.borders;
      if (!neighbourCountries) return;
      neighbourCountries.forEach((country) => {
        fetch(`https://restcountries.com/v3.1/alpha/${country}`)
          .then((res2) => {
            if (!res2.ok) {
              throw new Error(
                `Neighbour Country not found for name: ${country} (${res2.status}), Try Agian !..`
              );
            }
            return res2.json();
          })
          .then((data2) => {
            let country2 = data2[0];
            renderCountry(country2, "neighbour");
          });
      });
    })
    .catch((err) => renderError(`Something went wrong : ${err}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};*/

//fetch data and return
const getJson = async (url, errorMsg = "Something went wrong") => {
  return await fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status}), Try Agian !..`);
    }
    return response.json();
  });
};
const getCountry = async (cname) => {
  await getJson(
    `https://restcountries.com/v3.1/name/${cname}`,
    `Country not found for name : ${cname}`
  )
    .then((data) => {
      let country = data[0];
      renderCountry(country);
      // render neighbour countries
      const neighbourCountries = country.borders;
      console.log(neighbourCountries);
      if (!neighbourCountries)
        throw new Error(`No neighbour country found !..`);
      neighbourCountries.forEach((country) => {
        getJson(
          `https://restcountries.com/v3.1/alpha/${country}`,
          `Neighbour Country not found for name: ${country}`
        ).then((data2) => {
          let country2 = data2[0];
          renderCountry(country2, "neighbour");
        });
      });
    })
    .catch((err) => renderError(err.message))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// btn.addEventListener("click", () => {
//  getCountry("india");
// });

const viewMap = (coords, address) => {
  //to remove exiting map data
  map.remove();
  //set new map
  map = L.map("map").setView(coords, 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  L.marker(coords)
    .addTo(map)
    .bindPopup(`<h2>${Object.values(address).toString()}</h2>`)
    .openPopup();
};
// getCountry("fthr");
const whereAmI = async (input) => {
  await fetch(`https://geocode.xyz/${input}?json=1`)
    .then((res) => {
      if (!res.ok)
        throw new Error(
          `Problem with geocoding api (${res.status}), Try Agian !..`
        );
      return res.json();
    })
    .then((data) => {
      let address = data.standard;
      console.log(address);
      const coords = [data.latt, data.longt];
      viewMap(coords, address);
    })
    .catch((err) => console.log(err.message));
};

//to view current location onm map
const getPosition =async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then((pos) => {
  console.log(pos.coords);
  const { latitude, longitude } = pos.coords;

  map = L.map("map").setView([latitude, longitude], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(`<h2>home</h2>`)
    .openPopup();
});

function getData() {
  console.log(text.value);
  whereAmI(text.value);
  // text.value = "";
}

// map js
