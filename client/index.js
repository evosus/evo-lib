import route from 'riot-route';
import routes from 'client/system/routes.js';
import UserInterface from 'client/system/UI.js';
import reset from 'client/system/css/bootstrap-reboot.min.css';
import layout from 'client/system/css/ui-layout.css';
import theme from 'client/system/css/ui-theme.css';
import flexbox from 'client/system/css/ui-flexbox.css';
import mdi from 'client/system/assets/fonts/ui-fonticon-mapping.css';
import animations from 'client/system/css/ui-animations.css';

var UI = new UserInterface();
RC.addStore(UI); // UI State Manager
Promise.all([
	import('client/system/tags/ui-banner.tag.html'),
	import('client/system/tags/ui-icon.tag.html'),
	import('client/system/tags/ui-modal.tag.html'),
	import('client/system/tags/ui-toast.tag.html'),
	import('client/system/tags/nav-menu.tag.html'),
	import('client/system/tags/global-nav.tag.html'),
	import('client/system/tags/ui-spinner.tag.html')
]).then( () => {
	riot.mount('#mainMount','global-nav');
	route.start(true); // Start Router
}).catch( err => {
	console.trace(err);
});
