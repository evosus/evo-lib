/**
 * @file base-routes.js
 * @description Handles common app routes.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
import route from 'riot-route';
import { spinnerSet } from 'client/system/routes/spinner-ctrl.js';
import 'client/system/routes/base-mounts.js';

/**
 * BASE
 */
route('/', () => {
	spinnerSet({ txt: 'ROOT', msg: 'Dead End' });
	console.log('ROOT');
});

/**
 * TEST
 */
route('/test', () => {
	spinnerSet({ txt: 'TEST', msg: 'POC: Named Route' });
	console.log('TEST');
});

/**
 * TEST 123
 */
route('/test/123', () => {
	spinnerSet({ txt: 'TEST/123', msg: 'POC: Named SubRoutes' });
	console.log('TEST');
});

/**
 * MODULE
 */
route('/*', (module) => {
	const m = module;
	spinnerSet({ txt: 'MODULE', msg: m });
	console.log(JSON.stringify({ 'MODULE': m },null,2));
});

/**
 * COLLECTION
 */
route('/search..', () => {
	const q = route.query();
	spinnerSet({ txt: 'QUERY', msg: JSON.stringify(q) });
	console.log(JSON.stringify({ 'QUERY': q },null,2));
});

/**
 * ITEM
 */
route('/*/*', (collection, id) => {
	const i = { collection: collection, id: id };
	spinnerSet({ txt: 'ITEM', msg: JSON.stringify(i) });
	console.log(JSON.stringify({ 'ITEM': i },null,2));
});

/**
 * ACTION
 */
route('/*/*/*', (collection, id, action) => {
	const a = { collection: collection, id: id, action: action };
	spinnerSet({ txt: 'ACTION', msg: JSON.stringify(a) });
	console.log(JSON.stringify({ 'ACTION': a },null,2));
});

/**
 * 404
 */
route('/..', () => {
	const t = 'Sorry, I do not recognize that route';
	spinnerSet({ txt: '404', msg: t });
	console.log(JSON.stringify({ '404': t },null,2));
});
