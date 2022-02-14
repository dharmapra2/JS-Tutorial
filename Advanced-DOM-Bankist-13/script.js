'use strict';

///////////////////////////////////////
const tabs = document.querySelectorAll('.operations__tab');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const section1 = document.querySelector('#section--1');
// Modal window===================
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
btnsOpenModal.forEach(e => e.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/////////////////////////////////////////////
//=====================scrolling==================================
//console.log(btnScrollTo);
// console.log(section1);
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
//////////////////////////////////////////////
//===================Page Navigation==================
//method--1
/**
document.querySelectorAll('.nav__link').forEach(function (e) {
  e.addEventListener('click', function (ele) {
    ele.preventDefault();
    const id = ele.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth', });
  });
});*/

//method--2
//it is best efficent method to scroll by using Event Delegation
document.querySelector('.nav__links').addEventListener('click', function (ele) {
  ele.preventDefault();
  if (ele.target.classList.contains('nav__link')) {
    // if (ele.target.className==='nav__link') {
    const id = ele.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////////////////////////////////
//==============tabed component==================================

// console.log(tabs);
// console.log(tabContent);
// console.log(tabContainer);
tabsContainer.addEventListener('click', function (ele) {
  const clicked = ele.target.closest('.operations__tab');
  // console.log(clicked);
  ////===Active tab-------------
  //Gaurd Cluse
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //---------Active Content-------------------
  //read data-tab froom clicked button element
  let clickedDataTab = clicked.dataset.tab;
  // console.log(clickedDataTab);
  tabContent.forEach(t => t.classList.remove('operations__content--active'));
  //display active content only
  document
    .querySelector(`.operations__content--${clickedDataTab}`)
    .classList.add('operations__content--active');
});

////////////////////////////////////////////////////////////////////
//==============Menu Fade Animations===============================
// console.log(nav);
const mouseHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibilings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibilings.forEach(e => {
      if (e !== link) e.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//mouseover or mouseout both are opposite
//normal function calling
// nav.addEventListener('mouseover', function (e) {
//   mouseHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   mouseHover(e, 1);
// });
//using bind() calling
nav.addEventListener('mouseover', mouseHover.bind(0.5));
nav.addEventListener('mouseout', mouseHover.bind(1));

////////////////////////////////////////////////////////////////
//=====================sticky Navbar============================
// console.log(header);
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNavbar = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNavbar, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
///////////////////////////////////////////////////////////////////
//===========Reveling sections===============================
const allSection = document.querySelectorAll('.section');
// console.log(allSection);
const revelSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserve = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(section => {
  sectionObserve.observe(section);
  section.classList.add('section--hidden');
});

////////////////////////////////////////////////////////////////
//==============lazy loading image===========================

const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);
const loading = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

/////////////////////////////////////////////////////////////////////////
//================slider Component======================================
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    //using shotcircuting opearator
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
/////////////////////////////////////////////////////////////
//==================testing & pratice===================================
//----------selecting element--------
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);
// console.log(header);
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
}, 5000);
// header.before(msg);
// header.after(msg);

//------------delete elements============
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
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
msg.style.height =
  Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + 'px';
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

//=============types of event and handlers===================
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter',function(e){
//   alert('your reading heading');
// });

// h1.onmouseenter = e => alert('fikf');

// const alerth1 = (e) => {
//   alert('don\' copy ');
//   //remove eventlistiner
//   h1.removeEventListener('copy', alerth1);
// }
// h1.addEventListener('copy', alerth1);

//======================DOM traversing====================
// going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'blue';

// //going upwards : parent
// console.log(h1.parentElement);
// console.log(h1.parentNode);
// h1.closest('h1').style.backgroundColor = 'var(--gradient-secondary)';
