import route from 'riot-route';
const ctrl = {
	self:this,
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

		const cfg = IO.default.getState()['FLAG'];
		if(cfg) {
			switch(cfg.type) {
				case 'banner':
					ctrl.openBanner(cfg);
					break;
				case 'modal':
					ctrl.openModal(cfg);
					break;
				case 'toast':
					ctrl.openToast(cfg);
					break;
			}
		} else {
			ctrl.setState();
		}
	},
	deleteFlag() {
		IO.default.deleteState('FLAG');	
	},
	setFlag(flag) {
		IO.default.setState('FLAG',flag);	
	},
	setState() {
		IO.default.setState(ctrl.opts.title,ctrl.opts);
	},
	openBanner(cfg) {
		ctrl.opts.ui_banner = {
			css: cfg.css,
			isOpen: true,
			mdicon: cfg.mdicon,
			message: cfg.message
		};
		ctrl.setState();
	},

	openModal(cfg) {
		ctrl.opts.ui_modal = {
			css: cfg.css,
			isOpen: true,
			template: cfg.template,
			templateOpts: cfg.templateOpts
		};
		ctrl.setState();
	},

	openNavMenu() {
		ctrl.opts.nav_menu.isOpen = true;
		ctrl.setState();
	},

	openToast(cfg) {
		ctrl.opts.ui_toast = {
			css: cfg.css,
			isOpen: true,
			message: cfg.message
		};
		ctrl.setState();
		setTimeout(() => {
			ctrl.closeToast();
		},(cfg.timeout || 3000));
	},

	closeBanner() {
		ctrl.opts.ui_banner.isOpen = false;
		ctrl.setState();
	},

	closeModal() {
		ctrl.opts.ui_modal.isOpen = false;
		ctrl.setState();
	},

	closeNavMenu() {
		ctrl.opts.nav_menu.isOpen = false;
		ctrl.setState();
	},

	closeToast() {
		ctrl.opts.ui_toast.isOpen = false;
		ctrl.deleteFlag();
		ctrl.setState();
	},

	navMenuLink(link) {
		if(link.item.route) {
			ctrl.closeNavMenu();
			route(link.item.route);	
		}
	}
}

export default ctrl;