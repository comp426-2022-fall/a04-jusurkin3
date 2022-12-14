#!/usr/bin/env mode

import minimist from 'minimist'
import { roll } from "./lib/roll.js"

const args = minimist(process.argv.slice(2))

import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = args.port

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/app/', (req, res, next) => {
  res.status(200)
  res.send('200 OK');
})

app.use('/app/roll', (req, res, next) => {
  let sides = (typeof req.params.sides == 'undefined') ? 6 : parseInt(req.params.sides);
  let dice = (typeof req.params.dice == 'undefined') ? 2 : parseInt(req.params.dice);
  let rolls = (typeof req.params.rolls == 'undefined') ? 1 : parseInt(req.params.rolls);  

res.send(roll(sides, dice, rolls))
})

app.get('/app/roll/:sides', (req, res, next) => {
  res.send(roll(parseInt(req.params.sides), 2, 1))
})

app.get('/app/roll/:sides/:dice', (req, res, next) => {
  res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1))
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
  res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)))
})

app.use((req, res, next) => {
  res.status(404)
  res.send('404 NOT FOUND');
})

app.listen(port, () => {
  console.log("Listening on port " + port)
})
