#!/usr/bin/env mode

import minimist from 'minimist'
//import * as cli from './lib/a03-jusurkin3/bin/cli.js'
import { roll } from '../lib/a03-jusurkin3/lib/roll.js'

const args = minimist(process.argv.slice(2))

import express from 'express'
const app = express()
const port = args.port

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res) => {
  res.send('200 OK');
})

app.get('/app/roll/', (req, res) => {
  res.send(roll(6, 2, 1))
})

app.get('/app/roll/:sides', (req, res) => {
  res.send(roll(req.params.sides, 2, 1))
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
  res.send(roll(req.params.sides, req.params.dice, 1))
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
  res.send(roll(req.params.sides, req.params.dice, req.params.rolls))
})

app.listen(port, () => {
  console.log("Listening on port " + port)
})
