// --------------------------------------
// INPUT OUTPUT MIXIN
// --------------------------------------
// Observable for tag IO control
// --------------------------------------
var IO  = {
	checkState: function(key) {
		if(STORED = JSON.parse(localStorage.getItem('STATE'))) {
			Object.assign(this.opts, STORED[key]);
			return STORED[key];
		} else {
			return false;
		}
	},
	getOpts: function() { return this.opts },
	setOpts: function (opts,update) {
		this.opts = opts;
		if(!update) {
			this.update();
			return this;
		}
	},
	updateRefs: function() {
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
