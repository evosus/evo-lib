// --------------------------------------
// UI MODULE
// --------------------------------------
var UserInterface = function() {

	riot.observable(this);
	var self = this, data = {}, state = {};

	dataChanged = function() {
		localStorage.setItem('data',data);
		self.trigger('UI_DATA_CHANGED',data);
	}

	stateChanged = function() {
		localStorage.setItem('state',state);
		self.trigger('UI_STATE_CHANGED',state);
	}

	self.on('UI_GET_DATA',function(key) {
		return key && data[key] ? data[key] : data;
	});
	self.on('UI_GET_STATE',function(key) {
		return key && state[key] ? state[key] : state;
	});
	self.on('UI_INIT',function(obj) {
		state = obj.state || localStorage.getItem('state');
		stateChanged();
		data = obj.data || localStorage.getItem('data');
		dataChanged();
	});
	self.on('UI_SET_DATA',function(obj) {
		data[obj.name] = obj.data;
		dataChanged();
	});
	self.on('UI_SET_STATE',function(newState) {
		for(var key in newState) {
			state[key] = newState[key];
		}
		stateChanged();
	});
	self.on('UI_PURGE_DATA',function(key) {
		key && data[key] ? localStorage.removeItem(data[key]) : localStorage.removeItem('data');
	});
	self.on('UI_PURGE_STATE',function(key) {
		key && state[key] ? localStorage.removeItem(state[key]) : localStorage.removeItem('state');
	});
	self.on('UI_PURGE_ALL',function() {
		localStorage.removeItem('state');
		stateChanged();
		localStorage.removeItem('data');
		dataChanged();
	});
};
