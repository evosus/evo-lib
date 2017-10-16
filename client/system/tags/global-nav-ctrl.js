import route from 'riot-route';
const ctrl = {
	init(opts) {
		this.on('mount', this.onMount());
	},
	onMount() {
		this.opts.title = 'NAV';
		this.opts.nav_menu = {
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
		this.opts.ui_banner = { isOpen: false };
		this.opts.ui_modal = { isOpen: false };
		this.opts.ui_toast = { isOpen: false };

		const cfg = IO.default.getState()['FLAG'];
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
			this.setState();
		}
	},
	deleteFlag() {
		IO.default.deleteState('FLAG');	
	},
	setFlag(flag) {
		IO.default.setState('FLAG',flag);	
	},
	setState() {
		IO.default.setState(this.opts.title,this.opts);
	},
	openBanner(cfg) {
		this.opts.ui_banner = {
			css: cfg.css,
			isOpen: true,
			mdicon: cfg.mdicon,
			message: cfg.message
		};
		this.setState();
	},

	openModal(cfg) {
		this.opts.ui_modal = {
			css: cfg.css,
			isOpen: true,
			template: cfg.template,
			templateOpts: cfg.templateOpts
		};
		this.setState();
	},

	openNavMenu() {
		this.opts.nav_menu.isOpen = true;
		this.setState();
	},

	openToast(cfg) {
		this.opts.ui_toast = {
			css: cfg.css,
			isOpen: true,
			message: cfg.message
		};
		this.setState();
		setTimeout(() => {
			this.closeToast();
		},(cfg.timeout || 3000));
	},

	closeBanner() {
		this.opts.ui_banner.isOpen = false;
		this.setState();
	},

	closeModal() {
		this.opts.ui_modal.isOpen = false;
		this.setState();
	},

	closeNavMenu() {
		this.opts.nav_menu.isOpen = false;
		this.setState();
	},

	closeToast() {
		this.opts.ui_toast.isOpen = false;
		this.deleteFlag();
		this.setState();
	},

	navMenuLink(link) {
		if(link.item.route) {
			this.closeNavMenu();
			route(link.item.route);	
		}
	}
}

export default this;
