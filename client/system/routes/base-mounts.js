/**
 * @file base-mounts.js
 * @description Handles mounting common app templates.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
import { spinnerSet } from 'client/system/routes/spinner-ctrl.js';

/**
 * MOUNT SEARCH
 * @param {object} query
 */
export function mountSearch(query) {

		Promise.all([

			import ('client/system/routes/templates/search-template.tag.html')

		]).then(() => {

			riot.mount('#mainMount','search-template',{ query:query });

		}).catch(err => { console.trace(err); });
}
