import monitor from 'client/system/tags/ui-monitor.js';

let UI = () => {
	return {
		model: [],
		state: {},
		getOpts() { return this.opts },
		setOpts(opts,update) {
			this.opts = opts;
			if(!update) {
				this.update();
				return this;
			}
		}
	};
}
export default UI;
/*



import monitor from 'client/system/tags/ui-monitor.js';
let uiMixin = {
	model: [],
	init(opts) {
		let self = this;

		this.on('mount', () => {
			Object.keys(this.refs).forEach( ref => {
				this.model.push(ref);
			});
			console.info("TEMPLATE REFS COLLECTED");
			console.dir(this.model);
			this.state = monitor(this.model, (response) => {
				if(response.ref in self.refs) {
					self.refs[response.ref].setOpts(response.opts);
				}
			});
		});

	},
	getOpts() { return this.opts },
	setOpts(opts,update) {
		this.opts = opts;
		if(!update) {
			this.update();
			return this;
		}
	}
}
export default uiMixin;
*/
