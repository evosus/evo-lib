import route from 'riot-route';
// tbd redirect
route('/tbd', function() {
	Promise.all([
        import('client/system/tags/ui-select.tag.html'),
		import('client/system/tags/ui-button.tag.html'),
		import('client/system/tags/ui-button-busy.tag.html'),
		import('client/system/tags/ui-input.tag.html'),
		import('client/system/tags/nav-bar.tag.html'),
        import('client/app/tbd/templates/tbd-template.tag.html')
	]).then( () => {
		const props = {
			key: 'value of something'
		}
        riot.mount('#mainMount', 'tbd-template', props);
	});
});