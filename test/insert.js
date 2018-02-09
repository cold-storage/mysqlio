#!/usr/bin/env node

'use strict';

const mysql = require('mysql');

const configPath = require('path').join(process.cwd(), './mysqlio-config');
const options = require(configPath).dest;
const connection = mysql.createConnection(options);

const rows = [];
const batchSize = 3;

function doFields(rows) {
  const keys = Object.keys(rows[0]);
  return '(' + keys.join(',') + ')';
}

function doValues(rows) {
  const vals = [];
  rows.forEach((r) => {
    const a = [];
    vals.push(a);
    Object.keys(r).forEach((k) => {
      a.push(r[k]);
    });
  });
  return vals;
}

/*
  Here we take and array of json like this.
  [ { Name: 'Fred', Age: 13 }, { Name: 'Linda', Age: 11 } ]
  and turn it into this.
  { fields: '(Name, Age)', values: [['Fred', 13],['Linda', 11]] }
*/
function transform(rows) {
  const result = {
    fields: doFields(rows),
    values: doValues(rows)
  };
  return result;
}

function insert(cb) {
  if (rows.length > 0) {
    const fieldValues = transform(rows);
    const sql = `insert into ${process.argv[2]} ${fieldValues.fields} values ?`;
    // console.log(sql);
    // console.log(fieldValues);
    connection.query(sql, [fieldValues.values], (err) => {
      rows.length = 0;
      cb(err);
    });
  } else {
    cb();
  }
}

require('csv-stream-transform')({
  transform(row, cb) {
    rows.push(row);
    if (rows.length === batchSize) {
      insert(cb);
    } else {
      cb();
    }
  },
  flush(cb) {
    insert((err) => {
      connection.end();
      cb(err);
    });
  }
});