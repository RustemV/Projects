'use strict';

function first() {
    setTimeout(function() {
        console.log('1st');
    }, 500);
}

function second() {
    console.log('2nd');
}

first();
second();

/* вывод будет:
2nd
1st
т.к. в первой функции введена задержка */