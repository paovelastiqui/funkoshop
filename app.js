//CREAR SERVIDOR- Se llama a la libreria que instalamos de Express
const express = require('express');

//Para ejecutar express se guarda la ejecucion en una variable
const app = express();

//A express se le declara una carpeta de archivos estaticos
app.use(express.static('public'));

app.get('/ping', (req, res) => res.send('pong'));

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));