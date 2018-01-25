# mysqlio

Stream data in and out of MySQL.

**STATUS**

Unstable. Not tested. We will stay on version 0.0.x till things are at least
beta quality.

## Install

```sh
npm i -g mysqlio
```

## Enjoy

```
mysqlio-query   SQL         > some.csv

mysqlio-insert  TABLE_DEF   < some.csv
```

## Confguration

mysqlio will look for a file named `mysqlio-config.js` in the current directory.

**./mysqlio-config.js**

Options are documented here: https://github.com/mysqljs/mysql#connection-options

We have both `source` and `dest` because you may want to tream out of one DB and
into another. `mysqlio-query` uses `source` and `mysqlio-insert` uses `dest`.

```js
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
```
