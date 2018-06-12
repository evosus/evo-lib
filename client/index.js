import route from 'riot-route';
import routes from 'client/system/routes.js';
/*
import reset from 'client/system/css/bootstrap-reboot.min.css';
import layout from 'client/system/css/ui-layout.css';
import theme from 'client/system/css/ui-theme.css';
import flexbox from 'client/system/css/ui-flexbox.css';
import mdi from 'lib/mdi/css/materialdesignicons.css';
*/
Promise.all([
	import('client/system/ui/screens/base-ui.tag.html')
]).then( () => {
	riot.mount('#base','base-ui');
	route.start(true);
}).catch( err => {
	console.trace(err);
});
