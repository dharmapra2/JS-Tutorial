'use strict';
//default parameters------------------------------------------
// const bookings=[];
// const createBooking=(flightnum,noOfPassanger=1,price=199*noOfPassanger)=>{
//     const booking={
//         flightnum,
//         noOfPassanger,
//         price,};
//         console.log(booking);
//         bookings.push(booking);
// }
//  createBooking('fk;lsdf');
//  createBooking('fk',2,45);
//  createBooking('fk',2);
//  createBooking('fk',undefined,100);

//passing argumentes to function-----------------------------
// const flight='L3124';
// const person={
//     name:'Dharma',
//     passport:'2853845',
// };
// const checkIn=(flightNum='L999',passenger)=>{
//     passenger.name='Mr. '+passenger.name;
//     if(passenger.passport==='2853845')alert("checked in..");
//     else
//         alert('wrong cridetinals.');
// };
// checkIn(flight,person);
// console.log(flight);
// console.log(person);

// const newPass=(person)=>{
//     person.passport="6365456635";
// };
// newPass(person);
// checkIn(flight,person);
// console.log(person);

// const oneWord=(str)=>{
//     return str.replace(/ /g,'').toLowerCase();
// };
// const upperFirstWord=function(str){
//     const [first,...others]=str.split(" ");
//     return [first.toUpperCase(),...others].join(' ');
// };
// const transformer=function(str,fun){
//     console.log(`original string : ${str}`);
//     console.log(`transformed string : ${fun(str)}`);
//     console.log(`transformed by : ${fun.name}`);
// }
// transformer("js is the best prog language",oneWord);
// transformer("js is the best prog language",upperFirstWord);

// const high5=()=>console.log('hi');
// new Set(['sdf','sdf','sdfsdcvc','sdkl']).forEach(high5);

//function retuning function==========================================
// const greet=(greeting)=>{
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// const greet=(greeting)=>(name)=>{
//         console.log(`${greeting} ${name}`);
//     }
// const greeterhey=greet('hey');
// greeterhey('Dharma');
// greeterhey('Jitu');
// greet('hello')('Dp');

//--------------------------the call() method====================
// const Book={
//     airline:" Air india",
//     code: "Air",
//     bookings:[],
//     book(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.code} ${flightNum}`);
//         this.bookings.push({flight: `${this.code} ${flightNum}, ${name}`});
//     },
// };
// Book.book(239,'dharma');
// Book.book(738,'Nikhil');
// console.log(Book.bookings);
// const earowings={
//     airline:" Jio india",
//     code: "jio",
//     bookings:[],
// };
// const swiss={
//     airline:" Swiss AirLine",
//     code: "Lx",
//     bookings:[],
// };
// const book=Book.book;
// book.call(Book,23,'MkDJ');
// book.call(earowings,54,'Mk Siva');
// book.call(swiss,50,'Mk dfjjfj');
// console.log(swiss);

//=================================apply() method===================
// const dataFlight=[23,'zxcvbn'];
// book.apply(swiss,dataFlight);

// book.call(swiss,...dataFlight);
// console.log(swiss);

//=================================bind() method===================
// const bookEw=book.bind(earowings);
// const bookAir=book.bind(Book);
// const bookJio=book.bind(swiss);
// bookAir(23,'ABC');
// bookEw(43,'XYZ');
// const bookSS23=book.bind(swiss,23);
// bookSS23('Daya');
// Book.plane=200;
// Book.buyPlane=function(){
//     // console.log(this);
//     this.plane++;
//     console.log(this.plane);
// }
// document.querySelector('.buy').addEventListener('click',Book.buyPlane.bind(Book));

//partial Application
// const addTax=(rate,val)=>val=val*rate;
// console.log(addTax(0.23,100));
// const addVAt=addTax.bind(null,0.23);
// console.log(addVAt(100));

// const addTaxRate=function(rate){
//     return function(val){
//         return val*=rate;
//     };
// };
// const addAt2=addTaxRate(0.23);
// console.log(addAt2(100));
/**
 const poll={
     question:'What is your fav. programming language ?',
     options:['0: javaScript','1:Pyhon','2:Ruby','3:C++'],
     answer: new Array(4).fill(0),
     registerNewAnswaer(){
        const ans=Number(prompt(`${this.question}\n${this.options.join('\n')}\n(write option number)`));
        console.log(ans);
        //register answer
        typeof ans === 'number' && ans<this.answer.length && this.answer[ans]++;
        // console.log(poll.answer);
        this.displayResults();
        this.displayResults('string');
     },
     displayResults(type= 'array'){
        if(type==='array'){
            console.log(this.answer);
        }
        else if(type==='string'){
            console.log(`polls are ${this.answer.join(', ')}`);
        }
     }
}*/
// poll.registerNewAnswaer();
// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswaer.bind(poll));

// poll.displayResults.call({answer: [4,2,6]},'string');
// poll.displayResults.call({answer: [4,2,6,65,3,5,3]});

