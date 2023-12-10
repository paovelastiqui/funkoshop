//CREAR SERVIDOR- Se llama a la libreria que instalamos de Express
const express = require('express');

//Para ejecutar express se guarda la ejecucion en una variable
const app = express();

//Para llamar a las rutas que cree
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

//A express se le declara una carpeta de archivos estaticos
app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('./admin', adminRoutes);
app.use('./auth', authRoutes);

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));