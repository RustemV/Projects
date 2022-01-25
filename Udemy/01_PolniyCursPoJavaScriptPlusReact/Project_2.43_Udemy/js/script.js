"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs        = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent  = document.querySelector('.tabheader__items');

    // скрыть все табы
    function hideTabsContent() {
        tabsContent.forEach (tabContent => {
            // tabContent.style.display = 'none';  вместо этого две след строки
            tabContent.classList.add('hide');
            tabContent.classList.remove('show', 'fade');
        });
        
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
        
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';  вместо этого две след строки
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide'); 
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, key) => {
                if (tab == target) {
                    hideTabsContent();
                    showTabContent(key);
                }
            }); 
        }
    
    });

    // Timer
    const deadline    = '2022-05-20',
          elemDays    = document.querySelector('#days'),
          elemHours   = document.querySelector('#hours'),
          elemMinutes = document.querySelector('#minutes'),
          elemSeconds = document.querySelector('#seconds');

    function getTimeRemaining(end) {
        const total   = Date.parse(end) - (new Date()),
              days    = Math.floor(total/1000/60/60/24),
              hours   = Math.floor(total/1000/60/60 % 24),
              minutes = Math.floor(total/1000/60 % 60),
              seconds = Math.floor(total/1000 % 60);
        return {
            'total'   : total,
            'days'    : days,
            'hours'   : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };

    }

    function to2digits(num) {   // функция приведения чисел к двухзначному виду
        if (Math.abs(num)<10) {
            num = `0${num}`;
        }
        return num;
    }

    function updateClock (endTime) {
        const timeRemaining = getTimeRemaining(endTime);

        if (timeRemaining.total<=0) {
            clearInterval(timerId);
        } else {
            elemDays.innerHTML    = to2digits(timeRemaining.days);
            elemHours.innerHTML   = to2digits(timeRemaining.hours);
            elemMinutes.innerHTML = to2digits(timeRemaining.minutes);
            elemSeconds.innerHTML = to2digits(timeRemaining.seconds);
        }
        
    }
    
    updateClock();  // первый вызов сразу устраняет появление значений из вёрстки при обновлении html-страницы
    const timerId = setInterval( () => updateClock(deadline), 1000);  // периодический вызов для обновления таймера на странице
    
    
    //Modal
    
    const   modalTrigger = document.querySelectorAll('[data-open_modal]'),
            modalForm = document.querySelector('.modal'),
            modalClosure = document.querySelector('[data-close_modal]');

    function openForm (form) {
        form.classList.add('show');
        form.classList.remove('hide');     
        document.body.style.overflow = 'hidden';
    }

    function closeForm(form) {
        form.classList.add('hide');
        form.classList.remove('show');  
        document.body.style.overflow = '';   
    }

    modalTrigger.forEach(trigger => {
        trigger.addEventListener('click', () => openForm(modalForm));
    });
    
    modalClosure.addEventListener('click', () => closeForm(modalForm));

    // Для закрытия модального окна при щелчке в поле вне окна (то есть в элемент с class="modal", само окно - элемент с class="modal__dialog")
    modalForm.addEventListener('click', (e) => {
        if (e.target === modalForm) {
            closeForm(modalForm);
        }
    });


});