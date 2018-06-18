import * as agGrid from 'ag-grid';

// START OF PARAMETERS FOR AG-GRID
//import 'ag-grid-enterprise'

var columnDefs = [
    {headerName: "Athlete", field: "athlete", width: 150},
    {headerName: "Age", field: "age", width: 90, sortingOrder: ['desc','asc']},
    {headerName: "Country", field: "country", width: 120, sortingOrder: ['desc',null]},
    {headerName: "Year", field: "year", width: 90, sortingOrder: ['asc']},
    {headerName: "Date", field: "date", width: 110},
    {headerName: "Sport", field: "sport", width: 110},
    {headerName: "Gold", field: "gold", width: 100},
    {headerName: "Silver", field: "silver", width: 100},
    {headerName: "Bronze", field: "bronze", width: 100},
    {headerName: "Total", field: "total", width: 100}
];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: null,
    enableSorting: true,
    animateRows: true,
    sortingOrder: ['desc','asc',null]
};

// simple cell renderer returns dummy buttons. in a real application, a component would probably
// be used with operations tied to the buttons. in this example, the cell renderer is just for
// display purposes.
function controlsCellRenderer() {
    return '<button>A</button><button>B</button><button>C</button>';
}

function onColumnPinned(event) {
    var allCols = event.columnApi.getAllGridColumns();

    var allFixedCols = allCols.filter( function(col) { return col.isLockPosition();} );
    var allNonFixedCols = allCols.filter( function(col) { return !col.isLockPosition();} );

    var pinnedCount = allNonFixedCols.filter( function(col) { return col.getPinned()==='left';} ).length;

    var pinFixed = pinnedCount > 0;

    event.columnApi.setColumnsPinned(allFixedCols, pinFixed);
}
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
                title: ctrl.opts.title,
                category: 'category'
            }
            ctrl.opts.nav_bar_detail = {
                css:'ui-secondary shadow-bar'
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
            ctrl.opts.ath_asc = {
                label: 'Athlete Asc'
            }
            ctrl.opts.ath_desc = {
                label: 'Athlete Desc'
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

    athleteSort(sortBy) {
        console.log('athlete button', sortBy)
        let sort = [{colId: 'athlete', sort: sortBy}]
        ctrl.gridOptions.api.setSortModel(sort)
    }


    // END OF STATE CHANGING METHODS

    // NECESARRY FOR REVEALING MODULE
    // return {
    //     buttonClick1,
    //     buttonClick2
    // }
}

export default ctrl;
