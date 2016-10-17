var work = {
    "jobs": [{
        "employer": "Deloitte",
        "title": "Audit Supervisor",
        "location": "Amsterdam, The Netherlands",
        "dates": "2008-2012",
        "description": "Audit work"
    }, {
        "employer": "Otto (GmbH & Co KG)",
        "title": "Finance Manager",
        "location": "Hamburg, Germany",
        "dates": "since 2012",
        "description": "IFRS Specialist"
    }]
};

var projects = {
    "projects": [{
        "title": "German-Spanish Tandem",
        "dates": "since 2013",
        "description": "Learning Spanish",
        "images": ["images/spanish.jpg", "images/spanish.jpg"]
    }, {
        "title": "Baking",
        "dates": "since 1999",
        "description": "I love to bake!",
        "images": ["images/baking.jpg", "images/oven.jpg"]
    }]
};

var bio = {
    "name": "Agnes Mondorf",
    "role": "Front-End Developer",
    "welcomeMessage": "You are looking for a FE Developer? Look no further. Welcome to my online resume!",
    "biopic": "images/me.jpg",
    "contacts": {
        "mobile": "0049 1578751111",
        "email": "agnes@test.dk",
        "github": "amondorf",
        "location": "Hamburg, Germany"
    },
    "skills": [
        "humor", "talent", "taste", "number-lover"
    ]
};

var education = {
    "schools": [{
        "name": "Paderborn University",
        "location": "Paderborn, Germany",
        "degree": "B.A. International Business",
        "dates": "2006",
        "url": "https://www.uni-paderborn.de/en/universitaet/",
        "majors": ["Dancing", " Accounting"]
    }, {
        "name": "Maastricht University",
        "location": "Maastricht, The Netherlands",
        "degree": "M.Sc. International Business",
        "dates": "2008",
        "url": "https://www.maastrichtuniversity.nl/",
        "majors": ["Dancing", " Accounting"]
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]
};

$("#topContacts").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts["mobile"]));
$("#header").append(HTMLemail.replace("%data%", bio.contacts["email"]));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts["github"]));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts["location"]));

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts["mobile"]));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts["email"]));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts["github"]));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts["location"]));

// shows skills
bio.display = function() {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

// shows work
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

        var formattedWorkTitle = formattedWork + formattedTitle;
        $(".work-entry:last").append(formattedWorkTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// shows education
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedEducationName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedEducationUrl = HTMLschoolURL.replace("%data%", education.schools[i].url);
        var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedEducationName + formattedEducationUrl + formattedEducationDegree);

        var formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedEducationDates);

        var formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedEducationLocation);

        var formattedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedEducationMajor);
    };

    // shows online courses
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineUrl);
    }
};

education.display();

// shows projects
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);

        formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);

        for (image in projects.projects[i].images) {
            formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};

projects.display();

// click function
$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

// button to capitalize last name
$("#main").append(internationalizeButton);

function inName() {
    var newArray = [];
    newArray = bio.name.split(" ");
    var uppercase = newArray[1].toUpperCase();
    var final = newArray[0] + " " + uppercase;
    return final;
};

// shows a map
$("#mapDiv").append(googleMap);
