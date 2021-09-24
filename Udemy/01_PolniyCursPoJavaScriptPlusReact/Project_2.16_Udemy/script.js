'use strict';

//Function Declaration
function sum1(a, b) {
    return a + b;
}

let s = sum1(2, 4);
console.log(s);

//Function Expression
const sum2 = function (a, b) {
    return a + b;
};

s = sum2(2, 4);
console.log(s);

//Стрелочная функция
const sum3 = (a, b) => a + b;

s = sum3(2, 4);
console.log(s);

