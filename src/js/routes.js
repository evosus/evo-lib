// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
// GUIDE BREAKPOINTS
// --------------------------------------
route('/breakpoints', function() {
	GF.mountArray([
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-breakpoints', url:'/guide/guide-breakpoints.html'	}
	]);
});
// --------------------------------------
// GUIDE BUTTONS
// --------------------------------------
route('/buttons', function() {
	GF.mountArray([
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-buttons', url:'/guide/guide-buttons.html'	}
	]);
});
// --------------------------------------
// GUIDE FORMS
// --------------------------------------
route('/forms', function() {
	GF.mountArray([
		{ id:'#appMount', template:'app-subscreen-nav', url:'/app/app-subscreen-nav.html'	},
		{ id:'#subscreenNavMount', template:'guide-forms', url:'/guide/guide-forms.html'	}
	]);
});
// --------------------------------------
// GUIDE STEPPER
// --------------------------------------
route('/steps', function() {
	GF.mountArray([
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-steps', url:'/guide/guide-steps.html'	}
	]);
});
// --------------------------------------
// GUIDE LISTS
// --------------------------------------
route('/list', function() {
	GF.mountArray([
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-list', url:'/guide/guide-list.html'	}
	]);
});
// --------------------------------------
// GUIDE HEADLESS
// --------------------------------------
route('/headless', function() {
	GF.mountArray([{ id:'#appMount', template:'guide-headless', url:'/guide/guide-headless.html' }]);
});
// --------------------------------------
// GUIDE NAVIGATION
// --------------------------------------
route('/navigation', function() {
	GF.mountArray([
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-navigation', url:'/guide/guide-navigation.html'	}
	]);
});
// --------------------------------------
// GUIDE THEME
// --------------------------------------
route('/theme', function() {
	GF.mountArray([
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-theme', url:'/guide/guide-theme.html'	}
	]);
});
// --------------------------------------
// GUIDE HOME
// --------------------------------------
route('/home', function() {
	GF.mountArray([
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-home', url:'/guide/guide-home.html'	}
	]);
});
route('/login',function() {
	GF.mountArray([{ id:'#appMount', template:'guide-headless', url:'/guide/guide-headless.html'}]);
});
// --------------------------------------
// !!! DEFAULT ROUTE !!!
// --------------------------------------
route('/', function() {
	GF.mountArray([{ id:'#appMount', template:'view-index', url:'/view/view-index.html'}]);
	//GF.mountArray([{ id:'#appMount', template:'tmpl-card', url:'/tmpl/tmpl-card.html'}]);
	// TODO: AUTH CHECK
	//route('/login','Login');
});
