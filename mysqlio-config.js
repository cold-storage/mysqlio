// exports = module.exports = require('../mysqlio-somecfg');

// Example config.
//
// We have both source and dest configs because you may be pulling data from one
// db and pushing to another.
//
// Generally this would be located at ../mysqlio-somecfg or some other path
// outside your project so it doesn't get checked into git. But since this is
// just a local Docker db, doesn't really matter.
//
// Configuration options are documented here:
// https://github.com/mysqljs/mysql#connection-options

exports = module.exports = {
  source: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'mysqlio',
    dateStrings: true,
    supportBigNumbers: true
  },
  dest: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'mysqlio',
    dateStrings: true,
    supportBigNumbers: true
  }
};