module.exports.dataSummary = async(request, response) => {
    response.setHeader("Content-Type", "application/json");
    let data = [];
    response.send({
        statusCode: "200",
        message: "OK",
        data: data,
    });
};