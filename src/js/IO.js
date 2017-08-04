// --------------------------------------
// INPUT OUTPUT MIXIN
// --------------------------------------
// Observable for tag IO control
// --------------------------------------
var IO  = {
	getOpts: function() { return this.opts },
	setOpts: function (opts,update) {
		this.opts = opts;
		if(!update) {
			this.update();
			return this;
		}
	}
};
