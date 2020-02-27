const express = require('express');

const session = require('express-session')

const KnexStore = require("connect-session-knex")(session);

const server = express();

const apiRouter = require('./api/api_router');
const knex = require("./dbConfig/dbConfig");

const sessionConfig = {
  name: "THE COOKIE MONSTER",
  secret: "keep it secret, keep it safe!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true,
  },
  store: new KnexStore({
    knex,
    tablename: "sessions",
    createtable: true,// whether tble should be created automasticlly
    sidfieldname: "sid", //name of tabble
    clearInterval: 1000 * 60
  }),
} 

server.use(express.json());

server.use(session(sessionConfig))

server.use('/api', apiRouter);

/*server.get('/cool', (req, res) => {
    console.log(req.session)
})*/

module.exports = server;

