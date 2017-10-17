import route from 'riot-route';
/**
 * Root Route
 */
route('/',function() {
	Promise.all([
		import('client/system/tags/ui-select.tag.html'),
		import('client/system/tags/ui-button.tag.html'),
		import('client/system/tags/ui-icon.tag.html'),
		import('client/system/tags/ui-input.tag.html'),
		import('client/system/tags/ui-modal.tag.html'),
		import('client/system/tags/ui-toast.tag.html'),
		import('client/system/tags/nav-menu.tag.html'),
		import('client/app/app-template.tag.html'),
	]).then( () => {
		riot.mount('#appMount','app-template');
	}).catch( err => {
		console.trace(err);
	});
});
