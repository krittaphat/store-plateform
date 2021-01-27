const model = require("../models/store.model");
const check = require("../functions/common.function");

module.exports.createStore = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    try {
        const checkData = await check.checkDataStore(request.body);
        if (checkData) {
            await model.createStore(request.body).then((result) => {
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
        } else {
            response.send({
                statusCode: "400",
                message: "Invalid Parameter",
            });
        }
    } catch (error) {
        console.log(error);
        response.send({
            statusCode: "501",
            message: "Not Implemented",
        });
    }
};

module.exports.fetchStore = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    try {
        await model
            .fetchDataStore()
            .then((result) => {
                if (result && result.statusCode == "200") {
                    response.send({
                        statusCode: "200",
                        message: "OK",
                        data: result.data,
                    });
                } else {
                    response.send({
                        statusCode: "202",
                        message: "Accepted ",
                        data: [],
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
            data: [],
        });
    }
};


module.exports.updateStore = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    try {
        const checkData = await check.checkDataStore(request.body);
        if (checkData) {
            await model.updateStore(request.body).then((result) => {
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
        } else {
            response.send({
                statusCode: "400",
                message: "Invalid Parameter",
            });
        }
    } catch (error) {
        console.log(error);
        response.send({
            statusCode: "501",
            message: "Not Implemented",
        });
    }
};

module.exports.deleteStore = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    try {
        await model.deleteStore(request.body).then((result) => {
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