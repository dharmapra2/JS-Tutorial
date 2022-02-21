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
let map,mapEvent;

// navigator.geolocation is work as callback function
if (navigator.geolocation) {
    //to get current positions of device
    navigator.geolocation.getCurrentPosition(function (pos) {
        // console.log(pos);
        const { latitude,longitude } = pos.coords;
        // console.log(latitude, longitude);
        // console.log(`https://www.google.co.in/maps/@${latitude},${longitude}`);
        const coords = [ latitude, longitude ];
        map = L.map('map').setView(coords, 13);
        // console.log(map);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // here the below on() is derived from leaflet lib. It is a eventListener also work as callback function

        //handling click on map
        map.on('click', function (mapE) {
            mapEvent = mapE;
            form.classList.remove("hidden");
            inputDistance.focus();
        }) 
    }, function () {
        alert(`could not get your position`);
    }
    );
}
form.addEventListener('submit', function () {
    // display marker
       console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;
        L.marker({ lat, lng }).addTo(map)
        .bindPopup(
        L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className:"running-popup"
        })
        )
        .setPopupContent('workout')
        .openPopup();
})