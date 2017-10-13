import route from 'riot-route';
import routes from 'client/system/routes.js';
//import reset from 'client/system/css/ui-reset.css';
import UserInterface from 'client/system/UI.js';
import reset from 'client/system/css/bootstrap-reboot.min.css';
import layout from 'client/system/css/ui-layout.css';
import theme from 'client/system/css/ui-theme.css';
import flexbox from 'client/system/css/ui-flexbox.css';
import mdi from 'lib/mdi/css/materialdesignicons.css';
var UI = new UserInterface();
RC.addStore(UI); // UI State Manager
route.start(true); // Start Router
