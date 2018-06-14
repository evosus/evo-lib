import route from 'riot-route';
// Customers redirect
route('/tbd', function() {
    //console.log('tbd route called')
	Promise.all([
        import('client/system/tags/ui-select.tag.html'),
		import('client/system/tags/ui-button.tag.html'),
		import('client/system/tags/ui-button-busy.tag.html'),
		import('client/system/tags/ui-input.tag.html'),
		import('client/system/tags/nav-bar.tag.html'),
        import('client/app/tbd/tbd-template.tag.html')
	]).then( () => {
        riot.mount('#mainMount', 'tbd-template');
        console.log('tbd test log')
	});
});