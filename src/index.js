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
	riot.mixin('IO',IO); // UI Events
	riot.mixin('GF',GF,true); // Global Functions
	route.start(true); // Start Router
});
