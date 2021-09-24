'use strict';

const arr = [2, 14, 26, 78, 10];

function compareNum(a, b) {
    return a - b;
}

arr.sort(compareNum);
console.log(arr);

arr.forEach(function(val, i, arr) {
    console.log(`${i}: ${val} входит в массив ${arr}`);
})



arr.pop(); 

arr.push(12);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}