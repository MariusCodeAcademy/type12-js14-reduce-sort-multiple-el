'use strict';
console.log('main.js');

const nums = [-50, 14, 0, 24, 100, -45];
printArrInApp('orginalas', nums);

// isrikiuoti masyva a-z ir nuo z-a
const sortedAz = nums.sort((a, b) => a - b);
console.log('sortedAz ===', sortedAz);
const sortedZa = nums.sort((a, b) => b - a);
console.log('sortedZa ===', sortedZa);
console.log({ sortedAz, nums });

// atvaizduoti <div id="app"></div> orginala, az ir za versijas atsikruose <p></p> taguose

function printArrInApp(title, arr) {
  // title = orginalas | AZ | ZA
  // nusitaikyti i app
  // sukurti paragrafa
  // sudeti visus el is arr i parafa (butu gerai be el.textContent +=)
}

// <button>Sort</button> paspaudus mygtuka isrikiuojam orginala nuo A iki Z
