const express = require('express');
const app = express();
const PORT = 5000;
const route = require('./routes');

app.use(express.json());

route(app);

app.listen(PORT,() => {
    console.log(`Sever is listening at ${PORT}`);
});