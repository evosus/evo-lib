/**
 * @file base-routes.js
 * @description Handles common app routes.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
import route from 'riot-route';
import { acl } from 'client/system/acl.js';
import { spinnerSet } from 'client/system/tags/ui-spinner-set.js';
import {
	mountSearch,
	mountCreate,
	mountRead,
	mountUpdate,
	mountDelete,
	mountDeadEnd
} from 'client/system/crud/scripts/crud-mounts.js';

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
	let q = route.query(),
			s = { txt: 'QUERY', msg: JSON.stringify(q) },
			a = { id: 'userID', action: 'search', params:q },
			d = 'Unauthorized Access';
	spinnerSet(s);
	acl(a) ? mountSearch(q) : mountDeadEnd(d);
	console.log(JSON.stringify({ 'QUERY': q },null,2));
});

/**
 * ITEM
 */
route('/*/*', (collection, id) => {
	let i = { collection: collection, id: id },
			s = { txt: 'QUERY', msg: JSON.stringify(i) },
			a = { id: 'userID', action: 'read', params:q },
			d = 'Unauthorized Access';
	spinnerSet(s);
	acl(a) ? mountRead(i) : mountDeadEnd(d);
	console.log(JSON.stringify({ 'ITEM': i },null,2));
});

/**
 * ITEM ACTION
 */
route('/*/*/*', (collection, id, action) => {
	let i = { collection: collection, id: id, action: action },
			s = { txt: 'ACTION', msg: JSON.stringify(i) },
			a = { id: 'userID', action: action, params:i },
			d = 'Unauthorized Access';
	if(acl(a)) {
		/** Determine Action */
		switch(action) {
			case 'create': mountCreate(i); break;
			case 'read': mountRead(i); break;
			case 'update': mountUpdate(i); break;
			case 'delete': mountDelete(i); break;
			default: mountDeadEnd('Unknown Action:' + action); break;
		}
	} else {
		mountDeadEnd(d);
	}
	console.log(JSON.stringify({ 'ACTION': a },null,2));
});

/**
 * 404
 */
route('/..', () => {
	const t = 'Sorry, I do not recognize that route';
	spinnerSet({ txt: '404', msg: t });
	mountDeadEnd(t);
	console.log(JSON.stringify({ '404': t },null,2));
});
