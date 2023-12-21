const path = require('path');
const { getAll } = require('../models/product.model');

const data = [
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras Coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura Coleccionable Pokemon",
    product_price: 1799.99,
    dues: 3,
    product_sku: "PK001001",
    img_front: "/multimedia/star-wars/bobbafeth-1.webp",
    img_back: "/multimedia/star-wars/bobbafeth-box.webp",
    },
    {
    product_id: 2,
    licence_name: "Pokemon",
    category_name: "Figuras Coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura Coleccionable Pokemon",
    product_price: 1799.99,
    dues: 3,
    product_sku: "PK001001",
    img_front: "/multimedia/star-wars/bobbafeth-1.webp",
    img_back: "/multimedia/star-wars/bobbafeth-box.webp",
    },
    {
    product_id: 3,
    licence_name: "Pokemon",
    category_name: "Figuras Coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura Coleccionable Pokemon",
    product_price: 1799.99,
    dues: 3,
    product_sku: "PK001001",
    img_front: "/multimedia/star-wars/bobbafeth-1.webp",
    img_back: "/multimedia/star-wars/bobbafeth-box.webp",
    },
    {
    product_id: 4,
    licence_name: "Pokemon",
    category_name: "Figuras Coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura Coleccionable Pokemon",
    product_price: 1799.99,
    dues: 3,
    product_sku: "PK001001",
    img_front: "/multimedia/star-wars/bobbafeth-1.webp",
    img_back: "/multimedia/star-wars/bobbafeth-box.webp",
    }
];

module.exports = {
    shop: async (req, res) => {

        const dbData = await getAll();

        console.log(dbData);

        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: "SHOP",
            isLogged: true,
            data
        });
    },
    item: (req, res) => {
        const itemId = req.params.id;
        const item = data.find(item => item.product_id == itemId);

        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "ITEM",
            isLogged: false,
            item
        });
    },
    add: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
            title: "CARRITO",
            isLogged: false
        });
    },
    checkout: (req, res) => res.send('Route for got to checkout page')
}