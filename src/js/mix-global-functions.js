// --------------------------------------
// GLOBAL FUNCTIONS MIXIN
// --------------------------------------
// Common reuseable functions
// --------------------------------------
var GF = (function() {
	// --------------------------------------
	// ADD COMAS
	// --------------------------------------
	// Returns number with propercommas
	// --------------------------------------
	var addCommas = function(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	// --------------------------------------
	// GET ELAPSED (expect UTC secs)
	// --------------------------------------
	// Returns elapsed time between datetime
	// and now, as a formatted string
	// --------------------------------------
	var getElapsed = function(datetime) {
			var today = new Date(),
					seconds  = Math.round((today - datetime) / 1000),
					minute = 60,
					hour = minute * 60,
					day = hour * 24,
					week = day * 7,
					month = day * 30,
					year = day * 365,
					suffix = "ago",
					prefix,
					plural,
					rounded,
					formatted;
			if (seconds/year >= 1) { rounded = Math.round(seconds/year);prefix = "year"; } else
			if (seconds/month >= 1) { rounded = Math.round(seconds/month);prefix = "month"; } else
			if (seconds/week >= 1) { rounded = Math.round(seconds/week);prefix = "week"; } else
			if (seconds/day >= 1) { rounded = Math.round(seconds/day);prefix = "day"; } else
			if (seconds/hour >= 1) { rounded = Math.round(seconds/hour);prefix = "hour"; } else
			if (seconds/minute >= 1) { rounded = Math.round(seconds/minute);prefix = "minute"; } else
			if (seconds >= 1) { rounded = seconds;prefix = "second"; }
			else { rounded = "";prefix = "";suffix = "just now"; }
			rounded >= 2 ? plural = "s" : plural = '';
			formatted = rounded + " " + prefix + plural + " " + suffix;
			return formatted;
	}
	// --------------------------------------
	// IS NEGATIVE
	// --------------------------------------
	// Returns true if hyphen found in string
	// --------------------------------------
	var isNeg = function(string) {
		return string.indexOf('-') == 0 ? true : false;
	}
	// --------------------------------------
	// TRUNCATE
	// --------------------------------------
	// Returns amount of string + '...'
	// --------------------------------------
	var truncate = function(string, amount) {
		var limit = amount || 60;
		return string.length > limit ? string.substring(0,limit) + "..." : string;
	}
	// --------------------------------------
	// COMPILE ARRAY
	// --------------------------------------j
	// Attempts to compile an array of templates
	// --------------------------------------
	var compileArray = function(tags) {
		tags.forEach(function(key) {
			var TMPL = key.template, URL = key.url;
			riot.compile(URL,function() {});
		});
	}
	// --------------------------------------
	// GET STATE
	// --------------------------------------
	// Returns stored state by key (screen title)
	// --------------------------------------
	var getState = function(key) {
		// IF STATE in storage
		if(STORED = JSON.parse(localStorage.getItem('STATE'))) {
			return STORED[key];
		} else {
			return false;
		}
	}
	// --------------------------------------
	// MOUNT ARRAY
	// --------------------------------------
	// Attempts to load and mount an array of templates
	// --------------------------------------
	var mountArray = function(mounts) {
		mounts.forEach(function(key) {
			var ID = key.id,
					OPTS = key.opts,
					TMPL = key.template,
					URL = key.url;
			riot.compile(URL,function() {
				if(ID) {
					riot.mount(ID,TMPL,OPTS);
				} else {
					riot.mount(TMPL,OPTS);
				}
			});
		});
	}
	// --------------------------------------
	// ICON BY TITLE
	// --------------------------------------
	// Returns a Material Design Icon based on box title
	// --------------------------------------
	var iconByTitle = function(title) {
		switch(title) {
			case 'Sales': return 'mdi mdi-currency-usd';break;
			case 'Cash By Company': return 'mdi mdi-city';break;
			case 'Sales Map By Store': return 'mdi mdi-map';break;
			case 'Service': return 'mdi mdi-worker';break;
			case 'Accounting': return 'mdi mdi-calculator';break;
			case 'Cash By Store': return 'mdi mdi-home-variant';break;
			case 'Jobs': return 'mdi mdi-wrench';break;
			case 'Schedule Forecast': return 'mdi mdi-calendar-clock';break;
			case 'Big Sales': return 'mdi mdi-crown';break;
			case 'Marketing': return 'mdi mdi-auto-fix';break;
			case 'POS': return 'mdi mdi-barcode';break;
			case 'Money Tree': return 'mdi mdi-file-tree';break;
			case 'Contracts': return 'mdi mdi-clipboard-outline';break;
			case 'Performance Analyzer': return 'mdi mdi-chart-bar';break;
			case 'RGAs': return 'mdi mdi-receipt';break;
			case 'Quotes': return 'mdi mdi-comment';break;
			default: return 'mdi mdi-help';break;
		}
	}
	// --------------------------------------
	// PUBLIC METHOD(S)
	// --------------------------------------
	return {
		addCommas: function(number) { return addCommas(number); },
		getElapsed: function(datetime) { return getElapsed(datetime); },
		getState: function(key) { return getState(key); },
		isNeg: function(string) { return isNeg(string); },
		truncate: function(string, limit) { return truncate(string, limit) },
		iconByTitle: function(title) { return iconByTitle(title) },
		compileArray: function(tags) { return compileArray(tags) },
		mountArray: function(mounts) { return mountArray(mounts) }
	}
})();
