// ----------------------------------------
// FIREBASE INIT
// ----------------------------------------
// Initialize Firebase below...
// ----------------------------------------
// =D
// ----------------------------------------
// IO OBSERVABLE
// ----------------------------------------
// Input & Output for UI Events
// ----------------------------------------
var IO = riot.observable();
// ----------------------------------------
// RIOT STARTUP
// ----------------------------------------
var RC = RiotControl;
riot.compile(function() {
	// ----------------------------------------
	// REGISTER DATA STORES
	// ----------------------------------------
	var UI = new UserInterface();
	RC.addStore(UI); // UI State Manager
	// ----------------------------------------
	// REGISTER MIXINS
	// ----------------------------------------
	riot.mixin('GF',GF,true); // Global Functions
	// ----------------------------------------
	// START ROUTER
	// ----------------------------------------
	route.start(true); // Start Router
});
