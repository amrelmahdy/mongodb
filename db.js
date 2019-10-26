const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const uri = "mongodb://localhost:27017";
const dbName = 'flights';

let _db;

const initDb = callback => {
    if (_db) {
        console.log(`Database has already been initialized`);
        callback(null, _db);
    }
    MongoClient.connect(uri, { useUnifiedTopology: true } ).then((client) => {
        _db = client.db(dbName);
        callback(null, _db);
    }).catch(err => {
        callback(err);
    });
};

const getDb = () => {
    if (!_db) {
        throw Error("Database is not initialized")
    }
    return _db;
};

module.exports = {
    initDb,
    getDb
};