// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// It is assigned to GUIDE HOME
// --------------------------------------
// ROUTES
// --------------------------------------
// GUIDE BREAKPOINTS
// --------------------------------------
route('/breakpoints', function() {
	var mounts  = [
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-breakpoints', url:'/guide/guide-breakpoints.html'	}
	];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE BUTTONS
// --------------------------------------
route('/buttons', function() {
	var mounts  = [
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-buttons', url:'/guide/guide-buttons.html'	}
	];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE FORMS
// --------------------------------------
route('/forms', function() {
	var mounts  = [
		{ id:'#appMount', template:'app-subscreen-nav', url:'/app/app-subscreen-nav.html'	},
		{ id:'#subscreenNavMount', template:'guide-forms', url:'/guide/guide-forms.html'	}
	];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE STEPPER
// --------------------------------------
route('/steps', function() {
	var mounts  = [
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-steps', url:'/guide/guide-steps.html'	}
	];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE LISTS
// --------------------------------------
route('/list', function() {
	var mounts  = [
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-list', url:'/guide/guide-list.html'	}
	];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE HEADLESS
// --------------------------------------
route('/headless', function() {
	var mounts  = [{ id:'#appMount', template:'guide-headless', url:'/guide/guide-headless.html'	}];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE NAVIGATION
// --------------------------------------
route('/navigation', function() {
	var mounts  = [
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-navigation', url:'/guide/guide-navigation.html'	}
	];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE THEME
// --------------------------------------
route('/theme', function() {
	var mounts  = [
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-theme', url:'/guide/guide-theme.html'	}
	];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE HOME
// --------------------------------------
route('/home', function() {
	var mounts = [
		{ id:'#appMount', template:'app-global-nav', url:'/app/app-global-nav.html'	},
		{ id:'#globalNavMount', template:'app-module-nav', url:'/app/app-module-nav.html'	},
		{ id:'#moduleNavMount', template:'guide-home', url:'/guide/guide-home.html'	}
	];
	GF.mountArray(mounts);
});
// --------------------------------------
// GUIDE LOGIN !!! DEFAULT ROUTE !!!
// --------------------------------------
route('/', function() {
	var mounts = [{ id:'#appMount', template:'guide-headless', url:'/guide/guide-headless.html'}]
	GF.mountArray(mounts);
});
