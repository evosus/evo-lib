/**
 * @file routes.js
 * @description Imports all route files;
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */

import route from 'riot-route';

route('/', () => {
	Promise.all([
		import('client/app/auth/templates/auth.tag.html')
	]).then( () => {
		riot.mount('#base','auth');
	}).catch( err => {
		console.trace(err);
	})
});
route('/my-account', () => {
	Promise.all([
		import('client/app/auth/templates/my-account.tag.html')
	]).then( () => {
		riot.mount('#base','my-account');
	}).catch( err => {
		console.trace(err);
	})
});
/** BEGIN ROUTE IMPORTS */






/** END ROUTE IMPORTS */


