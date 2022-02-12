'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach((e) => e.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//=====================scrolling==================================
const btnScrollTo = document.querySelector('.btn--scroll-to');
//console.log(btnScrollTo);
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('current scroll(x/y)', window.pageXOffset, window.pageYOffset);
  // console.log('height/width viewport', document.documentElement.clientHeight,document.documentElement.clientWidth);

  //method--1
  // window.scrollTo(
  //   s1coords.left = window.pageXOffset,
  //   s1coords.top = window.pageYOffset
  // );
  //method--2
  // window.scrollTo({
  //     left: s1coords.left = window.pageXOffset,
  //     top: s1coords.top = window.pageYOffset,
  //     behavior: 'smooth'
  //   });
    //method--3
  section1.scrollIntoView({ behavior: 'smooth' });
});

//===================navbar scrolling==================








//==================testing===================================
//----------selecting element--------
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);
const header = document.querySelector('.header');
// console.log(header);
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);
// console.log(document.getElementById('section--1'));
// const allbtn = document.getElementsByTagName('button');
// console.log(allbtn);
// console.log(document.getElementsByClassName('btn'));

//---------------creating & inserting element====================
const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.innerHTML = `we use cookie for imporve functionality<button class="btn btn--close-cookie">Got it!<button>`;
// console.log(msg);
header.prepend(msg);
// header.append(msg);
// header.append(msg.cloneNode(true));
setTimeout(() => {
  msg.remove();
}, 4000);
// header.before(msg);
// header.after(msg);

//------------delete elements============
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  msg.remove();
  // msg.parentElement.removeChild(msg);
});

//====styles ,attributes,classes================
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';
// console.log(msg.style.height);
// console.log(getComputedStyle(msg).height);
// console.log(msg.style.backgroundColor);
// console.log(msg.style.color);
// console.log(getComputedStyle(msg).color);
msg.style.height = Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered');
const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);
// console.log(logo.designer);
// console.log(logo.dataset.versionNumber);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Banklist');

// logo.classList.add('c', 'b');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// console.log(logo.classList.contains('b'));
// console.log(logo.className);
