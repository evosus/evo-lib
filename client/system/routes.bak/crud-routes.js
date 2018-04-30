/**
 * @file base-routes.js
 * @description Handles common app routes.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
import route from 'riot-route';
import { spinnerSet } from 'client/system/routes/spinner-ctrl.js';
import {
	mountDeadEnd,
	mountItem,
	mountItemAction,
	mountSearch
} from 'client/system/routes/base-mounts.js';

/**
 * BASE
 */
route('/', () => {
	spinnerSet({ txt: 'ROOT', msg: 'Dead End' });
	mountDeadEnd('Sorry, nothing here.');
	console.log('ROOT');
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
 * SEARCH
 */
route('/search..', () => {
	const q = route.query();
	spinnerSet({ txt: 'QUERY', msg: JSON.stringify(q) });
	mountSearch(q);
	console.log(JSON.stringify({ 'QUERY': q },null,2));
});

/**
 * ITEM
 */
route('/*/*', (collection, id) => {
	const i = { collection: collection, id: id };
	spinnerSet({ txt: 'ITEM', msg: JSON.stringify(i) });
	mountItem(i);
	console.log(JSON.stringify({ 'ITEM': i },null,2));
});

/**
 * ITEM ACTION
 */
route('/*/*/*', (collection, id, action) => {
	const a = { collection: collection, id: id, action: action };
	spinnerSet({ txt: 'ACTION', msg: JSON.stringify(a) });
	/** Determine Action */
	switch(action) {
		case 'create': Create(params); break;
		case 'read': Read(params); break;
		case 'update': Update(params); break;
		case 'delete': Delete(params); break;
		default: Unknown(params); break;
	}
	mountItemAction(a);
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