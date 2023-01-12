"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
var config_1 = require("./../config");
// MYSQL DATABASE CONNECTION:
var mysql = require('promise-mysql');
var connection = mysql.createConnection({
    host: config_1.default.host,
    database: config_1.default.database,
    user: config_1.default.user,
    password: config_1.default.password,
});
var getConnection = function () {
    return connection;
};
exports.getConnection = getConnection;
// postgreSQL DATABASE CONNECTION:
// const { Client } = require('pg')
// const connectionData = {
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password,
// }
// export const client = new Client(connectionData)
//# sourceMappingURL=database.js.map