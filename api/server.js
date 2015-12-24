import {name} from './package.json';
import express from 'express';
import routes from './routes';

let app = express()
	.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
  	next();
	})
	.use(routes);

let server = app.listen('2016', '0.0.0.0', () => {
	console.log(`${name} started ${JSON.stringify(server.address())}`)
});