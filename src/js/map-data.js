// --------------------------------------
// TECHS
// --------------------------------------
techs = [
	{
		name: "",
		address: {},
		latlng: "",
		skills:	[],
		schedule:[],
		exceptions:[],
		jobs: []
	}
]
// --------------------------------------
// JOB MODEL
// --------------------------------------
var JOB_MODEL = [
	{
		name: "",
		contact: "",
		dateTime: "",
		hours: "",	
		address: {},
		gps: {},
		tasks: []
	}
]
// --------------------------------------
// TASK TYPES
// --------------------------------------
var TASK_TYPES = [
	{ 
		name: "Followup",
		alias: "",
		description: "Respond to customer, employee, or vendor requests.",
		categories: [
			{
				name: "Estimate",
				alias: "",
				description: "Followup with estimate"
			},
			{
				name: "Warranty",
				alias: "",
				description: "Followup about item under warranty"
			},
			{
				name: "Non-Warranty",
				alias: "",
				description: "Followup about item under warranty"
			}
		]
	},
	{
		name: "Delivery",
		alias: "",
		description: "Transit and transfer of inventory or equipment to location.",
		categories: [
			{
				name: "Pool",
				alias: "",
				description: "Deliver a pool."
			},
			{
				name:"Spa",
				alias: "",
				description: "Deliver a spa."
			},
			{
				name:"Stove",
				alias: "",
				description: "Deliver a stove."
			},
			{
				name:"Hearth",
				alias: "",
				description: "Deliver a hearth."
			}
		],
	},
	{
		name: "Installation",
		alias: "",
		description: "Install equipement at a location.",
		categories: [
			{
				name: "Pool",
				alias: "",
				description: "Deliver a pool."
			},
			{
				name:"Spa",
				alias: "",
				description: "Deliver a spa."
			},
			{
				name:"Stove",
				alias: "",
				description: "Deliver a stove."
			},
			{
				name:"Hearth",
				alias: "",
				description: "Deliver a hearth."
			}
		],
	},
	{
		name: "Maintenance",
		alias: "",
		description: "Maintain installed equipment.",
		categories: [
			{
				name: "Pool",
				alias: "",
				description: "Maintain a pool."
			},
			{
				name:"Spa",
				alias: "",
				description: "Maintain a spa."
			},
			{
				name:"Stove",
				alias: "",
				description: "Maintain a stove."
			},
			{
				name:"Hearth",
				alias: "",
				description: "Maintain a hearth."
			}
		],
	},
	{
		name: "Service",
		alias: "",
		description: "Service installed equipment.",
		categories: [
			{
				name: "Pool",
				alias: "",
				description: "Service a pool."
			},
			{
				name:"Spa",
				alias: "",
				description: "Service a spa."
			},
			{
				name:"Stove",
				alias: "",
				description: "Service a stove."
			},
			{
				name:"Hearth",
				alias: "",
				description: "Service a hearth."
			}
		],
	}
]
/*
console.dir(TASK_TYPES);
var len = TASK_TYPES.length;
for(i = 0;i < len; i++) {
	var lenB = TASK_TYPES[i].categories.length;
	for(x = 0;x < lenB; x++) {
		console.log(TASK_TYPES[i].name + ": " + TASK_TYPES[i].categories[x].name);
	}
}
*/
