import route from 'riot-route';
import routes from 'client/system/routes.js';
//import reset from 'client/system/css/ui-reset.css';
import UserInterface from 'client/system/UI.js';
import reset from 'client/system/css/bootstrap-reboot.min.css';
import layout from 'client/system/css/ui-layout.css';
import theme from 'client/system/css/ui-theme.css';
import flexbox from 'client/system/css/ui-flexbox.css';
import mdi from 'lib/mdi/css/materialdesignicons.css';
import * as agGrid from 'ag-grid-enterprise'
agGrid.LicenseManager.setLicenseKey("Evosus_Inc._MultiApp_1Devs18_October_2018__MTUzOTgxNzIwMDAwMA==2bcbdbb7ac76ff439ab605160c553be2");

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
