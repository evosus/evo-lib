// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
route('/home',function() {
	GF.mountArray([{ id:'#appMount', template:'library-home', url:'/app/library/library-home.html' }]);
});
route('/login',function() {
	GF.mountArray([{ id:'#appMount', template:'login-template', url:'/app/login/login-template.html' }]);
});
// --------------------------------------
// !!! DEV VIEW ROUTES !!!
// --------------------------------------
route('/view-home',function() {
	GF.mountArray([{ id:'#appMount', template:'view-home', url:'/view/view-home.html' }]);
});
route('/view-card',function() {
	GF.mountArray([{ id:'#appMount', template:'view-card', url:'/view/view-card.html' }]);
});
route('/view-deadend',function() {
	GF.mountArray([{ id:'#appMount', template:'view-deadend', url:'/view/view-deadend.html' }]);
});
route('/view-detail',function() {
	GF.mountArray([{ id:'#appMount', template:'view-detail', url:'/view/view-detail.html' }]);
});
route('/view-print',function() {
	GF.mountArray([{ id:'#appMount', template:'view-print', url:'/view/view-print.html' }]);
});
route('/view-search',function() {
	GF.mountArray([{ id:'#appMount', template:'view-search', url:'/view/view-search.html' }]);
});
// --------------------------------------
// !!! DEFAULT ROUTE !!!
// --------------------------------------
route('/', function() {
	// TODO: AUTH CHECK
	route('/login','Login');
});
