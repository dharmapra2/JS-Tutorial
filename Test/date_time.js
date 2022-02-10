"use strict";
const dateSpan=document.querySelector('.date');
// console.log(dateSpan);
// const now=new Date();
// dateSpan.textContent=now.toISOString();
// console.log(now);
// console.log(new Date('Feb 04 2022 22:33:31'));
// console.log(new Date('december 23,2015'));
// console.log(new Date(2022,2,4,22,35));
// console.log(new Date(0));
// console.log(new Date(2022,2,4));
// console.log(new Date(3*24*60*60*1000));

//methos==========================
// const fut=new Date();
// console.log(fut);
// console.log(fut.getFullYear());
// console.log(fut.getMonth());
// console.log(fut.getDate());
// console.log(fut.getDay());
// console.log(fut.getHours());
// console.log(fut.getMinutes());
// console.log(fut.getMilliseconds());
// console.log(fut.toISOString());
// console.log(fut.getTime());
// console.log(new Date(1643994885724));
// console.log(fut.getTime())
// console.log(new Date(fut.getTime()))
// console.log(new Date(Date.now()));
// fut.setFullYear(2021);
// console.log(fut);
// fut.setFullYear(1999)

//=============calculate days==========
/**const caldays = (d1, d2) => Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
const days1 = caldays(new Date(2022, 2, 29), new Date(2022, 2, 26));
console.log(`Diff. bet 2 date is = ${days1}`);*/

//================Internationalizing=====================================
/** here intl is an API */
//=>1 for Date :-------------------------------
/**const now1 = new Date();
const option = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};
const local = navigator.language;
console.log(local);
const formatIn = new Intl.DateTimeFormat('en-in',option).format(now1);
const formatUk = new Intl.DateTimeFormat('en-uk',option).format(now1);
console.log(formatIn);
console.log(formatUk);*/

//=>2 for number :-------------------------------
/** Intl API also used for number format based on thier county code */
/**const num = 3884764.23;
const option = {
    style: 'currency',
    currency: 'EUR',
};
const format = (code) => `${code} ${Intl.NumberFormat(code,option).format(num)}`;
console.log(format('en-in'));
console.log(format('en-us'));
console.log(format('en-uk'));
console.log(format('de-DE'));
console.log(format(navigator.language));*/

/** =======================Timer=======================================*/
// setTimeout(() => console.log(`hi`), 1000);
// let ing = [ 'olive', 'spinch' ];
// const timer=setTimeout((ing1,ing2) => { console.log(`here is ur pizza with ${ing1} and ${ing2}`)}, 3000,...ing);
// console.log(`waitng...`);
// if (ing.includes('spinch'))
//     clearTimeout(timer);
// clearInterval(timer);

setInterval(() => {
    let now = new Date();
    dateSpan.textContent = now;
});
console.log('wait 1s');

//======================count down the timer===========================
const count = document.querySelector('.count');
let time = 60;
const countDown = () => {
    count.style.background = 'yellow';
    const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
        //in each call to print the remaing time to GUI
        count.textContent = `${min} : ${sec}`;
        if (time === 0) {
            count.textContent = `click to start countdown`;
            count.style.background = '';
            clearInterval(timer);
            time = 60+1
        }
        time--;
    };
    tick();
    const timer = setInterval(tick, 1000);
};
count.addEventListener('click', countDown);
