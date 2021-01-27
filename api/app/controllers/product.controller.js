const model = require('../models/product.model');
const check = require('../functions/common.function')

module.exports.createProduct = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    try {
        const checkData = await check.checkDataProduct(request.body);
        if (checkData) {
            await model.createProduct(request.body).then((result) => {
                if (result && result.statusCode == '200') {
                    response.send({
                        statusCode: "200",
                        message: "OK",
                    });
                } else {
                    response.send({
                        statusCode: "202",
                        message: "Accepted ",
                    });
                }
            }).catch((e) => {
                throw e
            });
        } else {
            response.send({
                statusCode: "400",
                message: "Invalid Parameter",
            });
        }
    } catch (error) {
        response.send({
            statusCode: '501',
            message: 'Not Implemented'
        });
    }
};

module.exports.fetchProduct = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    try {
        await model.fetchDataProduct().then((result) => {
            if (result && result.statusCode == '200') {
                response.send({
                    statusCode: "200",
                    message: "OK",
                    data: result.data
                });
            } else {
                response.send({
                    statusCode: "202",
                    message: "Accepted ",
                    data: []
                });
            }
        }).catch((e) => {
            throw e
        });
    } catch (error) {
        console.log(error);
        response.send({
            statusCode: '501',
            message: 'Not Implemented',
            data: [],
        });
    }
};

module.exports.updateProduct = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    try {
        const checkData = await check.checkDataProduct(request.body);
        if (checkData) {
            await model.updateProduct(request.body).then((result) => {
                if (result && result.statusCode == '200') {
                    response.send({
                        statusCode: "200",
                        message: "OK",
                    });
                } else {
                    response.send({
                        statusCode: "202",
                        message: "Accepted ",
                    });
                }
            }).catch((e) => {
                throw e
            });
        } else {
            response.send({
                statusCode: "400",
                message: "Invalid Parameter",
            });
        }
    } catch (error) {
        console.log(error);
        response.send({
            statusCode: '501',
            message: 'Not Implemented'
        });
    }
};

module.exports.deleteProduct = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    try {
        await model.deleteProduct(request.body).then((result) => {
                if (result && result.statusCode == "200") {
                    response.send({
                        statusCode: "200",
                        message: "OK",
                    });
                } else {
                    response.send({
                        statusCode: "202",
                        message: "Accepted ",
                    });
                }
            })
            .catch((e) => {
                throw e;
            });
    } catch (error) {
        console.log(error);
        response.send({
            statusCode: "501",
            message: "Not Implemented",
        });
    }
};