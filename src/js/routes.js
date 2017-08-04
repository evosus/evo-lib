// --------------------------------------
// IMPORTANT: The '/' route MUST be LAST
// --------------------------------------
// ROUTES
// --------------------------------------
route('/login',function() {
	var opts = { title:'login' };
	GF.mountArray([{ id:'#appMount', template:'view-card', url:'/view/view-card.html', 'opts':opts }]);
});
// --------------------------------------
// !!! DEV VIEW ROUTES !!!
// --------------------------------------
route('/view-home',function() {
	var opts = { title:'view-home' };
	GF.mountArray([{ id:'#appMount', template:'view-home', url:'/view/view-home.html', 'opts':opts }]);
});
route('/view-card',function() {
	var opts = { title:'view-card' };
	GF.mountArray([{ id:'#appMount', template:'view-card', url:'/view/view-card.html', 'opts':opts }]);
});
route('/view-dashboard',function() {
	var opts = { title:'view-dashboard' };
	GF.mountArray([{ id:'#appMount', template:'view-dashboard', url:'/view/view-dashboard.html', 'opts':opts }]);
});
route('/view-deadend',function() {
	var opts = { title:'view-deadend' };
	GF.mountArray([{ id:'#appMount', template:'view-deadend', url:'/view/view-deadend.html', 'opts':opts }]);
});
route('/view-detail',function() {
	var opts = { title:'view-detail' };
	GF.mountArray([{ id:'#appMount', template:'view-detail', url:'/view/view-detail.html', 'opts':opts }]);
});
route('/view-print',function() {
	var opts = { title:'view-print' };
	GF.mountArray([{ id:'#appMount', template:'view-print', url:'/view/view-print.html', 'opts':opts }]);
});
route('/view-search',function() {
	var opts = { title:'view-search' };
	GF.mountArray([{ id:'#appMount', template:'view-search', url:'/view/view-search.html', 'opts':opts }]);
});
// --------------------------------------
// !!! DEFAULT ROUTE !!!
// --------------------------------------
route('/', function() {
	// TODO: AUTH CHECK
	route('/login','Login');
});
