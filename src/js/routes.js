// --------------------------------------
// GUIDE THEME
// --------------------------------------
route('/theme', function() {
	riot.compile(function() {
		var name = "Theme";
		riot.mount('#appMount','app-global-nav',{ title:name });
		riot.mount('#globalNavMount','app-module-nav',{ title:name,mdicon:"mdi mdi-palette",iconBar:true });
		riot.mount('#moduleNavMount','guide-theme');
	});
});
// --------------------------------------
// GUIDE NAVIGATION
// --------------------------------------
route('/navigation', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-global-nav');
		riot.mount('#globalNavMount','app-module-nav',{ title:"Navigation",mdicon:"mdi mdi-map-marker",iconBar:true });
		riot.mount('#moduleNavMount','guide-navigation');
	});
});
// --------------------------------------
// DEFAULT ROUTE
// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
route('/', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-global-nav');
		riot.mount('#globalNavMount','app-module-nav',{ title:"Home",mdicon:"mdi mdi-home",iconBar:true });
		riot.mount('#moduleNavMount','app-home');
	});
});
