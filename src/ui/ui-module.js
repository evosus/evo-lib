// --------------------------------------
// UI MODULE
// --------------------------------------
var UserInterface = function() {
	// OBSERVABLE
	riot.observable(this);
	// SELF & STATE
	var self = this, STATE = {};
	// ERROR
	self.error = function(req_event_name,opt_payload) {
		console.error(req_event_name,opt_payload);
	}
	// STATE CHANGED
	self.stateChanged = function(key) {
		self.trigger('UI_STATE_CHANGED',{ [key]:STATE[key] });
	}
	// GET STORE
	self.getStore = function() {
		//IF STATE in storage
		if(stored = JSON.parse(localStorage.getItem('STATE'))) {
			return stored;
		} else {
			return false;
		}
	}
	// SET STORE
	self.setStore = function(key) {
		// IF stringify
		if(val = JSON.stringify(STATE)) {
			// SET STORAGE
			localStorage.setItem('STATE',val);
			self.stateChanged(key);
		}
	};
	// SET STATE
	self.setState = function(obj) {
		var route = Object.keys(obj)[0];
		if(route) {
			STATE[route] = obj[route];
			self.setStore(obj[route]);
		}
	};
	// EVENT HANDLERS
	self.on('UI_SET_STATE',function(req_obj) {
		self.setState(req_obj);
	});
};
