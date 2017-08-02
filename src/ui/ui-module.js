// --------------------------------------
// UI MODULE
// --------------------------------------
var UserInterface = function() {
	// OBSERVABLE
	riot.observable(this);
	// VARS
	var self = this,
			STATE = {};
	// ERROR
	self.error = function(req_event_name,opt_payload) {
		console.error(req_event_name,opt_payload);
	}
	// STATE CHANGED
	self.stateChanged = function(req_key) {
		//console.log(req_key);
		//console.dir(STATE);
		localStorage.setItem('STATE',JSON.stringify(STATE));
		self.trigger('UI_STATE_CHANGED',{ [req_key]:STATE[req_key] });
	}
	// SET STATE
	self.setState = function(req_key,req_state) {
		if(!STATE[req_key]) {
			STATE[req_key] = req_state;
		} else {
			Object.keys(req_state).forEach(function(key) {
				STATE[req_key][key] = req_state[key];
			});
		}
		self.stateChanged(req_key);
	};
	// INIT STATE
	self.initState = function(opt_state) {
		var newState = opt_state ? opt_state : JSON.parse(localStorage.getItem('STATE')) || {};
		self.trigger('UI_SET_STATE',newState);
	};
	// GET STATE
	self.getState = function(req_key) {
		if(STATE[req_key]) {
			self.trigger('UI_RETURN_STATE:' + req_key,STATE[req_key]);
		}
	}
	// DELETE STATE
	self.deleteState = function(req_key) {
		if(STATE[req_key]) {
			STATE[req_key] = null;
			self.stateChanged(req_key);
		};
	}
	// PURGE ALL
	self.purgeAll = function() {
		localStorage.removeItem('STATE');
	}
	// EVENT HANDLERS
	self.on('UI_INIT_STATE',function(opt_state) {
		self.initState(opt_state);
	});
	self.on('UI_SET_STATE',function(req_obj) {
		if(key = Object.keys(req_obj)[0]) {
			self.setState(key,req_obj[key]);
		}
	});
	self.on('UI_GET_STATE',function(req_key) {
		req_key ? self.getState(req_key) : self.error('UI_GET_STATE',req_key);
	});
	self.on('UI_DELETE_STATE',function(req_key) {
		req_key ? self.deleteState(req_key) : self.error('UI_DELETE_STATE',req_key);
	});
	self.on('UI_PURGE_ALL',function() {
		self.purgeAll();
	});
};
