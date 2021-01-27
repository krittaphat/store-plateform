module.exports = (app) => {
    const controller = require('../controllers/product.controller');
    app.post('/fetch_product', controller.fetchProduct);
    app.post('/create_product', controller.createProduct);
    app.post('/update_product', controller.updateProduct);
    app.post('/delete_product', controller.deleteProduct);
}