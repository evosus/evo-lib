// --------------------------------------
// DEFAULT ROUTE
// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
route('/', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','list-template');
	});
});
