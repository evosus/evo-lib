import * as agGrid from 'ag-grid';
//import 'ag-grid-enterprise'

// START OF PARAMETERS FOR AG-GRID
var columnDefs = [
    {field: 'athlete', width: 150},
    {field: 'age'},
    {field: 'country', width: 150},
    {field: 'year'},
    {field: 'date'},
    {field: 'sport'},
    {field: 'gold'},
    {field: 'silver'},
    {field: 'bronze'},
    {field: 'total'}
];

var gridOptions = {
    suppressDragLeaveHidesColumns: true,
    columnDefs: columnDefs,
    defaultColDef: {
        width: 100
    }
};
// END OF PARAMETERS FOR AG-GRID

const ctrl = {
    init(opts) {
        ctrl.opts = opts;
		ctrl.opts.title = 'TBD';
        //ctrl.self = this;
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
        let store = null
        store = IO.default.getStateByKey(ctrl.opts.title)
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
            ctrl.opts.ag_button = {
                label: 'Get Selected Rows',
                css: 'ui-active'
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
        // create the grid passing in the div to use together with the columns & data we want to use
        new agGrid.Grid(eGridDiv, gridOptions)
        agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json'}).then(function(data) {
        gridOptions.api.setRowData(data);
    });
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

    onMedalsFirst() {
        gridOptions.columnApi.moveColumns(['gold','silver','bronze','total'], 0);
    },
    
    onMedalsLast() {
        gridOptions.columnApi.moveColumns(['gold','silver','bronze','total'], 6);
    },
    
    onCountryFirst() {
        gridOptions.columnApi.moveColumn('country', 0);
    },
    
    onSwapFirstTwo() {
        gridOptions.columnApi.moveColumnByIndex(0, 1);
    },
    
    onPrintColumns() {
        var cols = gridOptions.columnApi.getAllGridColumns();
        var colToNameFunc = function(col, index) {
            return index + ' = ' + col.getId();
        };
        var colNames = cols.map(colToNameFunc).join(', ');
        console.log('columns are: ' + colNames);
    }
    // END OF STATE CHANGING METHODS

    // NECESARRY FOR REVEALING MODULE
    // return {
    //     buttonClick1,
    //     buttonClick2
    // }
}

export default ctrl;
