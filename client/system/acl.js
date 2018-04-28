/**
 * @file acl.js
 * @description Handles Access Control List authorization.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
export function acl(obj) {

	console.dir(obj);

	const allowed = [
		'search',
		'create',
		'read',
		'update',
		'delete',
		'module'
	]

	if(allowed.indexOf(obj.action) != -1) {
		console.log("ACCESS ALLOWED");
		return true;
	} else {
		console.log("ACCESS DENIED");
		return false;
	}
}
