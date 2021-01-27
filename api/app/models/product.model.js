const mongo = require('../../config/mongdb');
const ObjectId = require('mongodb').ObjectId;
module.exports.createProduct = async(params) => {
    return new Promise((resolve, reject) => {
        try {
            const collection = mongo.db.collection('product');
            const data = {
                product_category_type: params.product_category_type,
                product_category_name: params.product_category_name,
                product_category_desc: params.product_category_desc,
                product_name: params.product_name,
                product_desc: params.product_desc,
                product_price: params.product_price,
                product_unit: params.product_unit,
            }
            collection.insertOne(data, function(err, res) {
                if (!err) {
                    resolve({
                        statusCode: "200",
                        message: "OK",
                    });
                } else {
                    reject({
                        statusCode: '500',
                        message: 'Internal Server Error'
                    });
                }
            })
        } catch (error) {
            reject({
                statusCode: '501',
                message: 'Not Implemented'
            });
        }

    });
};

module.exports.fetchDataProduct = async() => {
    return new Promise((resolve, reject) => {
        try {
            const collection = mongo.db.collection('product');
            const query = [{
                $sort: {
                    _id: -1
                }
            }]
            collection.aggregate(query).toArray((err, res) => {
                if (!err) {
                    if (res.length) {
                        resolve({
                            statusCode: "200",
                            message: "OK",
                            data: res
                        });
                    } else {
                        resolve({
                            statusCode: "200",
                            message: "OK",
                            data: []
                        });
                    }
                } else {
                    reject({
                        statusCode: '500',
                        message: 'Internal Server Error'
                    });
                }
            })
        } catch (error) {
            reject({
                statusCode: '501',
                message: 'Not Implemented'
            });
        }

    });
};

module.exports.updateProduct = async(params) => {
    return new Promise((resolve, reject) => {
        try {
            const collection = mongo.db.collection('product');
            const query = {
                _id: ObjectId(params._id)
            }
            const data = {
                $set: {
                    product_category_type: params.product_category_type,
                    product_category_name: params.product_category_name,
                    product_category_desc: params.product_category_desc,
                    product_name: params.product_name,
                    product_desc: params.product_desc,
                    product_price: params.product_price,
                    product_unit: params.product_unit,
                }
            }
            collection.updateOne(query, data, function(err, res) {
                if (!err) {
                    resolve({
                        statusCode: "200",
                        message: "OK",
                    });
                } else {
                    reject({
                        statusCode: '500',
                        message: 'Internal Server Error'
                    });
                }
            })
        } catch (error) {
            console.log(error);
            reject({
                statusCode: '501',
                message: 'Not Implemented'
            });
        }

    });
};

module.exports.deleteProduct = async(params) => {
    return new Promise((resolve, reject) => {
        try {
            const collection = mongo.db.collection('product');
            const query = {
                _id: ObjectId(params._id)
            }
            collection.deleteOne(query, function(err, res) {
                if (!err) {
                    resolve({
                        statusCode: "200",
                        message: "OK",
                    });
                } else {
                    reject({
                        statusCode: '500',
                        message: 'Internal Server Error'
                    });
                }
            })
        } catch (error) {
            reject({
                statusCode: '501',
                message: 'Not Implemented'
            });
        }
    });
};