'use strict';
//Arrays---------------------------------
// let arr=['a','b','f','f','ds','e','z'];
// console.log(arr);
//slice methos-----------------------------------
// console.log(arr.slice(3));
// console.log(arr.slice());
// console.log(arr.slice(1,-2));
// console.log([...arr]);

// console.log([...new Set(arr2)].reverse());
//splice==============================================
// console.log(arr);
// console.log(arr.splice(4,1));
// console.log(arr);

// console.log(arr.slice(3).concat(arr.splice(4)));
// console.log(arr);

// console.log(arr.join('+'));
// console.log(arr.at(2));
// console.log(arr);


// let arr2=[1,-2,5,3,-6,-3,4,-3,2];
// for(const item of arr2){
//     if(item>0)
//         console.log(`you depositred ${item}`);
//     else
//         console.log(`you withdraw ${item}`);
// }

// arr2.forEach((item)=>{
//     if(item>0)
//         console.log(`you depositred ${item}`);
//     else
//         console.log(`you withdraw ${item}`);
// });

// for(const [i,val] of arr2.entries()) {
//     console.log(`${i}: ${val}`);
// }
// arr2.forEach((item,index)=>console.log(`${index}: ${item}`));

// const rupees=new Map([
//     ['usd','dollar'],
//     ['r','rupees'],
//     ['e','euro'],
// ]);
// console.log(rupees);
// for(const [key,val] of rupees.entries()){
//     console.log(key);
// }
// rupees.forEach((key,val)=>console.log(`${key} => ${val}`));


//========== Data Transformations =========================
const move=[200,450,-400,30,650,-130];
console.log(move);
const euroToUsd=1.1;
// const moveToUSd=move.map((mov)=>Math.trunc(mov*euroToUsd));
// console.log(moveToUSd);

// const moveToUsdFor=[];
// for(const mov of move){
//     moveToUsdFor.push(Math.trunc(mov*euroToUsd));
// }
// console.log(moveToUsdFor);

// const desc=move.map((mov,i,arr)=>{
//     if(mov>0)
//         return `${i+1} : you deposit ${mov}`;
//     else
//         return `${i+1} : you withdraw ${Math.trunc(mov)}`;
// });
// console.log(desc);

// const desc=move.map((mov,i)=>`Movement ${i+1} : you ${mov>0?'deposite':'withdraw'} ${Math.trunc(mov)}`);
// console.log(desc);

const createUserName=(user)=>{
    const username=user.toLowerCase().split(' ').map(name=>name.at(0)).join('');
    return username;
}
console.log(createUserName('Dharma Prashanf'));

console.log('===========filter()============');
const deposit=move.filter(mov=>mov>0);
console.log(deposit);
// const withdraw=move.filter(mov=>mov<0);
// console.log(withdraw);

console.log('===========reduce()============');
const balance=move.reduce((acc,mov)=>acc+mov,0);
console.log(balance);
// let sum=0;
// for(const mov of move) sum+=mov;
// console.log(sum);

console.log('===========chaning methods============');
const interest=move.filter(mov=>mov>0)
                .map(deposit=>(deposit*1.2)/100)
                .filter((int,i,arr)=>int>=1)
                .reduce((acc,int)=>acc+int,0);
console.log(interest);

console.log('===========find()============');
const withdraw=move.find(mov=>mov<0);
console.log(withdraw);

console.log('===========findIndex()============');
const index=move.findIndex(acc=>acc===450);
console.log(index);

//separate callback functions
const fn=mov=>mov>0;
console.log(move.some(fn));
console.log(move.filter(fn));
console.log(move.every(fn));

console.log('===========flat()============');
const arr=[[2,4,2],[64,3,5,7,4],45,[3,[35646,24,24,]],9];
console.log(arr);
console.log(arr.flat(2));

console.log('===========sorting()============');
const asec=move.sort((a,b)=>a-b);
console.log(asec);

console.log('===========fill()============');
console.log(new Array([2,4,3,]));
const x=new Array(5);
console.log(x);
console.log(x.fill(4,1,3));

console.log('===========Array.form()============');
const z=Array.from({length:8},(curr,index)=>index+1);
console.log(z);