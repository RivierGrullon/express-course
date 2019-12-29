const express = require('express');
const morgan = require('morgan');
const app = express();


//settings

app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views')
// console.log(__dirname + '/views')
app.set('view engine', 'ejs');
//middlewares

app.use(morgan('combined'));


//requiriendo rutas
const routes = require('./routes')
const routesApi = require('./routes-api')
// rutas
app.use(routes)
app.use('/api', routesApi)
app.get('*', (req,res) =>{
    res.end('Archivo no encontrado');
})

app.listen(3000,() =>{
    console.log('servidor funcionando');
    console.log('Nombre de la App: ', app.get('appName'));
});