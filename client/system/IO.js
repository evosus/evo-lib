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
	obs:riot.observable(),
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
		if(STORED && STORED[key]) {
			Object.assign(this.opts, STORED[key]);
			return STORED[key];
		} else {
			return false;
		}
	},
	deleteState(key) {
		const STORED = JSON.parse(localStorage.getItem('STATE'));
		if(STORED && STORED[key]) {
			delete STORED[key];	
			const val = JSON.stringify(STORED);
			if(val) {
				// SET STORAGE
				localStorage.setItem('STATE',val);
				return STORED;
			} else {
				return false;
			}
		} else {
			return false;
		}
	},
	getState() {
		var STORED = JSON.parse(localStorage.getItem('STATE'));
		if(STORED) {
			return STORED;
		} else {
			return false;
		}
	},
	getStateByKey(req_key) {
		if(req_key) {
			var STORED = JSON.parse(localStorage.getItem('STATE'));
			if(STORED && STORED[req_key]) {
				return STORED[req_key];
			} else {
				return false;
			}
		} else {
			return false;
		}
	},
	setState(opt_key,opt_opts) {
		let opts = opt_opts !== undefined ? opt_opts : this.opts;
		let key;
		if(opt_key) {
			key = opt_key;
		}	 else if(this.opts && this.opts.title) {
			key = this.opts.title;
		}
		if(opts !== undefined && key) {
			RC.trigger('UI_SET_STATE',{ [key]:opts });
		} else {
			return false;
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
	},
	goBack() {
		window.history.back();
		console.log('goBack')
	}
};

export default IO;
