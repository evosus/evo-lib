import route from 'riot-route';
var ctrl = {
	opts:{},
	init(opts) {
		ctrl.opts = opts;
		this.on('mount', this.onMount());
	},
	onMount() {
		ctrl.opts.title = 'NAV';
		ctrl.opts.nav_menu = {
			companyName:'',
			css:'ui-background fg-primary',
			cssActive:'ui-black-dot-1 fg-primary',
			cssHead:'ui-teal',
			cssLinks:'fg-primary-lt',
			isOpen: false,
			items:[],
			route: '',
			userName:'Display name not set'
		}
		ctrl.opts.ui_banner = { isOpen: false };
		ctrl.opts.ui_modal = { isOpen: false };
		ctrl.opts.ui_toast = { isOpen: false };

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
	},
	deleteFlag() {
		this.deleteState('FLAG');	
	},
	setFlag(flag) {
		this.setNavState('FLAG',flag);	
	},
	setNavState() {
		IO.default.setState(this.opts.title,this.opts);
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

	openToast(cfg) {
		ctrl.opts.ui_toast = {
			css: cfg.css,
			isOpen: true,
			message: cfg.message
		};
		this.setNavState();
		setTimeout(() => {
			this.closeToast();
		},(cfg.timeout || 3000));
	},

	closeBanner() {
		ctrl.opts.ui_banner.isOpen = false;
		this.setNavState();
	},

	closeModal() {
		ctrl.opts.ui_modal.isOpen = false;
		this.setNavState();
	},

	closeNavMenu() {
		ctrl.opts.nav_menu.isOpen = false;
		this.setNavState();
	},

	closeToast() {
		ctrl.opts.ui_toast.isOpen = false;
		this.deleteFlag();
		this.setNavState();
	},

	navMenuLink(link) {
		if(link.item.route) {
			this.closeNavMenu();
			route(link.item.route);	
		}
	}
}

export default ctrl;
