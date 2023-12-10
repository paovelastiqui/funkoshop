const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    item: (req, res) => res.send(`Route for find and retrive a product from the ID: ${req.params.id}`),
    add: (req, res) => res.send('Route for add the current item to the shop cart'),
    cart: (req, res) => res.send('Route for cart View'),
    checkout: (req, res) => res.send('Route for got to checkout page')
};

module.exports = shopControllers;