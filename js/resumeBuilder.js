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
        "date": "since 2013",
        "description": "Learning Spanish",
        "images": "images/spanish.jpg"
    }, {
        "title": "Baking",
        "date": "since 1999",
        "description": "I love to bake!",
        "images": "images/baking.jpg"
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
        "dates": 2006,
        "url": "https://www.uni-paderborn.de/en/universitaet/",
        "majors": ["Dancing", "Accounting"]
    }, {
        "name": "Maastricht University",
        "location": "Maastricht, The Netherlands",
        "degree": "M.Sc. International Business",
        "dates": 2008,
        "url": "https://www.maastrichtuniversity.nl/",
        "majors": ["Dancing", "Accounting"]
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/"
    }]
};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
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

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
};

// shows work
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedWorkTitle = formattedWork + formattedTitle;
        $(".work-entry:last").append(formattedWorkTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// shows education
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedEducationName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedEducationName);

        var formattedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedEducationLocation);

        var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedEducationDegree);

        var formattedEducationDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedEducationDate);

        var formattedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedEducationMajor);
    }
};

education.display();

// shows projects
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedProjectDate);

        formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedProjectImage);
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
