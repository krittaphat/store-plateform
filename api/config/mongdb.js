const ip = "mongodb+srv://admin:123456789a@codetesting.8tyoh.mongodb.net/codetestiing?retryWrites=true&w=majority"
const dbName = "codetestiing";
const MongoClient = require('mongodb').MongoClient;
module.exports.db = (callback) => {
	MongoClient.connect(ip, { useNewUrlParser: true, useUnifiedTopology: true },
		(err, dbs) => {
			if (err) {
				console.log(err);
				callback(false);
			} else {
				module.exports.db = dbs.db(dbName);
				callback(true);
			}
		})
}