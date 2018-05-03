/**
 * @file ui-monitor.js
 * @description Provides model proxy for ui components.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
const uimon = (self) => {
	/**
		* MODEL
		* Stores ui props, proxied by state.
		* @type {array} model
		*/
	const model = [];	
	/**
		* ELEMENTS
		* Collection of element opts, keyed to their refs (riotjs refs).
		* @type {object} elements
		*/
	const elements = self.refs; 
	/**
		* MONITOR
		* Stores ui props, proxied by state.
		* @param { array | object | function } target
		* @param { object } response
		*/
	const monitor = (target, response) => {
		/**
			* HANDLER
			* Stores traps used by the proxy.
			*/
		const handler = {
			get: (target, ref) => {
				return ref in target ? target[ref] : {};
			},
			set: (target, ref, value) => {
				target[ref] = value;
				response({ ref: ref, opts: value });
				return true;
			}
		};
		return new Proxy(target, handler);
	}
	/**
		* STATE
		* Proxies model changes to set opts by ref.
		*/
	self.state = monitor(model, (response) => {
		if(response.ref && response.opts && response.ref in elements) {
			elements[response.ref].setOpts(response.opts);
		}
	});
	/**
		* RESTORE
		* Restores model from storage
		*/
	self.restore = () => {
		console.info("restore");
		console.dir(model);
	}
	/**
		* STORE
		* Proxies model changes to set opts by ref.
		*/
	self.store = () => {
		console.info("store");
		console.dir(model);
	}
}
export default uimon;
