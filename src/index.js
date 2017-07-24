// ----------------------------------------
// FIREBASE INIT
// ----------------------------------------
// Initialize Firebase below...
// ----------------------------------------
// =D
// ----------------------------------------
// PRELOAD TEMPLATE ARRAY
// ----------------------------------------
var preload = [
	{ template:'loading-spinner',url:'/ui/loading-spinner.html' },
	{ template:'nav-bar-icon',url:'/ui/nav-bar-icon.html' },
	{ template:'nav-bar-logo',url:'/ui/nav-bar-logo.html' },
	{ template:'nav-bar',url:'/ui/nav-bar.html' },
	{ template:'nav-menu',url:'/ui/nav-menu.html' },
	{ template:'subscreen-bar',url:'/ui/subscreen-bar.html' },
	{ template:'subtitle-bar',url:'/ui/subtitle-bar.html' },
	{ template:'tab-bar.html',url:'/ui/nav-bar.html' },
	{ template:'title-bar',url:'/ui/title-bar.html' },
	{ template:'ui-btn-icon',url:'/ui/ui-btn-icon.html' },
	{ template:'ui-btn-txt',url:'/ui/ui-btn-txt.html' },
	{ template:'ui-btn',url:'/ui/ui-btn.html' },
	{ template:'ui-checkbox',url:'/ui/ui-checkbox.html' },
	{ template:'ui-input',url:'/ui/ui-input.html' },
	{ template:'ui-list',url:'/ui/ui-list.html' },
	{ template:'ui-modal',url:'/ui/ui-modal.html' },
	{ template:'ui-select',url:'/ui/ui-select.html' }
]
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
	GF.mountArray(preload);
	// ----------------------------------------
	// START ROUTER
	// ----------------------------------------
	route.start(true); // Start Router
});
