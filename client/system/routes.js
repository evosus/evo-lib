import route from 'riot-route';
/**
 * Root Route
 */
route('/',function() {
	riot.mount('#appMount','ui-spinner');
	Promise.all([
		import('client/system/tags/ui-select.tag.html'),
		import('client/system/tags/ui-button.tag.html'),
		import('client/system/tags/ui-button-busy.tag.html'),
		import('client/system/tags/ui-input.tag.html'),
		import('client/system/tags/nav-bar.tag.html'),
		import('client/app/app-template.tag.html')
	]).then( () => {
		riot.mount('#appMount','app-template');
	}).catch( err => {
		console.trace(err);
	});
});


/** BEGIN ROUTE IMPORTS */

import 'client/app/tbd/tbd-routes.js';

/** END ROUTE IMPORTS */