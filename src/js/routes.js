// --------------------------------------
// GUIDE CONTENTS
// --------------------------------------
route('/guide/contents', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-contents');
	});
});
// --------------------------------------
// GUIDE ANCHOR SCROLL
// --------------------------------------
route('/guide/anchor-scroll', function() {
	console.info("ANCHOR SCROLL ROUTE!");
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-anchor-scroll');
	});
});
// --------------------------------------
// GUIDE BREAKPOINTS
// --------------------------------------
route('/guide/breakpoints', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-breakpoints');
	});
});
// --------------------------------------
// GUIDE BUTTONS
// --------------------------------------
route('/guide/buttons', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-buttons');
	});
});
// --------------------------------------
// GUIDE CHARTS
// --------------------------------------
route('/guide/charts', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-charts');
	});
});
// --------------------------------------
// GUIDE FLEXBOX
// --------------------------------------
route('/guide/flexbox', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-flexbox');
	});
});
// --------------------------------------
// GUIDE FONTS
// --------------------------------------
route('/guide/fonts', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-fonts');
	});
});
// --------------------------------------
// GUIDE FORMS
// --------------------------------------
route('/guide/forms', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-forms');
	});
});
// --------------------------------------
// GUIDE MAPS
// --------------------------------------
route('/guide/maps', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-maps');
	});
});
// --------------------------------------
// GUIDE TABLES
// --------------------------------------
route('/guide/tables', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-tables');
	});
});
// --------------------------------------
// GUIDE THEME
// --------------------------------------
route('/guide/theme', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-theme');
	});
});
// --------------------------------------
// GUIDE LAYOUT LEFT
// --------------------------------------
route('/guide/layout-left', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-layouts-left');
	});
});
// --------------------------------------
// GUIDE LAYOUT RIGHT
// --------------------------------------
route('/guide/layout-right', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-layouts-right');
	});
});
// --------------------------------------
// GUIDE SVG
// --------------------------------------
route('/guide/svg', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-svg');
	});
});
// --------------------------------------
// GUIDE
// --------------------------------------
route('/guide', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','guide-contents');
	});
});
// --------------------------------------
// DEFAULT ROUTE
// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
route('/', function() {
	riot.compile(function() {
		riot.mount('#appMount','app-template');
		riot.mount('#rootMount','app-default');
	});
});
