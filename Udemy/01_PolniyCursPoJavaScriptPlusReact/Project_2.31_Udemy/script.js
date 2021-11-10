const btn = document.querySelector('button');

// btn.onclick = function () {
//     alert('Clicked!');
// };

// btn.onclick = function () {
//     alert('Second clicked!');
// };

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i==1) {
        btn.removeEventListener('click', deleteElement);
    }
}

btn.addEventListener('click', deleteElement, {once: true});

const link = document.querySelector('a');

link.addEventListener('click', event => {
    event.preventDefault();
    console.log(event.target);
});

const btns = document.querySelectorAll('button');

btns.forEach( btn => {
    btn.addEventListener('click', функция-обработчик);
});
