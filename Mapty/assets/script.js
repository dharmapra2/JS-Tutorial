'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


// navigator.geolocation is work as callback function
if (navigator.geolocation) {
    //to get current positions of device
    navigator.geolocation.getCurrentPosition(function (pos) {
        // console.log(pos);
        const { latitude,longitude } = pos.coords;
        console.log(latitude, longitude);
        console.log(`https://www.google.co.in/maps/@${latitude},${longitude}`);
    }, function () {
        alert(`could not get your position`);
    }
    );
}