var mysql = require('mysql');
const PORT = 3000;

var connection;
if (process.env.JAWSDB_URL) {
    // use jawsDB for 'production'
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // use local connection if not 'production'
    connection = mysql.createConnection({
        port: PORT,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgerdb'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('running on http://localhost:' + PORT);
});

module.exports = connection;