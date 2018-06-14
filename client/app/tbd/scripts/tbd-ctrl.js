const ctrl = {
    init(opts) {
        ctrl.opts = opts
        ctrl.opts.title = 'tbd'
        console.log('init ctrl');
        this.initEvents(opts);
    },
    initEvents(opts) {
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
        this.setState()
    },
    unMount() {
        IO.default.deleteState(ctrl.opts.title)
    },
    setState() {
        IO.default.setState(ctrl.opts.title, ctrl.opts)
    },
    buttonClick1() {
        ctrl.opts.nav_bar.title = 'cool new title'
        this.setState()
    },
    buttonClick2() {
        ctrl.opts.nav_bar.title = 'cooler new title'
        this.setState()
    }
}

export default ctrl;