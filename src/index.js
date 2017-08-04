// ----------------------------------------
// PRELOAD TEMPLATE ARRAY
// ----------------------------------------
var preload = [
	{ template:'nav-bar',url:'/nav/nav-bar.html' },
	{ template:'nav-bar-logo',url:'/nav/nav-bar-logo.html' },
	{ template:'nav-bar-form',url:'/nav/nav-bar-form.html' },
	{ template:'nav-bar-tabs',url:'/nav/nav-bar-tabs.html' },
	{ template:'nav-bar-icons',url:'/nav/nav-bar-icons.html' },
	{ template:'nav-menu',url:'/nav/nav-menu.html' },
	{ template:'ui-button',url:'/ui/ui-button.html' },
	{ template:'ui-checkbox',url:'/ui/ui-checkbox.html' },
	{ template:'ui-icon',url:'/ui/ui-icon.html' },
	{ template:'ui-input',url:'/ui/ui-input.html' },
	{ template:'ui-list',url:'/ui/ui-list.html' },
	{ template:'ui-modal',url:'/ui/ui-modal.html' },
	{ template:'ui-select',url:'/ui/ui-select.html' },
	{ template:'ui-spinner',url:'/ui/ui-spinner.html' },
	{ template:'ui-subtitle-bar',url:'/ui/ui-subtitle-bar.html' },
]
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
	// MOUNT PRELOAD ARRAY
	// ----------------------------------------
	GF.mountArray(preload);
	// ----------------------------------------
	// START ROUTER
	// ----------------------------------------
	route.start(true); // Start Router
});
