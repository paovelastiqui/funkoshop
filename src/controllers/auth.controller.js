const path = require('path');

module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
            title: "LOGIN",
            isLogged: false
        });
    },
    doLogin: (req, res) => res.send("post para loguearse"),
    register: (req, res) => {
        res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
            title: "REGISTER",
            isLogged: false
        });
    },
    doRegister: (req, res) => res.send("post para registrarse"),
    logout: (req, res) => res.send("get cierre de sesion")
};