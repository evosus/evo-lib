import * as agGrid from 'ag-grid';

const columnDefs = [
    {headerName: "Make", field: "make", checkboxSelection: true },
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
]
const gridOptions = {
    columnDefs: columnDefs,
    enableSorting: true,
    enableFilter: true,
    rowSelection: 'multiple'
    
}
const ctrl = {
    init(opts) {
        ctrl.opts = opts;
		ctrl.opts.title = 'TBD';
        ctrl.self = this;
        this.gridOptions = gridOptions
        ctrl.gridOptions = gridOptions
		this.initEvents(opts)
    },
    initEvents() {
         // LIFECYCLE METHODS
        // TODO: pick up where we left off w/ modules
        //  currently gets this.on is not a function
        this.on('mount', () => {
            this.onMount();
        })
        this.on('unmount', () => {
            this.unMount()
        })
    },
    onMount() {
        console.dir(ctrl.opts)
        let store = null
        store = IO.default.getStateByKey(ctrl.opts.title)
        console.log(store)
        if (store) {
            Object.assign(ctrl.opts, store)
        } else {
            ctrl.opts.nav_bar = {
                css: 'ui-primary',
                title: ctrl.opts.title
            }
            ctrl.opts.ui_button_tbd = {
                label: 'button1'
            }
            ctrl.opts.ui_button_tbd_2 = {
                label: 'button2'
            }
        }
        this.agGridSetUp()
        this.setState()
    },
    setState() {
        IO.default.setState(ctrl.opts.title, ctrl.opts)
    },
    unMount() {
        IO.default.deleteState(ctrl.opts.title)
    },
    agGridSetUp() {

        var eGridDiv = this.refs.ag_grid
        console.log(gridOptions)
        // create the grid passing in the div to use together with the columns & data we want to use
        new agGrid.Grid(eGridDiv, gridOptions);
        fetch('https://api.myjson.com/bins/15psn9').then((response) => {
            return response.json();
        }).then(function(data) {
            gridOptions.api.setRowData(data);
        })
    },
    // END OF LIFECYCLE METHODS

    // STATE CHANGING METHODS
    buttonClick1() {
        ctrl.opts.nav_bar.title = 'cool new title'
        this.setState()
    },
    buttonClick2() {
        ctrl.opts.nav_bar.title = 'cooler new title'
        this.setState()
    },
    getSelectedRows() {
        //let gridOptions = this.refs.
        console.log('getselectedrows called')
        var selectedNodes = gridOptions.api.getSelectedNodes()  
        var selectedData = selectedNodes.map( function(node) { return node.data })
        var selectedDataStringPresentation = selectedData.map( function(node) { return node.make + ' ' + node.model }).join(', ')
        alert('Selected nodes: ' + selectedDataStringPresentation);
        this.setState()
    }
    // END OF STATE CHANGING METHODS

    // return {
    //     buttonClick1,
    //     buttonClick2
    // }
}

export default ctrl;
