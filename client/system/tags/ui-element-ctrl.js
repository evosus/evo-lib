/**
 * @file ui-element-ctrl.js
 * @description Provides reusable methods for ui components.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */

const ctrl = {
	/*
	 * OBSERVABLE
	 */
	obs: riot.observable(),
	/*
	 * GET OPTS
	 * @returns {object} this.opts
	 */
	getOpts() { return this.opts },
	/*
	 * SET OPTS
	 */
	setOpts(opts,preventUpdate) {

		this.opts = opts;

		if(!preventUpdate) {
			this.update();
			return this;
		}
	}
};
export default ctrl;
