// --------------------------------------
// INPUT OUTPUT MIXIN
// --------------------------------------
// Observable for tag IO control
// --------------------------------------
var IO  = {
	init: function(opts) {
		RC.on('UI_STATE_CHANGED',function(newState) {
			if(newState[opts.title]) {
				this.setOpts(newState[opts.title]);
			}
		});
		this.on('update',function() {
			updateRefs();	
		});
	},
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
