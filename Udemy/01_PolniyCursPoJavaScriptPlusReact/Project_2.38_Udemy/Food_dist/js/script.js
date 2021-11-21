"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

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

});