const path = require('path');

module.exports = {
    admin: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: "ADMIN",
            isLogged: false
        });
    },
    createView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: "CREATE",
            isLogged: false
        });
    },
    createPost: (req, res) => res.send("post Crear Producto"),
    editView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: "EDIT",
            isLogged: false
        });
    },
    editPut: (req, res) => res.send("post para Editar Producto por id"),
    deleteItem: (req, res) => res.send("borrar Producto por ID")
};