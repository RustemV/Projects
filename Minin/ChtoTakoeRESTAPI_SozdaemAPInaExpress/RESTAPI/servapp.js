// подключене Express
const express = require('express');
const path = require('path');

// создание объекта приложения через функцию 
const app = express();

// описываем папку client как статическую
app.use(express.static(path.resolve(__dirname, 'client')));
// обработка метода get по любым роутам
app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});





//запуск сервера
app.listen(3000, () => console.log(`Server has been started on port 3000...`));
