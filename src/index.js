// ----------------------------------------
// FIREBASE INIT
// ----------------------------------------
// Initialize Firebase below...
// ----------------------------------------
// ----------------------------------------
// IO OBSERVABLE
// ----------------------------------------
// Input & Output for UI Events
// ----------------------------------------
var IO = riot.observable();
// ----------------------------------------
// RIOT INIT
// ----------------------------------------
riot.compile(function() {
	var UI = new UserInterface();
	RiotControl.addStore(UI); // UI State Manager
	RiotControl.on('UI_STATE_CHANGED',function(state) {
		console.info("UI_STATE_CHANGED");
		console.dir(state);
	});
	riot.mixin('IO',IO); // UI Events
	riot.mixin('GF',GF,true); // Global Functions
	route.start(true); // Start Router
});
