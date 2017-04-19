/**
* Static Data
* For demo-ing components
*/
/** Nav Menu Items */
var navMenuItems =  [
	{ "name":"Home", "route":"/guide/contents","mdicon":"mdi mdi-home" },
	{ "name":"Anchor Scroll", "route":"/guide/anchor-scroll","mdicon":"mdi mdi-anchor" },
	{ "name":"Breakpoints", "route":"/guide/breakpoints","mdicon":"mdi mdi-cellphone-link" },
	{ "name":"Buttons", "route":"/guide/buttons","mdicon":"mdi mdi-checkbox-multiple-blank" },
	{ "name":"Charts", "route":"/guide/charts","mdicon":"mdi mdi-chart-pie" },
	{ "name":"Flexbox", "route":"/guide/flexbox","mdicon":"mdi mdi-image-filter-center-focus" },
	{ "name":"Fonts", "route":"/guide/fonts","mdicon":"mdi mdi-alphabetical" },
	{ "name":"Form Elements", "route":"/guide/forms","mdicon":"mdi mdi-checkbox-multiple-marked" },
	{ "name":"Grids", "route":"/guide/tables","mdicon":"mdi mdi-table-large" },
	{ "name":"Layout Left", "route":"/guide/layout-left","mdicon":"mdi mdi-format-horizontal-align-left" },
	{ "name":"Layout Right", "route":"/guide/layout-right","mdicon":"mdi mdi-format-horizontal-align-right" },
	{ "name":"Maps", "route":"/guide/maps","mdicon":"mdi mdi-map" },
	{ "name":"SVG Image Test", "route":"/guide/svg","mdicon":"mdi mdi-image" },
	{ "name":"Theme", "route":"/guide/theme","mdicon":"mdi mdi-palette" }
];
/** Tab Bar Items */
var tabBarItems = [
	{ "name":"Tab One" },
	{ "name":"Tab Two" },
	{ "name":"Tab Three" }
]
/** UI List Items */
var uiListItems = [
	{
		"mdiavatar":"mdi mdi-account-circle",
		"leftTop":"Everything",
		"leftBot":"Subtitle",
		"rightTop":"Value One",
		"rightBot":"Subvalue",
		"mdicon":"mdi mdi-check",
		"content":"Lucas ipsum dolor sit amet darth qui-gon solo skywalker mara moff palpatine mandalorians sebulba solo. Watto wedge anakin dooku amidala jabba grievous kessel droid. Hutt jar solo mustafar dantooine moff mustafar. C-3po ponda sidious palpatine palpatine. Antilles padmé skywalker skywalker jawa amidala skywalker. Anakin moff mace solo chewbacca palpatine hutt obi-wan mara. Antilles kenobi darth moff amidala owen tatooine. Darth leia mon darth hutt mothma. Moff aayla organa coruscant. Darth dooku antilles solo kamino lars kenobi hutt."
	},
	{
		"mdiavatar":"mdi mdi-account-circle",
		"leftTop":"No Icon",
		"leftBot":"Subtitle",
		"rightTop":"Value One",
		"rightBot":"Subvalue",
	},
	{
		"mdiavatar":"mdi mdi-account-circle",
		"leftTop":"No Icon or Subvalue",
		"leftBot":"Subtitle",
		"rightTop":"Value One",
	},
	{
		"mdiavatar":"mdi mdi-account-circle",
		"leftTop":"No Icon, Value or Subvalue",
		"leftBot":"Subtitle",
	},
	{
		"mdiavatar":"mdi mdi-account-circle",
		"leftTop":"No Icon, Value, Subvalue, or Subtitle",
	},
	{
		"leftTop":"Text Only"
	}
]
var uiDemoList = [
	{
		"leftTop":"Lists",
		"leftBot":"ui-list",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Tab Bar",
		"leftBot":"ui-tab-bar",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Navigation Menu",
		"leftBot":"nav-menu",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Navigation Bar",
		"leftBot":"nav-bar",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Navigation Bar Icon",
		"leftBot":"nav-bar-icon",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Navigation Bar Logo",
		"leftBot":"nav-bar-logo",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Title Bar",
		"leftBot":"title-bar",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Subtitle Bar",
		"leftBot":"subtitle-bar",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Button",
		"leftBot":"ui-btn",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Icon Button",
		"leftBot":"ui-btn-icon",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Checkbox",
		"leftBot":"ui-checkbox",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Form Checkbox",
		"leftBot":"form-checkbox",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Form Input",
		"leftBot":"form-input",
		"mdicon":"mdi mdi-chevron-right",
	},
	{
		"leftTop":"Form Select Menu",
		"leftBot":"form-select",
		"mdicon":"mdi mdi-chevron-right",
	}
]
/* MAP DATA FROM COREY */
//var mapData = [{"Schedule_PK":294212,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 06:56:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Long, James","Address":"3044 Palmer Dr","City":"Sierra Vista","State":"AZ","PostCode":"85650","Country":"US","Phone":"(707) 299-7327","Email":"jrandpattyx@outlook.com","CalendarText":"3044 Palmer Dr Sierra Vista 85650-6676\r\nDavid Balser\r\nANYTIME  CONTRACT\r\nChems Included - Maintenance\r\nLong, James\r\n3044 Palmer Dr Sierra Vista 856506676\r\nVeh. Not Assigned"},{"Schedule_PK":292933,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 08:31:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Blair, Jack","Address":"2827 Palmer Drive","City":"Sierra Vista","State":"AZ","PostCode":"85635","Country":"US","Phone":"(707) 299-7327","Email":"sabrinamg2006x@yahoo.com","CalendarText":"Sv-4 Commerical Pc (sv-4 Commerical Pc)\r\nDavid Balser\r\n  CONTRACT\r\nChems Included - Maintenance\r\nBlair, Jack\r\n2827 Palmer Dri Sierra Vista 85635\r\n667 Pool Cleaning-sierra Vista"},{"Schedule_PK":293013,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 10:31:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Ettinger, Dr. Dean","Address":"2925 Palmer Dr","City":"Sierra Vista","State":"AZ","PostCode":"85650","Country":"US","Phone":"(707) 299-7327","Email":"bbydocx@theriver.com","CalendarText":"Sv-4 Commerical Pc (sv-4 Commerical Pc)\r\nDavid Balser\r\n  CONTRACT\r\nChems Included - Maintenance\r\nEttinger, Dr. Dean\r\n2925 Palmer Dr Sierra Vista 856505266\r\n667 Pool Cleaning-sierra Vista"},{"Schedule_PK":295367,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 09:21:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Wilson, Kenneth","Address":"3474 Little Hill Ln","City":"Sierra Vista","State":"AZ","PostCode":"85635","Country":"US","Phone":"(707) 299-7327","Email":"hankukin2004x@hotmail.com","CalendarText":"Sv-1 Local Pc (sv- 1 Local Pc)\r\nDavid Balser\r\nANYTIME  CONTRACT\r\nChems Included - Maintenance\r\nWilson, Kenneth\r\n3474 Little Hil Sierra Vista 85635\r\nVeh. Not Assigned"},{"Schedule_PK":292098,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 06:31:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Dye, Marsha","Address":"1849 Laurel Ln","City":"Sierra Vista","State":"AZ","PostCode":"85635","Country":"US","Phone":"(707) 299-7327","Email":"azkneesx@cox.net","CalendarText":"Sv-6 In Town Pc (sv-6 In Town Pc)\r\nDavid Balser\r\n  CONTRACT\r\nChems Included - Maintenance\r\nDye, Marsha\r\n1849 Laurel Ln Sierra Vista 856355052\r\n683 Pool Cleaning-sierra Vista"},{"Schedule_PK":292334,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 10:01:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Howe, Rosita","Address":"2909 St. Andrews Drive","City":"Sierra Vista","State":"AZ","PostCode":"85650","Country":"US","Phone":"(707) 299-7327","Email":"","CalendarText":"Sv-4 Commerical Pc (sv-4 Commerical Pc)\r\nDavid Balser\r\n  CONTRACT\r\nChems Included - Maintenance\r\nHowe, Rosita\r\n2909 St. Andrew Sierra Vista 85650\r\n667 Pool Cleaning-sierra Vista"},{"Schedule_PK":292522,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 06:00:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Miller, Gerald","Address":"1491 Skyline Ave","City":"Sierra Vista","State":"AZ","PostCode":"85635","Country":"US","Phone":"(707) 299-7327","Email":"gerald.h.miller.milx@mail.mil","CalendarText":"Sv-6 In Town Pc (sv-6 In Town Pc)\r\nDavid Balser\r\n  CONTRACT\r\nChems Included - Maintenance\r\nMiller, Gerald\r\n1491 Skyline Av Sierra Vista 856355521\r\n684 Pool Cleaning Sv"},{"Schedule_PK":294669,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 07:21:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Wolk, Jeff & Annie","Address":"4901 Calle Encina","City":"Sierra Vista","State":"AZ","PostCode":"85650","Country":"US","Phone":"(707) 299-7327","Email":"annwolkx@mac.com","CalendarText":"4901 Calle Enci Sierra Vista 85650\r\nDavid Balser\r\nANYTIME  CONTRACT\r\nChems Included - Maintenance\r\nWolk, Jeff & Annie\r\n4901 Calle Enci Sierra Vista 85650\r\nVeh. Not Assigned"},{"Schedule_PK":294705,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 07:46:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Noll, George","Address":"4290 Kutenai Way","City":"Sierra Vista","State":"AZ","PostCode":"85650","Country":"US","Phone":"(707) 299-7327","Email":"","CalendarText":"4290 Kutenai Wa Sierra Vista 85650\r\nDavid Balser\r\nANYTIME  CONTRACT\r\nChems Included - Maintenance\r\nNoll, George\r\n4290 Kutenai Wa Sierra Vista 85650\r\nVeh. Not Assigned"},{"Schedule_PK":294713,"ServiceTech_PK":124,"ServiceTechName":"David Balser","ScheduleDate":"Tue, 28 Feb 2017 00:00:00 GMT","SortTime":"Mon, 01 Jan 1900 08:56:00 GMT","Promised":false,"EstimatedMinutes":25,"ScheduleStatus":"Scheduled","Customer":"Martin, Shane","Address":"2033 Laurel Ln","City":"Sierra Vista","State":"AZ","PostCode":"85635","Country":"US","Phone":"(707) 299-7327","Email":"shanemartin0925x@gmail.com","CalendarText":"Sv-1 Local Pc (sv- 1 Local Pc)\r\nDavid Balser\r\nANYTIME  CONTRACT\r\nChems Included - Maintenance\r\nMartin, Shane\r\n2033 Laurel Ln Sierra Vista 856355056\r\nVeh. Not Assigned"}];
//console.log(JSON.stringify(mapData,null,2));
/*
console.dir(mapData);
var i;
for(i = 0; i < mapData.length; i++) {
	console.log("-------------------------------------------------");
	console.log(mapData[i].SortTime);
	console.log(mapData[i].Address + " " + mapData[i].City + " " + mapData[i].PostCode);
	console.log(mapData[i].ServiceTechName);
}
*/
