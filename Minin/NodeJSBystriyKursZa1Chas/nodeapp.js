const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {

    // Вариант 1
    // if (request.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'home.html'), (err, pageContent) => {
    //         if (err) {
    //              throw err;
    //         }
    //         response
    //             .writeHead( 200, {
    //                 'Content-Type': 'text/html'
    //             })
    //             .end(pageContent);
    //     });
    // } else if (request.url === '/contact'){
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, pageContent) => {
    //         if (err) {
    //              throw err;
    //         }
    //         response
    //             .writeHead( 200, {
    //                 'Content-Type': 'text/html'
    //             })
    //             .end(pageContent);
    //     });
    // }
    // Конец Варианта 1

    // Вариант 2
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'home.html' : request.url);
    const exten = path.extname(filePath);

    if (!exten) {  // проверка наличия расширения в имени файла
        filePath += '.html';
    }

    fs.readFile(filePath, (err, pageContent) => {
        if (err) {      // если ошибка чтения html-файла, то передаем страницу 'error.html'
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, errContent) => {
                if (err) {      // если ошибка чтения файла 'error.html'
                    response
                        .writeHead('500')
                        .end('Error');
                } else {
                    response
                        .writeHead(200, {
                            'Content-Type': 'text/html'
                        })
                        .end(errContent); // передача содержимого 'error.html'
                }
            });
        } else {
            response
                .writeHead(200, {
                    'Content-Type': 'text/html'
                })
                .end(pageContent);
        }
    });
    // Конец Варианта 2

});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT} ...`);
});