#!/usr/bin/env mode

import minimist from 'minimist'
import { roll } from "./lib/roll.js"

const args = minimist(process.argv.slice(2))

import express from 'express'
const app = express()
const port = args.port

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get((req, res, next) => {
  res.status(404)
  res.send('404 NOT FOUND');
})

app.get('/app/', (req, res, next) => {
  res.status(200)
  res.send('200 OK');
})

app.post('/app/roll', (req, res, next) => {
  res.send(roll(6, 2, 1))
})

app.post('/app/roll/:sides', (req, res, next) => {
  res.send(roll(parseInt(req.params.sides), 2, 1))
})

app.get('/app/roll/:sides/:dice', (req, res, next) => {
  res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1))
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
  res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)))
})

app.listen(port, () => {
  console.log("Listening on port " + port)
})
