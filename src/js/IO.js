// --------------------------------------
// INPUT OUTPUT MIXIN
// --------------------------------------
// Observable for tag IO control
// --------------------------------------
var IO  = {
	checkState: function checkState(key) {
		const STORED = JSON.parse(localStorage.getItem('STATE'));
		if(STORED) {
			Object.assign(this.opts, STORED[key]);
			return STORED[key];
		} else {
			return false;
		}
	},
	getOpts: function getOpts() { return this.opts },
	setOpts: function setOpts(opts,update) {
		this.opts = opts;
		if(!update) {
			this.update();
			return this;
		}
	},
	setState: function setState() {
		if(this.opts && this.opts.title) {
			RC.trigger('UI_SET_STATE',{ [this.opts.title]:this.opts });
		}
	},
	updateRefs: function updateRefs() {
		Object.keys(this.refs).forEach(function(REF) {
			if(this.opts[REF]) {
				if(this.refs[REF].hasOwnProperty('setOpts')) {
					this.refs[REF].setOpts(this.opts[REF]);
				}
			}
		});
	}
};

export default IO;
