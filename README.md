# mysqlio

Stream data in and out of MySQL.

Linux pipes and Node.js streams are awesome for working with large amounts of
data and especially for ETL (Extract, Transform, Load).

If you need to extract and/or insert data into MySQL, this should do the trick.
It's super easy to write transformations in Node.js with transform streams.

**STATUS**

Unstable. Not tested. We will stay on version 0.0.x till things are at least
beta quality.

## Install

```sh
npm i -g mysqlio
```

## Enjoy

```
mio-query SQL > some.csv

mio-insert TABLE [DROP_CREATE] [INDEXES] < some.csv
```

For extended help, type the command name with no arguments.

## Confguration

mysqlio looks for a file named `mysqlio-config.js` in the current directory.

**./mysqlio-config.js**

There are lots more options than are shown below. See
https://github.com/mysqljs/mysql#connection-options for details.

We have both `source` and `dest` because you often want to stream out of one DB
and into another. `mio-query` uses `source` and `mio-insert` uses `dest`.

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

## mio-query

`mio-query` will run the specified `SQL` query and output the results to STDOUT.

`SQL` may be a file that contains SQL or it can be an actual SQL string like
'select Id from Account'.

## mio-insert

`mio-insert` will insert CSV data from STDIN into the specified `TABLE`. Column
names in the CSV must match exactly table field names.

`DROP_CREATE` is an optional path to a file of DDL statements to drop/create the
table. If specified this will be run before inserting the data.

`INDEXES` is an option path to a file of DDL statements to drop/create indexes.
If specified this will be run after inserting the data, since it's generally
faster to insert data and then create indexes.

## Misc

https://stackoverflow.com/questions/8899802/how-do-i-do-a-bulk-insert-in-mysql-using-node-js