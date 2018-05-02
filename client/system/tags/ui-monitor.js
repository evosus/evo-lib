/**
 * @file ui-monitor.js
 * @description Provides model proxy for ui components.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
const someWrapper = (self) => {
	const monitor = (target, callback) => {
		const handler = {
			set: (target, ref, value) => {
				console.log("SET CALLED");
				target[ref] = value;
				callback({
					action: 'GET',
					status: 'success',
					ref: ref,
					opts: value
				});
				return true;
			}
		};
		return new Proxy(target, handler);
	}

	self.state = monitor(self.model, (response) => {
		console.log("MONITOR RESP:");
		console.dir(response);
		console.log("REFS:");
		console.dir(self.refs);
		if(response.ref in self.refs) {
			console.log("WOOHOO");
			self.refs[response.ref].setOpts(response.opts);
		}
	});
}
export default someWrapper;
