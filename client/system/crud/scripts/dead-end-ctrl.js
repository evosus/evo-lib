/**
 * @file dead-end-ctrl.js
 * @description Controller for dead-end-template.tag.html.
 * @author John Yee <johny@evosus.com>
 * @license ISC
 * @copyright 2018 Evosus, Inc
 */
import uimon from 'client/system/tags/ui-monitor.js';
/**
 * @name CTRL
 */
const ctrl = {
	/* COUNTER */
	counter: 0,
	/**
	 * INIT
	 */
	init: function(opts) {
		this.opts = opts;
		this.opts.title = "Login";
		this.initEvents();
	},
	/**
	 * INIT EVENTS
	 */
	initEvents: function initEvents() {
		this.on('mount', this.onMount);
		this.on('update', this.onUpdate);
		this.on('unmount', this.onUnmount);
	},
	/**
	 * ON MOUNT
	 */
	onMount() {
		/* 
		 * UIMON
		 * this.state provided by uimon
		 * setting an element's ref on state
		 * triggers an update of that element
		 * with the object you set:
		 */
		uimon(this);
		/** SET ui_button_a opts */
		this.state.ui_button_a = {
			css: 'ui-active',
			label: this.counter
		}
		/** SET ui_button_b opts */
		this.state.ui_button_b = {
			css: 'ui-invalid',
			label: this.counter
		}
		/** GET ui_button opts */
		console.dir({ ui_button_opts: this.state.ui_button });
	},
	/**
	 * ON UPDATE
	 */
	onUpdate() {
	},
	/**
	 * ON UNMOUNT
	 */
	onUnmount() {
	},
	/**
	 * INCREMENT
	 */
	increment() {
		this.counter++;
		let css, c = this.counter;
		c % 2 ? css = 'ui-red' : css = 'ui-green';
		// setting ui_button on state triggers update
		this.state.ui_button_a = { css: css, label: c }
		// GET ui_button opts
		let currentState = { ui_button_opts: this.state.ui_button };
		//console.log(JSON.stringify(currentState,null,2));
		//this.store();
	},
	/**
	 * DECREMENT
	 */
	decrement() {
		this.counter--;
		let css, c = this.counter;
		c % 2 ? css = 'ui-red' : css = 'ui-green';
		this.state.ui_button_b = { css: css, label: c }
	},
}
export default ctrl;
