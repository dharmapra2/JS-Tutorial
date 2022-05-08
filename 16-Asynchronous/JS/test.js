"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
let map = document.querySelector("#map");
let text = document.querySelector("#text");

const viewMap = (coords, address) => {
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

function getData() {
  console.log(text.value);
  whereAmI(text.value);
  text.value = "";
}
const result = new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) {
    resolve("you win");
  } else {
    reject("you loss");
  }
});
result.then((res) => console.log(res)).catch((err) => console.log(err));
