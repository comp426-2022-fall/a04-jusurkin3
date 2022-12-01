#!/usr/bin/env mode

import minimist from 'minimist'
//import * as cli from './lib/a03-jusurkin3/bin/cli.js'
//import { roll } from './lib/a03-jusurkin3/lib/roll.js'

const express = require('express');
const app = express()
const port = 5555;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res) => {
  res.send('200 OK');
})

app.listen(port, () => {
  console.log("Listening on port " + port)
})
