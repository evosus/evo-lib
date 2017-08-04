// --------------------------------------
// UI MODULE
// --------------------------------------
var UserInterface = function() {

	riot.observable(this);
	var self = this, STATE = {};

	// ERROR
	self.error = function(req_event_name,opt_payload) {
		console.error(req_event_name,opt_payload);
	}
	// STATE CHANGED
	self.stateChanged = function(key) {
		self.trigger(key + ':changed',STATE[key]);
	}
	// GET STORE
	self.getStore = function(key) {
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
		// IF STATE in storage
		if(stored = self.getStore()) {
			// IF KEY in stored
			if(stored[obj.key]) {
				// REPLACE STATE
				STATE = stored;
				self.stateChanged(obj.key);
			// ELSE KEY not in stored
			} else {
				STATE[obj.key] = obj;
				self.setStore(obj.key);
			}
		// ELSE STATE not in storage
		} else {
			// SET KEY ON STATE
			STATE[obj.key] = obj;
			self.setStore(obj.key);
		}
	};
	// EVENT HANDLERS
	self.on('UI_SET_STATE',function(req_obj) {
		self.setState(req_obj);
	});
};
