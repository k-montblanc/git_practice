const prompt = require('prompt-sync')({sigint: true});
const name = prompt('What is your name? ');
let arr1 = ['bawdy','brazen','churlish','distempered'];
let arr2 = ['bunch-backed','clay-brained','dog-hearted','empty-hearted'];
let arr3 = ['younker','whipster','waterfly','snipe'];
let word1 = arr1[Math.floor(Math.random() * 4)];
let word2 = arr2[Math.floor(Math.random() * 4)];
let word3 = arr3[Math.floor(Math.random() * 4)];

console.log(`${name}, thou art a ${word1} ${word2} ${word3} and I don't care who knows it!`);
   