const REQS = {
	User: ['Online','LoggedIn','Active'],
	ACL: ['Admin','Employee','Owner'],
	Versions: ['^1.0'],
	Licenses: ['ERP','ESP'],
	Services: ['Auth','QBO'],
	Devices: ['Poynt','Scanner','Cash Drawer'],
}

route('/*', (hash) => {
	// Import Route Validator
	console.log("ROUTE: " + hash);
	// Import Route Requirements
	// Validate Route Requirements
	// Import Templates
	// Parse Any URL Params or Query
	// Mount
});


