const express = require('express');
const usersRouter = require('./users.router');

const rootMapping = '/v1';
const usersMapping = '/users';

const routerManager = app => {
	const router = express.Router();

	app.use(rootMapping, router);
	router.use(usersMapping, usersRouter);
};

module.exports = routerManager;
