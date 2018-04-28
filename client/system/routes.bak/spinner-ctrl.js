/**
 * @file spinner-ctrl.js
 * @description Handles mounting and updating ui-spinner.tag.html.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
/**
 * SPINNER SET
 * @param {object} options
 */
export function spinnerSet(options) {

	let div = options.div || '#mainMount',
			tag = options.tag || 'ui-spinner',
			txt = options.txt || '',
			msg = options.msg || '...',
			spinner;

	if(!spinner) {

		Promise.all([

			import ('client/system/tags/ui-spinner.tag.html')

		]).then(() => {

			spinner = riot.mount( div, tag, { txt:txt, msg:msg });

		}).catch(err => { console.trace(err); });

	} else {

		spinner[0].setOpts(options);

	}
}
