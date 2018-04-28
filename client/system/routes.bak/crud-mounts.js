/**
 * @file crud-mounts.js
 * @description Handles mounting common app templates.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */

/**
 * SEARCH
 * @param {object} query
 */
export function Search(query) {
	Promise.all([
		import ('client/system/routes/templates/search-template.tag.html')
	]).then(() => {
		riot.mount('#mainMount','search-template',{ query: query });
	}).catch(err => { console.trace(err); });
}

/**
 * CREATE
 * @param {object} params
 */
export function Create(params) {
	Promise.all([
		import ('client/system/crud/templates/create-template.tag.html')
	]).then(() => {
		riot.mount('#mainMount','create-template',{ params: params });
	}).catch(err => { console.trace(err); });
}

/**
 * READ
 * @param {object} params
 */
export function mountRead(params) {
	Promise.all([
		import ('client/system/crud/templates/read-template.tag.html')
	]).then(() => {
		riot.mount('#mainMount','read-template',{ params: params });
	}).catch(err => { console.trace(err); });
}

/**
 * UPDATE
 * @param {object} params
 */
export function mountUpdate(params) {
	Promise.all([
		import ('client/system/crud/templates/update-template.tag.html')
	]).then(() => {
		riot.mount('#mainMount','update-template',{ params: params });
	}).catch(err => { console.trace(err); });
}

/**
 * DELETE
 * @param {object} params
 */
export function mountDelete(params) {
	Promise.all([
		import ('client/system/crud/templates/delete-template.tag.html')
	]).then(() => {
		riot.mount('#mainMount','delete-template',{ params: params });
	}).catch(err => { console.trace(err); });
}

/**
 * DEAD END
 * @param {string} msg
 */
export function DeadEnd(msg) {
	Promise.all([
		import ('client/system/routes/templates/dead-end-template.tag.html')
	]).then(() => {
		riot.mount('#mainMount','dead-end-template',{ msg: msg });
	}).catch(err => { console.trace(err); });
}
