// touchstart
// touchmove
// touchend

// touchenter
// touchleave

// touchcancel

'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('TouchStart');
        console.log(e.touches);  
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('TouchMove');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('TouchEnd');
    });

    box.addEventListener('touchenter', (e) => {
        e.preventDefault();

        console.log('TouchEnter');
    });

    box.addEventListener('touchleave', (e) => {
        e.preventDefault();

        console.log('TouchLeave');
    });





});