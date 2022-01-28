"use strict";
// const mheight=1.69,mmass=78;
// const jheight=1.95,jmass=92;
// let bmiofmark=mmass/mheight**2;
// let bmiofjhon=jmass/jheight**2;
// let height=bmiofjhon<bmiofmark;
// console.log(bmiofjhon,bmiofmark,height);
// const name1="Dharma";
// let dp= name1+" score occoured "+bmiofjhon;
// let dp1=`${name1} score occoured ${bmiofjhon}`;
// console.log(dp);
// console.log(dp1);
//------------------ restaurant object-------------
/**
const restaurant={
    name:'Dharma',
    loc:'chikit',
    categories: ['indian','chines','italy'],
    starterMenu:['Bread','egg','salad'],
    mainMenu:['pizza','pasta','milk'],
    openingHours:{
        thu:{
            open:12,close:24,},
        fri:{
            open:12,close:23,},
        sat:{
            open:0,close:24,},
        },
    order:function(starterIndex,mainIndex) {
        return (this.starterMenu[starterIndex],this.mainMenu[mainIndex]);
    },
};
console.log(restaurant);*/
//-----------------destructing object---------------------

// const { name :name1,openingHours:open1,categories:tags}=restaurant;
// console.log(name1,open1,tags);

// const {mainMenu:menu=[],starterMenu:menust=[]}=restaurant;
// console.log(menu);
// menu.unshift("fsadjf");
// console.log(menu);
// menu.shift();
// console.log(menu);
// menu.pop();
// console.log(menu.push('paneer','sdfsf'),menu,menust);
// console.log(restaurant['mainMenu']);
// let [menu,second]=restaurant.mainMenu;
// console.log(menu,second);
//swaping the value
// [menu,second]=[second,menu];
// console.log(menu,second);
//-----------------forloop---------------------
// let count=function(num){
//     for(var i=0;i<num;i++)
//         console.log(`hi i'm ${i} years old`);
// }
// const age=count(4);

//-----------------matn trunc---------------------
// let dice=Math.trunc(Math.random()*6)+1;
// while(dice!==6){
//     console.log(`you rolled a ${dice}`);
//     dice=Math.trunc(Math.random()*6)+1;
//     if(dice===6){
//         console.log('your loop going to end..........')
//     }
// }

// const {sat:{open:o,close:c},}=restaurant.openingHours;
// console.log(o,c);

//create an function for object property
// restaurant.orderDelivery=function(value){
//     console.log(value);
// }
// restaurant.orderDelivery({
//     name:restaurant.name,
//     time: '12.30',
//     address: restaurant.loc,
//     main: 2,
//     starterMenu: 2,
// });

// --------------Spread Operator----------------
// const arr=[3,4,5];
// let arr2=[1,2,arr[0],arr[1],arr[2]];
// console.log(arr2);
// //using spread oberator
// arr2=[1,2,...arr];
// console.log(arr2);
// console.log(...arr2);
//  const menu=[...restaurant.mainMenu,'DP'];
//  menu[2]="pppppp";
//  console.log(menu);
//  restaurant.mainMenu[2]="sfdrd";
//  console.log(menu);
// console.log(restaurant.mainMenu);
// const str='Dharma';
// const letters=[...str,' ','p'];
// console.log(letters);
// const newResturant={
//     foundIn:2012,
//     ...restaurant,
//     abc:'Durga',
// };
// console.log(newResturant);
//--------------------rest pattern and parameter------------------
// const [a,b,...other]=[1,2,3,4,5,6,7];
// console.log(a,b,...other);
// spread operator should be last always.
// const {sat,...weeksDays}=restaurant.openingHours;
// console.log(weeksDays);

// const add=(...val)=>{
//     let sum=0;
//     for(let i=0;i<val.length;i++){
//         sum++;
//     }
//     console.log(sum);
// }
// add(2,3);
// add();
// add(2,3,2,45,5,3);
// add(2,3,54,6,35,67,4);
// const x=[8,2,5,6,3,65,3,6,3,6];
// add(...x);

//----------------Nullish coalsaing operator(??)-----------------
// restaurant.num=0;
// const guest=restaurant.num || 10;
// console.log(guest);
// const guestCorrect=restaurant.num ?? 10;
// console.log(guestCorrect);
//-------------------------Game -----------------------
/** 
    const game={
    team1: 'Chikit',
    team2: 'Berhampur',
    players: [
        ['DP','kp','pd','hud','ldf','sfer','ereg','fvdr','rtge','fdd','jfgvc',],
        ['sur','min','nikjl','delji','jkad','tokoio','eng','pnjab','nuas','india','fgry',],
    ],
    score: '4:0',
    scored:['DP','fvdr','eng','hyd'],
    date:'Nov 9th 2022',
    odds:{
        team1 : 1.33,
        x: 3.25,
        team2:6.5,
    },
    };
*/
// const [players1,players2]=game.players;
// console.log(players1,players2);
// const [gk,...fieldPlayers]=players1;
// console.log(gk,fieldPlayers);
// const allplayers=[...players1,...players2];
// console.log(allplayers);
// const playersFinal=[...players1,'thi','coui','peri'];
// const {odds:{team1,x:draw,team2},}=game;
// console.log(team1,draw,team2);
// const printGoals=(...players)=>{
//     console.log(players);
//     console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);
// team1<team2 && console.log(`team1 is more likely to win`);
// team1>team2 && console.log(`team2 is more likely to win`);

// Looping array :for each loop-------------
// for(const items of allplayers)
// console.log(items);

// for(const items of allplayers.entrie){
//     console.log(items);
//     console.log(`${items[0]+1}:${items[1]}`);
// }

// for(const [i,el] of allplayers.entries()){
//     console.log(`${i+1}:${el}`);
// }

//---------=====optional chaining(?.)==========-------------
// console.log(restaurant.openingHours.fri ?.open);
// console.log(restaurant.openingHours.mon?.open);

// //eg-2
// const days=['mon','tue','wends','thu','fri','sat','sun'];
// for(const day of days){
//     //here we use nullish coalescing & optional chaining operator
//     const open= restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`${day}, we open at ${open}`);
// }
// console.log(restaurant.order ?.(2,2) ?? `Method does't exist .`);

// const users=[{name:'Dharma',email:'dp@email.com',}];
// console.log(users[1]?.name ?? 'User array is empty');

//=============looping objects============================
// const prop=Object.keys(restaurant.openingHours);
// console.log(prop);
// let openStr=`we are open on ${prop.length} days `;
// for(const day of prop){
//     openStr+=`${day} `;
// }
// console.log(openStr);
// const values=Object.values(restaurant.openingHours);
// console.log(values);
// const entries= Object.entries(restaurant.openingHours);
// console.log(entries);
// // console.log(Object.values(entries));
// for(const [key,{open,close}] of entries){
//     console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

//------------coding challange 2-----------------
// console.log(game);
// for(const [goal,pName] of game.scored.entries()){
//     console.log(`Goal ${goal+1}: ${pName}`);
// }
// //calculating average of odds
// const oddVal=Object.values(game.odds);
// let average=0;
// for(const val of oddVal){
//     average+=val;
// }
// console.log(`Average = ${average/oddVal.length}`);

// const odd=Object.entries(game.odds);
// for( const [team,values] of odd){
//     const teamStr= team==='x'?'draw': `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} : ${values}`);
// }

//--------------modern Data Structure------------------------
//-----------------------Set------------------------
// const orderSet=new Set(['pizza','egg','pasta','pizza','egg','pasta',]);
// console.log(orderSet);
// console.log(new Set('Dharma'));
// console.log(orderSet.size);
// methods of Set object-----------------
// console.log(orderSet.has('pasta'));
// console.log(orderSet.add('dp'));
// orderSet.clear('pizza');
// for(const item of orderSet.entries())
// console.log(item);

// const str=['pizza','egg','pasta','pizza','egg','pasta'];
// const setStr=new Set(str);
// console.log(setStr);
// set to array just using spread operator
// const arr=[...new Set(str)];
// console.log(arr);
// console.log(new Set('Dharma').size);

//-----------------------Map DS------------------------
// const rest= new Map([[true,'Corrext']]);
// rest.set('name','Dharm');
// rest.set(true,"dfkf");
// rest .set('categories',['a','b','c']).set('open',23).set('close',34);
// console.log(rest.set("skdfj",'kfj'));
// console.log(rest.get(true));
// let time=20;
// console.log(rest.get(time>rest.get('open') && time<rest.get('close'))??0);

// rest.set([1,2],'test');
// console.log(rest.get([1,2]));

// const arr=[1,2];
// rest.set(arr,'test');
// console.log(rest);
// console.log(rest.get(arr));
// rest.set(document.querySelector('h1'),'heading');
// console.log(rest.get(null));

//other way to create an map object
// const que=new Map([
//     ['question','What is the most used progm lang ?'],
//     [1,'c'],
//     [2,'php'],
//     [3,'java'],
//     ['correct',3],
//     [true,'correct'],
//     [false,'try agian']
// ]);
// console.log(que);
// const hourmap=new Map(Object.entries(restaurant.openingHours));
// console.log(hourmap);
//map to array--------------------------------
// console.log([...que]);
// console.log([...que.keys()]);
// console.log([...que.values()]);

//=======================String============================
// const airPlane = "Tap Airbus Portugal";
// const plane = "A3203";
// console.log(plane[4]);
// console.log("Dahrma".indexOf("a"));
// console.log("Dahrma".lastIndexOf("a"));
// console.log(airPlane.slice(4,-2));
// console.log(airPlane.slice(airPlane.lastIndexOf(' ')+1));

// console.log(new String('sdfsf'));
// console.log(typeof new String('sdfsf'));
// console.log(typeof new String('sdfsf').slice(-1));

// let money='24.4+';
// console.log(money.replaceAll('4','6'));
// console.log(money);

// console.log(airPlane.includes('Airbus'));
// console.log(airPlane.startsWith('Tap'));
// console.log(airPlane.endsWith('gal'));
//  console.log("sfjk+sfksf+fskf+fjkdf+fsf-+".split('+').join('='));

// const card=(num)=>{
//     const str=String(num);
//     const last=str.slice(-4);
//     return last.padStart(str.length,'*');
// }
// console.log(card(3483585854849));
// console.log(card(23));
// console.log(card(3483234892));
// console.log(card(394376));