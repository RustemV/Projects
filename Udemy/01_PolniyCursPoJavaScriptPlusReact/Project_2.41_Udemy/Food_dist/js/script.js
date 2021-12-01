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
    const deadline    = '2021-12-10',
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

    function updateClock (endTime) {
        const t = getTimeRemaining(endTime);

        if (t.total<=0) {
            clearInterval(timerId);
        } else {
            elemDays.innerHTML    = t.days;
            elemHours.innerHTML   = t.hours;
            elemMinutes.innerHTML = t.minutes;
            elemSeconds.innerHTML = t.seconds;
        }
        
    }
    
    const timerId = setInterval(updateClock(deadline), 1000);

});