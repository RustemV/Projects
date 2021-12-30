'use strict';

const box = document.querySelector('.box');

// const width = box.clientWidth,
//     height = box.clientHeight;

// const width = box.offsetWidth,
//     height = box.offsetHeight;

const width = box.scrollWidth,
    height = box.scrollHeight;
    console.log(width, height);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // box.style.height = `${box.scrollHeight}px`;
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());