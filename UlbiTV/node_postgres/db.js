const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: '23',
    host: 'localhost',
    port: 5434,
    database: 'node_postgres'
});



module.exports = pool;