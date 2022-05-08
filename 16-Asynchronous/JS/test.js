"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
let map = document.querySelector("#map");
let text = document.querySelector("#text");

// const result = new Promise((resolve, reject) => {
//   if (Math.random() >= 0.5) {
//     resolve("you win");
//   } else {
//     reject("you loss");
//   }
// });
// result.then((res) => console.log(res)).catch((err) => console.log(err));

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then((pos) => {
  console.log(pos.coords);
  const { latitude, longitude } = pos.coords;
  map = L.map("map").setView([ latitude, longitude], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  L.marker([ latitude, longitude])
    .addTo(map)
    .bindPopup(`<h2>home</h2>`)
    .openPopup();
});
