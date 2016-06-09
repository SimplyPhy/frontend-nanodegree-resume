/* **********************************************************************
**********											 		   **********
**********			    Online Resume Project		   		   **********
**********					     By: Eric Phy				   **********
**********											 		   **********
********************************************************************** */


// Bio object, containing biographical, contact, and introductory information
var bio = {
	name: "Eric Phy",
	role: "Web Developer",
	contacts: {
		mobile: "999-999-9999",
		email: "misterme@gmail.com",
		github: "https://github.com",
		twitter: "@misterme",
		location: "Rawlins, WY"
	},
	welcomeMessage: "Welcome to my online resume",
	skills: [ "Web development", " Tennis", " Running" ],
	bioPic: "http://41.media.tumblr.com/4467dbf9616c0b3a1d69b1fdecb29f9e/tumblr_mnsc0gqtue1rw872io2_250.jpg",
};

// Work object, containing information on previous employers
var work = {
	jobs: [
		{
			employer: "Employer 1",
			title: "Position 1",
			location: "Thedford, NE",
			dates: "2001-2005",
			description: "This was quite a job."
		},
		{
			employer: "Employer 2",
			title: "Position 2",
			location: "Inwood, IA",
			dates: "2006-2010",
			description: "This was also quite a job."
		},
		{
			employer: "Employer 3",
			title: "Position 3",
			location: "Plains, KA",
			dates: "2011-present",
			description: "This was really quite a job."
		}
	],
};

// Project object, containing information on previous projects
var projects = {
	projects: [
		{
			title: "Project 1",
			dates: "2010-2012",
			description: "Best project ever!",
			images: [
				"https://d.ibtimes.co.uk/en/full/185667/bending-light.jpg?w=400",
				"http://www.windows2universe.org/the_universe/images/ngc2440_hst2_med.jpg",
				"http://www.windows2universe.org/the_universe/images/cosmic_gc3_new_med.gif"
			]
		},
		{
			title: "Project 2",
			dates: "2012-2014",
			description: "Second best project ever!",
			images: [
				"http://planetfacts.org/wp-content/uploads/2010/06/Barred-Spiral-Galaxy.jpg",
				"http://static.businessinsider.com/image/4f7363746bb3f7e22e00001c/image.jpg",
				"http://www.astrologersr.com/media/galaxy%201.jpg"
			]
		},
		{
			title: "Project 3",
			dates: "2014-2016",
			description: "Third best project ever!",
			images: [
				"http://www.philipcoppens.com/solarsystem.gif",
				"http://dribbble.s3.amazonaws.com/users/44824/screenshots/893150/solar_system.jpg",
				"http://media-cache-ec0.pinimg.com/736x/be/aa/82/beaa824d8cd230d65ea1567587d253ca.jpg"
			]
		}

	],
};

// Education object, containing school and online course information
var education = {
	schools: [
		{
			name: "School A",
			location: "TRH Ranch, WY",
			degree: "Bachelor of Uselessness",
			majors: [ "Waste", " Time" ],
			dates: "2008-2012",
			url: "www.google.com"
		},
		{
			name: "School B",
			location: "Des Moines, IA",
			degree: "Master of Debt",
			majors: [ "Spending", " Money" ],
			dates: "2012-2016",
			url: "www.images.google.com"
		}
	],
	onlineCourses: [
		{
			title: "course 1",
			school: "online school 1",
			dates: "2008-2010",
			url: "www.bing.com"
		},
		{
			title: "course 1",
			school: "online school 2",
			dates: "2010-2012",
			url: "www.yahoo.com"
		},
		{
			title: "course 3",
			school: "online school 3",
			dates: "2012-2016",
			url: "www.soundhound.com"
		}
	]
};

/*
	This section contains functions to display portions of the webpage by
	using .replace to replace the %data% placeholders in helper.js with
	the object data contained above.
*/


// Function to display bio section
bio.display = function() {
	if(bio) {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
		var formattedWelcomePic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedWelcomePic);
	}

	// Display contact information in bio section
	if(bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGitHub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		// Display contact information in document footer section
		var formattedMobileFooter = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedMobileFooter);
		var formattedEmailFooter = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedEmailFooter);
		var formattedGitHubFooter = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedGitHubFooter);
		var formattedTwitterFooter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#footerContacts").append(formattedTwitterFooter);
		var formattedLocationFooter = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedLocationFooter);
	}

	// Display skills in bio section
	if(bio.skills) {
		$("#header").append(HTMLskillsStart);

		for(var key in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[key]);
			$("#skills-h3").append(formattedSkill);
		}
	}
};

// Function to display work section
work.display = function() {
	for(var jobs in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace
			("%data%", work.jobs[jobs].employer);
		// $(".work-entry:last").append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace
			("%data%", work.jobs[jobs].title);
		// $(".work-entry:last").append(formattedTitle);
		var formattedLocation = HTMLworkLocation.replace
			("%data%", work.jobs[jobs].location);
		// $(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace
			("%data%", work.jobs[jobs].dates);
		// $(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace
			("%data%", work.jobs[jobs].description);
		// $(".work-entry:last").append(formattedDescription);

		// The following code does basically the same thing as the commented out code
		// above, just with fewer lines

		var formattedEmployerInfo = formattedEmployer +
			formattedTitle + formattedLocation + formattedDates + formattedDescription;

		$(".work-entry:last").append(formattedEmployerInfo);
	}
};

// Function to display project section
projects.display = function() {
	for(var key in projects.projects){
	$("#projects").append(HTMLprojectStart);
	var formattedProjectTitle = HTMLprojectTitle.replace
		("%data%", projects.projects[key].title);
	$(".project-entry:last").append(formattedProjectTitle);
	var formattedProjectDates = HTMLprojectDates.replace
		("%data%", projects.projects[key].dates);
	$(".project-entry:last").append(formattedProjectDates);
	var formattedProjectDescription = HTMLprojectDescription.replace
		("%data%", projects.projects[key].description);
	$(".project-entry:last").append(formattedProjectDescription);
	for(var photo in projects.projects[key].images) {
		var formattedProjectImages = HTMLprojectImage.replace
			("%data%", projects.projects[key].images[photo]);
		$(".project-entry:last").append(formattedProjectImages);
		}
	}
};

// Function to display education section
education.display = function() {
	for(var key in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedEduName = HTMLschoolName.replace
			("%data%", education.schools[key].name);
		$(".education-entry:last").append(formattedEduName);

		var formattedEduLocation = HTMLschoolLocation.replace
			("%data%", education.schools[key].location);
		$(".education-entry:last").append(formattedEduLocation);

		var formattedEduDegree = HTMLschoolDegree.replace
			("%data%", education.schools[key].degree);
		$(".education-entry:last").append(formattedEduDegree);

		var formattedEduMajor = HTMLschoolMajor.replace
			("%data%", education.schools[key].majors);
		$(".education-entry:last").append(formattedEduMajor);

		var formattedEduDates = HTMLschoolDates.replace
			("%data%", education.schools[key].dates);
		$(".education-entry:last").append(formattedEduDates);

		var formattedEduURL = HTMLschoolURL.replace
			("%data%", education.schools[key].url);
		$(".education-entry:last").append(formattedEduURL);
	}
	// Display online courses in the education section
	if (education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for(var key2 in education.onlineCourses) {
			var formattedOnlineTitle = HTMLonlineTitle.replace
				("%data%", education.onlineCourses[key2].title);
			$(".education-entry:last").append(formattedOnlineTitle);

			var formattedOnlineSchool = HTMLonlineSchool.replace
				("%data%", education.onlineCourses[key2].school);
			$(".education-entry:last").append(formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace
				("%data%", education.onlineCourses[key2].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace
				("%data%", education.onlineCourses[key2].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};

// Display Google Map
if(googleMap){
	$("#mapDiv").append(googleMap);
}

// Call the above display functions
education.display();
work.display();
projects.display();
bio.display();


/*
	Below are unused functions from the Udacity Course: JavaScript Basics
*/


// Display Internationalize Button at bottom of page
// if(internationalizeButton) {
// 	$("#main").append(internationalizeButton);
// 	var inName = function(name) {
// 		name = name.trim().split(" ");
// 		name[1] = name[1].toUpperCase();
// 		name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 		return name[0] + " " + name[1];
// 	};
// }

// Function to log mouse clicks
// $(document).click(function(loc) {
// 	// logClicks(event.pageX, event.pageY); // this does the same thing as below
// 	var x = loc.pageX;
// 	var y = loc.pageY;
// 	logClicks(x, y);
// });