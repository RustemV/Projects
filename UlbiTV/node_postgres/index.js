const express = require('express');
const userRouter = require('./routes/user.routes');
const PORT = process.env.PORT || 8090;

const app = express();

// app.get('/', (req, res) => {
//     res.send('HELLO POSTGRES + NODEJS@@ <br> new line new line!!!');
// });


app.listen(PORT, () => console.log(`server started on port ${PORT}`));

