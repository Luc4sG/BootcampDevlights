const express = require('express');
const app = express();


app.listen(3000, () => {
  console.log('Server on port 3000');
});

//Para servir un HTML 
app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/assets/test.html');
});

//Servidor estatico
app.use('/assets',express.static('assets'));


//Rutas
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About me");
});

app.get("/contact", (req, res) => {
  res.send("Contact me");
});


//Middleware a nivel de aplicacion - se ejecuta en todas las rutas
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
});

//Middleware a nivel de ruta - si se accede a la ruta /user se ejecuta el middleware
app.get('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}, function (req, res, next) {
  res.send('User Info')
});


// Grupo 4:
// const express= require('express')
// const app = express()
// app.use('/static', express.static(__dirname + '/public'));

// //definicion de un middleware nivel app

// const nivelApp = function(request,response, next) {
//     console.log('Ejecutando a nivel app')
//     next();
// }

// //definicion de un middleware nivel ruta

// const nivelRuta=function(request,response,next) {
//     console.log('peticion de tipo:' + request.method)
//     next();
// }

// app.use(nivelApp)

// app.get('/',nivelRuta, (req, res) => {
//     res.send('pagina de inicio')
// })


// app.listen(3000, function() {
//     console.log('iniciando servidor')
// })