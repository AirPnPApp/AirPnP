const { Pool } = require('pg');

const PG_URI = 'postgres://wwnfzvgd:lH1s3pNEk6tvmTjBDgMz_WD5lWRbrtuN@drona.db.elephantsql.com:5432/wwnfzvgd';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback)
    }
}