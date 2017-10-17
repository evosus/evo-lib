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
	// GET STATE
	self.getState = function() {
		var STORED = JSON.parse(localStorage.getItem('STATE'));
		if(STORED) {
				return STORED;
			}	else {
				return false;
			}
		} else {
			return false;
		}
	}
	// GET STATE BY KEY
	self.getStateByKey = function(req_key) {
		if(req_key) {
			var STORED = JSON.parse(localStorage.getItem('STATE'));
			if(STORED) {
				if(STORED[req_key]) {
					return STORED[req_key];
				}	else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	// SET STORE
	self.setStore = function(key) {
		// IF stringify
		const val = JSON.stringify(STATE);
		if(val) {
			// SET STORAGE
			localStorage.setItem('STATE',val);
			self.stateChanged(key);
		}
	};
	// SET STATE
	self.setState = function(obj) {
		if(self.getState()) {
			STATE = self.getState();
		}
		var route = Object.keys(obj)[0];
		if(route) {
			STATE[route] = obj[route];
			self.setStore(route);
		}
	};
	// EVENT HANDLERS
	self.on('UI_SET_STATE',function(req_obj) {
		self.setState(req_obj);
	});
};

export default UserInterface;
