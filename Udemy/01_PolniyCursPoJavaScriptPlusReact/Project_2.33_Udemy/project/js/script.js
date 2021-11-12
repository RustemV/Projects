/* Задания на урок 30:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
 
    let movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const divPromoAdv   = document.querySelectorAll('.promo__adv img'),
        poster          = document.querySelector('.promo__bg'),
        divPromoGenre   = poster.querySelector(".promo__genre"),
        movieList       = document.querySelector('.promo__interactive-list'),
        addForm         = document.querySelector('form.add'),
        addInput        = addForm.querySelector('.adding__input'),
        checkbox        = addForm.querySelector('[type="checkbox]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();         //предотвращает перезагрузку страницы

        const newMovie = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {          // если в input не пустое значение

            movieDB.movies.push(newMovie);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        
        };

        event.target.reset;     // очищаем форму

    });
   
    const deleteAdv = (arr) => {
        arr.forEach( item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        divPromoGenre.textContent = 'Драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    };

    const sortArr = (arr) => {
        arr.sort();
    }; 
    
    function createMovieList(films, parent) {
        
        parent.innerHTML = '';

        films.forEach( (film, key) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${key + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

    };

    deleteAdv(divPromoAdv);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);


    /* ===========================================
    Задания на урок 33:

    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"

    5) Фильмы должны быть отсортированы по алфавиту */


    // 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    // новый фильм добавляется в список. Страница не должна перезагружаться.
    // Новый фильм должен добавляться в movieDB.movies.
    // Для получения доступа к значению input - обращаемся к нему как input.value;
    // P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.




});
