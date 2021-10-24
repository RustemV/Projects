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
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// Мой вариант
// const divPromoAdv = document.querySelector('.promo__adv');
// divPromoAdv.remove();

//Правильный вариант
const divPromoAdv = document.querySelectorAll('.promo__adv img');
divPromoAdv.forEach( item => {
    item.remove();
});


// 2) Изменить жанр фильма, поменять "комедия" на "драма"

//Мой вариант
// const divPromoGenreOld = document.querySelector(".promo__genre");
// const divPromoGenreNew = document.createElement('div');
// divPromoGenreNew.classList.add('promo__genre');
// divPromoGenreNew.textContent = 'ДРАМА';
// divPromoGenreOld.replaceWith(divPromoGenreNew);

//Правильный вариант
const poster = document.querySelector('.promo__bg');
const divPromoGenre = poster.querySelector(".promo__genre");
divPromoGenre.textContent = 'Драма';


// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

//Мой вариант
// const divPromoBg = document.querySelector('.promo__bg');
// divPromoBg.style.background = 'url("img/bg.jpg") top center/cover no-repeat';

//Правильный вариант
// poster.style.background = 'url("img/bg.jpg") top center/cover no-repeat';
// или
poster.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

//Мой вариант
// const li = document.querySelectorAll('.promo__interactive-item');

// movieDB.movies.sort();
// li.forEach( (item, key) => {
//     const liNew = document.createElement('li');
//     liNew.classList.add('promo__interactive-item');
//     liNew.textContent = movieDB.movies[key];
//     liNew.insertAdjacentHTML('beforeend', '<div class="delete"></div>');
//     console.log(liNew);
//     item.replaceWith(liNew);
// });
// - неправильно, т.к. количество тегов li может не совпадать с количеством фильмов в movies

//Правильный вариант
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach( (film, key) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${key + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// 5) Добавить нумерацию выведенных фильмов */
// - сделано в п.4