const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
    // timerId = setTimeout(logger, 2000);
    timerId = setInterval (logger, 500);
});

// clearInterval(timerId);

function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('Hello');
    i++;
}

let id = setTimeout(function log() {
    console.log('Hello');
    setTimeout(log, 500);
}, 500);