'use strict';
import { students, users } from './students.js';
console.log('main.js');

console.log('students ===', students[0]);
// console.log('nums ===', nums);

// isrikiuoti studentu paga amziu
students.sort((a, b) => b.age - a.age);

// isrikiuoti studentu pagal lyti
// sort turi grazinti 0 | 1 | -1
students.sort((a, b) => {
  return a.gender < b.gender ? 1 : -1;
});

students.sort((a, b) => {
  return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
});
students.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  if (a.name === b.name) return 0;
});

console.table(students, ['name', 'age', 'gender']);
