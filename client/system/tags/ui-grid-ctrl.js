import * as agGrid from 'ag-grid'
import 'ag-grid-enterprise'

const ctrl = {
	/**
	 * Riot init method
	 * @param  {Object}     opts [Riot opts]
	 * @return {Undefined}
	 */
	init(opts) {
        this.opts = opts
        ctrl.self = this
        this.initEvents()
	},
	/**
	 * Initialize the events this component needs to respond to.
	 * @return {[type]} [description]
	 */
	initEvents() {
		this.on("mount", this.onMount)
		this.on("unmount", this.onUnMount)
	},
	/**
	 * Riot unmount event handler
	 * Removes observable event handlers
	 */
	onUnMount() {
		if (this.opts.observable) {
			let OBS = IO.default.obs;
			OBS.off(this.opts.observable, this.onListResponse())
		}
	},
	/**
	 * Riot mount event handler
	 * Sets initial state, updates refs and inits the grid
	 * @return {Undefined}
	 */
	onMount() {
        // set up observable
		if (this.opts.observable) {
			let OBS = IO.default.obs;
			OBS.on(this.opts.observable, (e) => { this.onListResponse(e) })
		}
		// UPDATE
		this.updateRefs()
		if (this.opts.getListItems) {
			this.opts.getListItems()	
		}
        ctrl.self.update()
		var eGridDiv = this.refs.grid
        new agGrid.Grid(eGridDiv, this.opts.gridOptions)
		// FOCUS
	},
	/**
	 * Action method for when the list is received
	 * Updates the row data with the response from the observable
	 * @return {undefined}
	 */
    onListResponse(arr) {
		if(arr) {
            this.opts.listItems = arr
            this.opts.gridOptions.api.setRowData(arr)
			ctrl.self.update()
		}
    }
}

export default ctrl
