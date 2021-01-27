const mongo = require('../../config/mongdb');
const ObjectId = require('mongodb').ObjectId;
module.exports.createStore = async(params) => {
    return new Promise((resolve, reject) => {
        try {
            const collection = mongo.db.collection('store');
            const data = {
                store_name: params.store_name,
                store_desc: params.store_desc,
                store_tel: params.store_tel,
                store_address: params.store_address,
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

module.exports.fetchDataStore = async() => {
    return new Promise((resolve, reject) => {
        try {
            const collection = mongo.db.collection('store');
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

module.exports.updateStore = async(params) => {
    return new Promise((resolve, reject) => {
        try {
            const collection = mongo.db.collection('store');
            const query = {
                _id: ObjectId(params._id)
            }
            const data = {
                $set: {
                    store_name: params.store_name,
                    store_desc: params.store_desc,
                    store_tel: params.store_tel,
                    store_address: params.store_address,
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
            reject({
                statusCode: '501',
                message: 'Not Implemented'
            });
        }

    });
};


module.exports.deleteStore = async(params) => {
    return new Promise((resolve, reject) => {
        try {
            const collection = mongo.db.collection('store');
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