// --------------------------------------
// UI MODULE
// --------------------------------------
var UserInterface = function() {
	riot.observable(this);
	var self = this;
	var state = {
		banner:"",
		iconBar:"",
		mdicon:"",
		modal:"",
		navMenu:"",
		route:"",
		tab:"",
		title:"",
		toast:""
	}
	// --------------------------------------
	// GETTERS
	// --------------------------------------
	getState = function() { return self.state };
	// --------------------------------------
	// STATE CHANGED
	// --------------------------------------
	stateChanged = function() {
		self.trigger('UI_STATE_CHANGED',state);
		console.dir(state);
	}
	// --------------------------------------
	// TOGGLES
	// --------------------------------------
	self.on('UI_TOGGLE_NAV_MENU',function() {
		state.navMenu ? state.navMenu = false : state.navMenu = true ;
		stateChanged();
	});
	// --------------------------------------
	// SETTERS
	// --------------------------------------
	self.on('UI_SET_BANNER',function(banner) {
		state.banner = banner;
		stateChanged();
	});
	self.on('UI_SET_ICON_BAR',function(iconBar) {
		state.iconBar = iconBar;
		stateChanged();
	});
	self.on('UI_SET_MODAL',function(modal) {
		state.modal = modal;
		stateChanged();
	});
	self.on('UI_SET_TAB',function(tab) {
		state.tab = tab;
		stateChanged();
	});
	self.on('UI_SET_TITLE',function(title) {
		state.title = title;
		stateChanged();
	});
	self.on('UI_SET_TOAST',function(toast) {
		state.toast = toast;
		stateChanged();
	});
	self.on('UI_SET_STATE',function(newState) {
		for(var key in newState) {
			if(state.hasOwnProperty(key)) {
				state[key] = newState[key];
			}
		}
		stateChanged();
	});
};
