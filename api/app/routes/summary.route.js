module.exports = (app) => {
    const controller = require('../controllers/summary.controller');
    app.post('/fetch_summary', controller.dataSummary);
}