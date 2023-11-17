const { json } = require("body-parser");
const express = require("express");
const app = express();

//invocar al motor de plantilas
app.set('view engine', 'ejs');

//leer formulario
app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/', require('./router'));

app.listen(5000, () => {
    console.log("Servidor escuchando en http://localhost:5000");
});

