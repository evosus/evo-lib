import route from 'riot-route';
/**
 * Root Route
 */
route('/',function() {
	Promise.all([
		import('client/app/app-template.tag.html')
	]).then( () => {
		riot.mount('#appMount','app-template');
	}).catch( err => {
		console.trace(err);
	});
});
