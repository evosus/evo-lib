// --------------------------------------
// UI MODULE
// --------------------------------------
var UserInterface = function() {

	riot.observable(this);
	var self = this, STATE = {};

	// INIT STATE
	self.initState = function(obj) {
		var route = Object.keys(obj)[0],
				STORED = self.getStore();
		// IF route in storage
		if(route && STORED) {
			// SET STATE route from storage
			STATE[route] = STORED[route];
			// TRIGGER state change
			self.stateChanged(route);
		// ELSE route not in storage
		} else {
			// SET STATE and SET STORE
			STATE[route] = obj[route];
			// SET store
			self.setStore(route);
		}
	};
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
		console.info("SET STORE: " + key);
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
			self.stateChanged(route);
		}

	};
	// EVENT HANDLERS
	self.on('UI_SET_STATE',function(req_obj) {
		self.setState(req_obj);
	});
	self.on('UI_INIT_STATE',function(req_obj) {
		self.initState(req_obj);
	});
};
