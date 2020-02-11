const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const router = require('./router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/", router);

server.get('/', (req, res) => {
    res.status(200).json('Sanity check.Server running.');
});

module.exports = server;