const {Pool} = require("pg");
require("dotenv").config({path: 'dotenv.env'});

module.exports = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})