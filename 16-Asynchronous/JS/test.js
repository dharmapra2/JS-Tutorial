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
getPosition().then((pos) => console.log(pos));

