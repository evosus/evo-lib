/**
* Static Data
* For demo-ing components
*/
/** Nav Menu Items */
var navMenuItems =  [
	{ "name":"view-home", "route":"/view-home","mdicon":"mdi mdi-grid" },
	{ "name":"view-card", "route":"/view-card","mdicon":"mdi mdi-grid" },
	{ "name":"view-dashboard", "route":"/view-dashboard","mdicon":"mdi mdi-grid" },
	{ "name":"view-deadend", "route":"/view-deadend","mdicon":"mdi mdi-grid" },
	{ "name":"view-detail", "route":"/view-detail","mdicon":"mdi mdi-grid" },
	{ "name":"view-print", "route":"/view-print","mdicon":"mdi mdi-grid" },
	{ "name":"view-search", "route":"/view-search","mdicon":"mdi mdi-grid" },
	{ "name":"view-summary", "route":"/view-summary","mdicon":"mdi mdi-grid" }
];
/** OLD Nav Menu Items */
/*
var navMenuItems =  [
	{ "name":"Home", "route":"/","mdicon":"mdi mdi-home" },
	{ "name":"Navigation", "route":"/navigation","mdicon":"mdi mdi-map-marker" },
	{ "name":"Theme", "route":"/theme","mdicon":"mdi mdi-palette" },
	{ "name":"Breakpoints", "route":"/breakpoints","mdicon":"mdi mdi-cellphone-link" },
	{ "name":"Buttons", "route":"/buttons","mdicon":"mdi mdi-cursor-pointer" },
	{ "name":"Forms", "route":"/forms","mdicon":"mdi mdi-checkbox-multiple-marked" },
	{ "name":"Steps", "route":"/steps","mdicon":"mdi mdi-format-list-numbers" },
	{ "name":"List", "route":"/list","mdicon":"mdi mdi-format-list-bulleted" }
];
*/
/** Color Palette */
var palette_descending = [
  { "name":"darkred" },
  { "name":"darkorange" },
  { "name":"darkgoldenrod" },
  { "name":"darkolivegreen" },
  { "name":"darkcyan" },
  { "name":"darkslateblue" },
  { "name":"indigo" },
  { "name":"firebrick" },
  { "name":"orange" },
  { "name":"goldenrod" },
  { "name":"olivedrab" },
  { "name":"lightseagreen" },
  { "name":"royalblue" },
  { "name":"rebeccapurple" },
  { "name":"tomato" },
  { "name":"sandybrown" },
  { "name":"burlywood" },
  { "name":"forestgreen" },
  { "name":"mediumaquamarine" },
  { "name":"dodgerblue" },
  { "name":"mediumpurple" }
]
var palette = palette_descending;
/** Tab Bar Items */
var tabBarItems = [
	{ "name":"Tab One" },
	{ "name":"Tab Two" },
	{ "name":"Tab Three" }
]
/** View Items */
var viewItems = [
	{ 
		title:'<view-card>',
		subtitle: 'view-card.html',
		description: 'desc'
	 },
	{
		title:'<view-deadend>',
		subtitle: 'view-deadend.html',
		description: 'desc'
	},
	{
		title:'<view-overview>',
		subtitle: 'view-overview.html',
		description: 'desc'
	},
	{
		title:'<view-profile>',
		subtitle: 'view-profile.html',
		description: 'desc'
	},
	{
		title:'<view-search>',
		subtitle: 'view-search.html',
		description: 'desc'
	}
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
