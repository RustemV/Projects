'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

hearts.forEach( item => {
    item.style.backgroundColor = 'blue'
});

const div = document.createElement('div'); //в скобках название тега

const text = document.createTextNode('просто текст');
