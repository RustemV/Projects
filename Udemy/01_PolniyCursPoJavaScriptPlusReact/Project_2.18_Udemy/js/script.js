/* Задание на урок: */

'use strict';

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* 1) Первую часть задания повторить по уроку */

function getAnswHowManyFilms() {
    let getAnsw;
    do {
        //getAnsw = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        console.log(getAnsw == '');
        console.log(getAnsw == null);
        console.log(isNaN(getAnsw));
    } while ((getAnsw == '') || (getAnsw == null) || (isNaN(getAnsw)));
    //console.log(getAnsw);
    return getAnsw;
}
console.log(getAnswHowManyFilms());

//personalMovieDB.count = getAnswHowManyFilms();
//console.log(personalMovieDB.count);

/* 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы */

/* 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres */

/* P.S. Функции вызывать не обязательно*/



/* 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла  */

/* let a, b;
for (let i = 1; i <= 2; i++) {
    a = prompt('Один из последних просмотренных фильмов?', '');
    b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB); */

/* 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять */

/* let aa, bb;
console.log(aa);

for (let i = 1; i <= 2; i++) {
    do {
        //aa = '';
        aa = prompt('Один из последних просмотренных фильмов?', '');
    } while ((aa == '') || aa == null || (aa.length > 50));
    do {
        //bb = '';
        bb = prompt('На сколько оцените его?', '');
    } while (bb == '' || bb == null)
    personalMovieDB.movies[aa] = bb;
}
console.log(personalMovieDB); */


/* 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" */

/* let personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let cnt = personalMovieDB.count;
if (cnt < 10) {
    alert('мало');
} else if (cnt > 30) {
    alert('много');
} else if (cnt >=10 && cnt <=30) {
    alert('классика');
} else {
    alert('ошибка'); 
} */


/* 4) Потренироваться и переписать цикл еще двумя способами */

// 4.1)

/* let aa, bb;

let i = 0;

do {
    do {
        //aa = '';
        aa = prompt('Один из последних просмотренных фильмов?', '');
    } while ((aa == '') || aa == null || (aa.length > 50));
    do {
        //bb = '';
        bb = prompt('На сколько оцените его?', '');
    } while (bb == '' || bb == null)
    personalMovieDB.movies[aa] = bb;
    i++;
} while (i < 2);

console.log(personalMovieDB);

// 4.2) 

let aa, bb;

let i = 0;

while (i < 2) {
    do {
        //aa = '';
        aa = prompt('Один из последних просмотренных фильмов?', '');
    } while ((aa == '') || aa == null || (aa.length > 50));
    do {
        //bb = '';
        bb = prompt('На сколько оцените его?', '');
    } while (bb == '' || bb == null)
    personalMovieDB.movies[aa] = bb;
    i++;
} 

console.log(personalMovieDB);

 */