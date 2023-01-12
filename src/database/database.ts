import config from "./../config";

// MYSQL DATABASE CONNECTION:

const mysql = require('promise-mysql')

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
});

export const getConnection = () => {
    return connection;
};

// postgreSQL DATABASE CONNECTION:

// const { Client } = require('pg')

// const connectionData = {
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password,
// }
  
// export const client = new Client(connectionData)