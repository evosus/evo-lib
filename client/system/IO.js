// --------------------------------------
// INPUT OUTPUT MIXIN
// --------------------------------------
// Observable for tag IO control
// --------------------------------------
var IO  = {
	init(opts) {
		var self = this;
		RC.on('UI_STATE_CHANGED',function(newState) {
			if(newState[opts.title]) {
				self.setOpts(newState[opts.title]);
			}
		});
		this.on('update',function() {
			self.updateRefs();	
		});
	},
	getOpts() { return this.opts },
	setOpts(opts,update) {
		this.opts = opts;
		if(!update) {
			this.update();
			return this;
		}
	},
	checkState(key) {
		const STORED = JSON.parse(localStorage.getItem('STATE'));
		if(STORED) {
			Object.assign(this.opts, STORED[key]);
			return STORED[key];
		} else {
			return false;
		}
	},
	getState(opt_key) {
		var STORED = JSON.parse(localStorage.getItem('STATE'));
		if(STORED) {
			if(STORED[opt_key]) {
				return STORED[opt_key];
			}	else {
				return STORED;
			}
		} else {
			return false;
		}
	},
	setState() {
		if(this.opts && this.opts.title) {
			RC.trigger('UI_SET_STATE',{ [this.opts.title]:this.opts });
		}
	},
	updateRefs() {
		var self = this;
		Object.keys(self.refs).forEach(function(REF) {
			if(self.opts[REF]) {
				if(self.refs[REF].hasOwnProperty('setOpts')) {
					self.refs[REF].setOpts(self.opts[REF]);
				}
			}
		});
	}
};

export default IO;
