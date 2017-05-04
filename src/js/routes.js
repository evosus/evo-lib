// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// It is assigned to GUIDE HOME
// --------------------------------------
// ROUTES
// --------------------------------------
// GUIDE BREAKPOINTS
// --------------------------------------
route('/breakpoints', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-global-nav');
		riot.mount('#globalNavMount','app-module-nav');
		riot.mount('#moduleNavMount','guide-breakpoints');
	});
});
// --------------------------------------
// GUIDE FORMS
// --------------------------------------
route('/forms', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-global-nav');
		riot.mount('#globalNavMount','app-module-nav');
		riot.mount('#subscreenNavMount','guide-forms');
	});
});
// --------------------------------------
// GUIDE LISTS
// --------------------------------------
route('/list', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-global-nav');
		riot.mount('#globalNavMount','app-module-nav');
		riot.mount('#moduleNavMount','guide-list');
	});
});
// --------------------------------------
// GUIDE NAVIGATION
// --------------------------------------
route('/navigation', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-global-nav');
		riot.mount('#globalNavMount','app-module-nav');
		riot.mount('#moduleNavMount','guide-navigation');
	});
});
// --------------------------------------
// GUIDE THEME
// --------------------------------------
route('/theme', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-global-nav');
		riot.mount('#globalNavMount','app-module-nav');
		riot.mount('#moduleNavMount','guide-theme');
	});
});
// --------------------------------------
// GUIDE HOME !!! DEFAULT ROUTE !!!
// --------------------------------------
route('/', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-global-nav');
		riot.mount('#globalNavMount','app-module-nav');
		riot.mount('#moduleNavMount','guide-home');
	});
});
