// Задание на урок:
'use strict';
/* 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы */

/* 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB. */

/* 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы посмотрели?', '');
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы посмотрели?');
        }
    },
    rememberMyFilms: function() {
        let    a = '',
               b = '';
        for (let i = 0; i < 2; i++) {
            /*let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a <=50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            } */
            do {
                //a = '';
                a = prompt('Один из последних просмотренных фильмов?', '');
            } while ((a == '') || a == null || (a.length > 50));
            do {
                b = prompt('На сколько оцените его?', '');
            } while (b == '' || b == null); 
            personalMovieDB.movies[a] = b; 
        }
    },
    detectPersonalLevel: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        let cnt = personalMovieDB.count;
        if (cnt < 10) {
            alert('Просмотрено мало');
        } else if (cnt > 30) {
            alert('Просмотрено много');
        } else if (cnt >=10 && cnt <=30) {
            alert('Вы классический зритель');
        } else {
            alert('ошибка'); 
        }
    },
    showMyDB: function (hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
       /*  for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
                i--;
            }
        } */
        for (let i = 0; i < 1; i++) {
            const genres = prompt(`Введите Ваши любимые жанры через запятую`);
            if ( genres == null || genres == '') {
                i--;
            }
            personalMovieDB.genres = genres.split(', ');
        }
        personalMovieDB.genres.forEach( (item, i, arr) => console.log(`Любимый жанр #${i + 1} - это ${item}`) )
    }
};

personalMovieDB.writeYourGenres();