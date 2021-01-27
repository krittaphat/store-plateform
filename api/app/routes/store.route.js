module.exports = (app) => {
    const controller = require('../controllers/store.controller');
    app.post('/fetch_store', controller.fetchStore);
    app.post('/create_store', controller.createStore);
    app.post('/update_store', controller.updateStore);
    app.post('/delete_store', controller.deleteStore);
}