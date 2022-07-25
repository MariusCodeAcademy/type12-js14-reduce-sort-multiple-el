'use strict';
import { students, users } from './students.js';
console.log('reduce.js');

const nums = [1, 2, 3, 4];
//   1/4 + 2/4 + 3/4 + 4/4

let total = 0;
nums.forEach((sk) => {
  total += sk;
});

// console.log('total ===', total);
// Array.reduce - multi tool gali buti naujamas bet kokiom transformacijoms, bendra suma, vidurki, rasti diziausia maziausia skaicius ir pan . Gali grazinti objektus.
// Array.reduce((acc, curr, ind, arr) => {}, 0)
// acc - akumuliatorius - reikme kuri grazinama nesa informacija per visus ciklus (total)
// curr - einamoji reikmes (sk)
// {} - vygdomas blokas is kurio grazinama reikmes isaugoma acc
// 0 pradine reiksme acc
console.group('reduceNums');

const reduceNums = nums.reduce((total, sk, idx) => {
  // debugger;
  // console.log('total ===', total);
  // console.log('sk ===', sk);
  // console.log('idx ===========================================', idx);
  return total + sk;
}, 0);
console.log('reduceNums ===', reduceNums);

// naudojant reduce gauti vidurki be isoriniu kintamuju
const numsAvg = nums.reduce((total, sk, idx, arr) => {
  console.log('total ===', total);
  return total + sk / arr.length;
});
console.log('numsAvg ===', numsAvg);
console.groupEnd();

// users
// kiek bendrai yra patirties per users darbuotojus
const yearsOfExp = users.reduce((totalExp, uObj) => totalExp + uObj.exp, 0);
let yearsOfExpAvg = users.reduce((totalExp, uObj) => totalExp + uObj.exp / users.length, 0);
yearsOfExpAvg = users.reduce((totalExp, uObj) => totalExp + uObj.exp, 0) / users.length;
console.log('yearsOfExpAvg ===', yearsOfExpAvg);
console.log('yearsOfExp ===', yearsOfExp);

// skaiciuojam su reduce vidutini studentu amziu

// sukurti funkcija kuri grazina kiek yra vyru ir moteru objekto pavidalu
// {
//   vyrai: 15;
//   moterys: 10;
// }
