'use strict';
console.log('main.js');

// taikom
// const appEl = document.getElementById('app');
const btnEl = document.getElementById('btn');

const nums = [-50, 14, 0, 24, 100, -45];
printArrInApp('orginalas', nums);

// isrikiuoti masyva a-z ir nuo z-a
const sortedAz = nums.sort((a, b) => a - b);
printArrInApp('sortedAz', sortedAz);

console.log('sortedAz ===', sortedAz);
const sortedZa = nums.sort((a, b) => b - a);
printArrInApp('sortedZa', sortedZa);

console.log({ sortedAz, nums });

// atvaizduoti <div id="app"></div> orginala, az ir za versijas atsikruose <p></p> taguose

function printArrInApp(title, arr) {
  // title = orginalas | AZ | ZA
  // nusitaikyti i app
  const appEl = document.getElementById('app');

  // sukurti paragrafa
  const pEl = document.createElement('p');
  let resultString = title + ': [';

  // sudeti visus el is arr i parafa (butu gerai be el.textContent +=)
  const elString = arr.map((el) => el).join(', ');
  console.log('elString ===', elString);

  resultString += elString;
  resultString += ' ]';
  pEl.append(resultString);
  // ideti p i appEl
  appEl.append(pEl);
}

// <button>Sort</button> paspaudus mygtuka isrikiuojam orginala nuo A iki Z
