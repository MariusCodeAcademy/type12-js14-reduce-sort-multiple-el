'use strict';
import { users } from './students.js';
console.log('reduce.js');

const nums = [1, 2, 3, 4];

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

// naudojant reduce gauti vidurki be isoriniu kintamuju

console.log('reduceNums ===', reduceNums);
console.groupEnd();
