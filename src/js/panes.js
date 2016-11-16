// --------------------------------------
// PANES
// --------------------------------------
// Handles openning / closing panes
// --------------------------------------
var panes = (function() {
	var left = { "isOpen": false }
	var right = { "isOpen": false }
	var vpWidth = function() {
		return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
	var toggle = function(pid) {
		var p = document.getElementById(pid);
		// Left Pane
		if(pid == 'pane-left') {
			if(left.isOpen) {
				p.classList.remove('open'); p.classList.add('closed'); left.isOpen = false;
			} else {
				p.classList.remove('closed'); p.classList.add('open'); left.isOpen = true;
			}
		// Right Pane
		} else if(pid == 'pane-right') {
			if(right.isOpen) {
				p.classList.remove('open'); p.classList.add('closed'); right.isOpen = false;
			} else {
				p.classList.remove('closed'); p.classList.add('open'); right.isOpen = true;
			}
		// Error
		} else {
			console.error("Failed to toggle " + pid);
		}
	}
	// --------------------------------------
	// PUBLIC METHOD(S)
	// --------------------------------------
	return {
		toggle: function(paneID) { toggle(paneID); }
	}
})();
