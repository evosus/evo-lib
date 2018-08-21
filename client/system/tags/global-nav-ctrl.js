import route from 'riot-route';
var ctrl = {
	init(opts) {
		ctrl.opts = opts;
		ctrl.opts.title = 'NAV';
		ctrl.self = this;
		this.on('mount', this.onMount());
	},
	onMount() {
		let USER = IO.default.getStateByKey('AUTH');
		ctrl.opts.nav_menu.profileImgPath = USER.PhotoURL;

		const STORED = JSON.parse(localStorage.getItem('STATE'));
		if(STORED && STORED['NAV']) {
			Object.assign(ctrl.opts, STORED['NAV']);
		} else {
			ctrl.opts.nav_menu = {
				companyName:'',
				css:'ui-background fg-primary',
				cssActive:'ui-black-dot-1 fg-primary',
				cssHead:'ui-teal',
				cssLinks:'fg-primary-lt',
				isOpen: false,
				items:[],
				route: '',
				userName:'Display name not set',
				profileImgPath: USER.PhotoURL
			}
			debugger;
			ctrl.opts.ui_banner = { isOpen: false };
			ctrl.opts.ui_modal = { isOpen: false };
			ctrl.opts.ui_spinner = { isOpen: false };
			ctrl.opts.ui_toast = { isOpen: false };
		}

		const cfg = this.getState()['FLAG'];
		if(cfg) {
			switch(cfg.type) {
				case 'banner':
					this.openBanner(cfg);
					break;
				case 'modal':
					this.openModal(cfg);
					break;
				case 'toast':
					this.openToast(cfg);
					break;
			}
		} else {
			this.setNavState();
		}

		IO.default.obs.on('SET_NAV_MENU',(cfg) => {
			ctrl.setNavMenu(cfg);
		});
		IO.default.obs.on('NAV_MENU_LINK',(link) => {
			ctrl.navMenuLink(link);
		});
		IO.default.obs.on('CLOSE_NAV_MENU',() => {
			ctrl.closeNavMenu();
		});
		IO.default.obs.on('OPEN_NAV_MENU',() => {
			ctrl.openNavMenu();
		});
		IO.default.obs.on('OPEN_BANNER',(cfg) => {
			ctrl.openBanner(cfg);
		});
		IO.default.obs.on('CLOSE_BANNER',() => {
			ctrl.closeBanner(cfg);
		});
		IO.default.obs.on('OPEN_MODAL',(cfg) => {
			ctrl.openModal(cfg);
		});
		IO.default.obs.on('CLOSE_MODAL',() => {
			ctrl.closeModal();
		});
		IO.default.obs.on('OPEN_SPINNER',(cfg) => {
			ctrl.openSpinner(cfg);
		});
		IO.default.obs.on('OPEN_TOAST',(cfg) => {
			ctrl.openToast(cfg);
		});
		IO.default.obs.on('SET_FLAG',(flag) => {
			ctrl.setFlag();
		});
		IO.default.obs.on('DELETE_FLAG',() => {
			ctrl.deleteFlag();
		});

		// SET STATE
		this.setNavState();

	},
	deleteFlag() {
		IO.default.deleteState('FLAG');	
	},
	setFlag(flag) {
		this.setNavState('FLAG',flag);	
	},
	setNavMenu(cfg) {
		ctrl.opts.nav_menu = cfg;
		this.setNavState();
	},
	setNavState() {
		IO.default.setState(this.opts.title,ctrl.opts);
	},
	openBanner(cfg) {
		ctrl.opts.ui_banner = {
			css: cfg.css,
			isOpen: true,
			mdicon: cfg.mdicon,
			message: cfg.message
		};
		this.setNavState();
	},

	openModal(cfg) {
		ctrl.opts.ui_modal = {
			css: cfg.css,
			isOpen: true,
			template: cfg.template,
			templateOpts: cfg.templateOpts
		};
		this.setNavState();
	},

	openNavMenu() {
		ctrl.opts.nav_menu.isOpen = true;
		this.setNavState();
	},

	openSpinner() {
		ctrl.opts.ui_spinner.isOpen = true;
		this.setNavState();
	},
	openToast(cfg) {
		ctrl.self.refs.ui_toast.setOpts({
			css: cfg.css,
			isOpen: true,
			message: cfg.message
		});
		setTimeout(() => {
			this.closeToast();
		},(cfg.timeout || 2000));
	},

	closeBanner() {
		ctrl.opts.ui_banner = { isOpen: false, };
		this.setNavState();
	},

	closeModal() {
		ctrl.opts.ui_modal = { isOpen: false }
		this.setNavState();
	},

	closeNavMenu() {
		ctrl.opts.nav_menu.isOpen = false;
		this.setNavState();
	},

	closeSpinner() {
		ctrl.opts.ui_spinner.isOpen = false;
		this.setNavState();
	},

	closeToast() {
		ctrl.opts.ui_toast = { isOpen: false };
		ctrl.self.refs.ui_toast.setOpts({
			css: '',
			isOpen: false,
			message: ''
		});
		this.deleteFlag();
	},

	navMenuLink(link) {
		if(link) {
			this.closeNavMenu();
			route(link);	
		}
	}
}

export default ctrl;
