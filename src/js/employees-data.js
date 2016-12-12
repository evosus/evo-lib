var EMPLOYEE_MODEL = {
	profile: {
		guid: "",
		name: { first:"Corey", last:"Holten", display:"cholten" },
		active: true,
		hired: "",
		picture: "",
		email: [
			{ "primary": "cholten@evosus.com" },
			{ "secondary": "cc@evosus.com" }
		],
		phone: [
			{ "primary": "1-234-567-8901" },
			{ "secondary": "2-345-678-9012" }
		],
	},
	address: [
		{
			"primary": {
				line1:"7414 Hazel Dell Avenue",
				line2:"Suite 100",
				city:"Vancouver",
				state:"WA",
				country:"USA",
				postal:"98665",
				gps: { lat:"",lng:"" }
			}
		},
		{
			"billing": {
				line1:"7414 Hazel Dell Avenue",
				line2:"Suite 100",
				city:"Vancouver",
				state:"WA",
				country:"USA",
				postal:"98665",
				gps: { lat:"",lng:"" }
			}
		}
	],
	emergency: [
		{
			name:"The Dude",
			email: [],
			phone: [],
			text: [],
			attachments: []
		}
	],
	security: {
		level:"Superhero",
		access:["Department 1", "Department 2"],
		membership:["Group 1", "Group 2"],
		log:[
			{
				name: "Login",
				dateTime: "",
				ip: "192.168.2.1",
				machine: "My Computer",
				os: "Windows 10",
				browser: "Chrome 54",
				product: "Evosus Service Pro"
			},
			{
				name: "Logout",
				dateTime: "",
				ip: "192.168.2.1",
				machine: "My Computer",
				os: "Windows 10",
				browser: "Chrome 54",
				product: "Evosus Service Pro"
			}
		]
	},
	timeOff: [
		{
			dateRange: { start:"", end:"" },
			reason: "",
			created: "",
			author: ""
		}
	],
	hours: {
		"inSeason": [
			{ "Monday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Tuesday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Wednesday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Thursday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Friday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Saturday": { start:"", end:"" } },
			{ "Sunday": { start:"", end:"" } },
		],
		"offSeason": [
			{ "Monday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Tuesday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Wednesday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Thursday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Friday": { start:"8:00 AM", end:"5:00 PM" } },
			{ "Saturday": { start:"", end:"" } },
			{ "Sunday": { start:"", end:"" } },
		]
	},
	schedule: [
		{
			date:{ created: "", udpated:"" },
			customer:"",
			route:"",
			task:"Deliver Spa",
			time: { estimate:"", elapsed:"", actual:"" }
		},
		{
			date:{ created: "", udpated:"" },
			customer:"",
			route:"",
			task:"Install Spa",
			time: { estimate:"", elapsed:"", actual:"" }
		}
	],
	notes: [
		{
			date:{ created: "", udpated:"" },
			author:"",
			text:"",
			attachments:[]
		}
	],
	audit:[]
}
//console.log(JSON.stringify(EMPLOYEE_MODEL,null,2));
