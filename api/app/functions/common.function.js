module.exports.checkDataStore = async(params) => {
    return new Promise((resolve, reject) => {
        try {
            if ((params.store_name.length) && (params.store_desc.length) && (params.store_tel.length) && (params.store_address.length)) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            console.log(error);
            reject({
                statusCode: '500',
                message: 'Internal Server Error'
            });
        }
    });
};


module.exports.checkDataProduct = async(params) => {
    return new Promise((resolve, reject) => {
        try {
            if ((params.product_category_type.length) && (params.product_category_name.length) &&
                (params.product_name.length) && (params.product_category_desc.length) &&
                (params.product_desc.length) && (params.product_price.length) && (params.product_unit.length)) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            console.log(error);
            reject({
                statusCode: '500',
                message: 'Internal Server Error'
            });
        }
    });
};