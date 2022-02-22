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
// let map,mapEvent;

class workout{
    date = new Date();
    id = [ this.date + " " ].splice(-10);
    constructor(coords, distance, duration) {
        // this.date;
        this.coords = coords;     //{latitude,langitude}
        this.distance = distance; //in KM
        this.duration = duration; //in minute
    }
}

class Running extends workout{
    constructor(coords, distance, duration,cadence) {
        //calling to super class constrctor
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }
    calcPace() {
        // in min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
class Cycling extends workout{
    constructor(coords, distance, duration,elevationGain) {
        //calling to super class constrctor
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }
    calcSpeed() {
        // in km/hr
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

const run1 = new Running([39,-12],5.2,24,178);
const cyc1 = new Cycling([39,-12],27,95,523);
console.log(run1, cyc1);

//////////////////////////////////////////////////////////////////
//Application Architecture
class App{
    #map;
    #mapEvent;
    constructor() {
        this._getPosition();
        form.addEventListener('submit',this._newWorkOut.bind(this));
        // change inputs on type(cycle/running) mode
        inputType.addEventListener('change', this._toggleElevationField.bind(this));
    }
    _getPosition() {
        if (navigator.geolocation) {
        //to get current positions of device
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
            alert('could not get your position');
        });
        }
    }
    _loadMap(pos) {
        const { latitude,longitude } = pos.coords;
        const coords = [ latitude, longitude ];
        this.#map = L.map('map').setView(coords, 13);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        //handling click on map
        this.#map.on('click', this._showForm.bind(this)); 
    }
    _showForm(mapE) { 
        this.#mapEvent = mapE;
            form.classList.remove("hidden");
            inputDistance.focus();
    }
    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
     }
    _newWorkOut() {
        e.preventDefault();
        
            //clear input fields
            inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = '';
            // display marker
            //console.log(mapEvent);
            const { lat, lng } = this.#mapEvent.latlng;
            L.marker({ lat, lng }).addTo(this.#map)
                .bindPopup(
                    L.popup({
                        maxWidth: 250,
                        minWidth: 100,
                        autoClose: false,
                        closeOnClick: false,
                        className: "running-popup"
                    })
                )
                .setPopupContent('workout')
                .openPopup();
    }
}

const workoutApp = new App();
// workoutApp._getPosition();



