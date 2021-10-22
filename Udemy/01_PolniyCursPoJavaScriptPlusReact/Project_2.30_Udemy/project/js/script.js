/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "ЛоганS",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

const divPromoAdv = document.querySelector('.promo__adv');
divPromoAdv.remove();

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

const divPromoGenreOld = document.querySelector(".promo__genre");
const divPromoGenreNew = document.createElement('div');
divPromoGenreNew.classList.add('promo__genre');
divPromoGenreNew.textContent = 'ДРАМА';
divPromoGenreOld.replaceWith(divPromoGenreNew);

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

const divPromoBg = document.querySelector('.promo__bg');
divPromoBg.style.background = 'url("img/bg.jpg") top center/cover no-repeat';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

const li = document.querySelectorAll('.promo__interactive-item');

li.forEach( (item, key) => {
    const liNew = document.createElement('li');
    liNew.classList.add('promo__interactive-item');
    liNew.textContent = movieDB['movies'][key];
    liNew.insertAdjacentHTML('beforeend', '<div class="delete"></div>');
    console.log(liNew);
    item.replaceWith(liNew);
});


// 5) Добавить нумерацию выведенных фильмов */
