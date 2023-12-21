const path = require('path');

module.exports = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, '../views/index.ejs'), {
            title: "HOME",
            isLogged: false
        });   
    },
    contact: (req, res) => res.send('Pagina de contacto  desde controller'),
    about: (req, res) => res.send('Página Sobre Nosotros desde controller'),
    faqs: (req, res) => res.send('Página preguntas frecuentes de controller')
};