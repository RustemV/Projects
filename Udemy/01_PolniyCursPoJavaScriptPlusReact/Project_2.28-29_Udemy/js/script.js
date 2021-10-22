'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

//box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

hearts.forEach( item => {
    item.style.backgroundColor = 'blue'
});

const div = document.createElement('div'); //в скобках название тега

// const text = document.createTextNode('просто текст');

div.classList.add('black');

document.body.append(div);

// wrapper.append(div);
// wrapper.prepend(div);

hearts[0].before(div);

hearts[0].after(div);

circles[0].remove();

hearts[0].replaceWith(circles[1]);

// div.innerHTML('Hello world!');

div.innerHTML = "<h1>Hello world!</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML("beforeend", "<h2>Hello!</h2>");

