//Valiullin R

window.addEventListener('DOMContentLoaded', () => {

    const   modalTrigger = document.querySelectorAll('[data-open_modal]'),
            modalForm = document.querySelector('[data-modal]'),
            modalImg = document.querySelector('.modal__content'),
            modalClosure = document.querySelectorAll('[data-close_modal'),
            shemes = document.querySelectorAll('.sheme');
    let activeSheme;

    function openForm(form, sheme) {
        sheme.classList.add('show');
        sheme.classList.remove('hide');  
        form.classList.add('show');
        form.classList.remove('hide');  
        document.body.style.overflow = 'hidden';
    };

    function closeForm(form, sheme) {
        sheme.classList.remove('show'); 
        sheme.classList.add('hide');
        form.classList.add('hide');
        form.classList.remove('show'); 
        document.body.style.overflow = '';
    }

    modalTrigger.forEach((trigger, key) => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target === modalTrigger[key]) {
                activeSheme = shemes[key];
                openForm(modalForm, activeSheme);
            }
        });
    });

    modalClosure.forEach(closure => {
        closure.addEventListener('click', () => closeForm(modalForm, activeSheme));
    });

    modalForm.addEventListener('click', (e) => {
        if (e.target != activeSheme) {
            closeForm(modalForm, activeSheme);
        }
    });



});