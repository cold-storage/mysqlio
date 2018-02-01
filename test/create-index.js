#!/usr/bin/env node

'use strict';

const mysql = require('mysql');

const configPath = require('path').join(process.cwd(), './mysqlio-config');
const options = require(configPath).dest;
const connection = mysql.createConnection(options);

const createIndex = require('fs').readFileSync('./test/create-index.sql', 'utf8');
const dropCreate = createIndex.split(';');
const drop = dropCreate[0];
const create = dropCreate[1];


connection.query(drop, (err, results, fields) => {
  if (err && !err.message.includes('ER_CANT_DROP_FIELD_OR_KEY')) {
    console.error(err.stack || err);
    process.exit(13);
  }
  console.log(results);
  console.log(fields);
  connection.query(create, (err, results, fields) => {
    if (err) {
      console.error(err.stack || err);
      process.exit(13);
    }
    console.log(results);
    console.log(fields);
    connection.end();
  });
});