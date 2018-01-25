const csvStringify = require('csv-stringify');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mysqlio',
  dateStrings: true,
  // stringifyObjects: true,
  supportBigNumbers: true
//  debug: true
});

connection.connect();

// connection.query('SELECT * from  person', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

connection.query('SELECT * from  person').stream().on('end', () => {
  connection.end();
}).pipe(csvStringify({
  header: true
})).pipe(process.stdout);