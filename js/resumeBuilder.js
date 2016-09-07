//OBJECTS FOR RESUME SECTIONS
var bio = {
    'name': 'Kyle Aikman',
    'role': 'Web Developer',
    'welcomeMessage': 'hello',
    'biopic': 'images/fry.jpg',
    'contacts': {
        'mobile': '(###)-###-####',
        'email': 'kaaikman@gmail.com',
        'github': 'kaaikman',
        //'twitter': 'n/a',
        'location': 'New Jersey'
    },
    'skills': ['HTML', 'CSS', 'JS', '...'],
    'display': function() {
        //prepend
        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
        //append
        $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
        $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
        $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
        $('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
        // for(var contactType in bio.contacts) {
        //   var HTMLcontactMethod = 'HTML' + Object.keys(bio.contacts)[0];
        //   console.log(HTMLcontactMethod);
        //   console.log(bio.contacts[contactType]);
        //   $('#topContacts').append(HTMLcontactMethod.replace('%data%', bio.contacts[contactType]));
        // }
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $('#header').append(HTMLskills.replace('%data%', bio.skills[i]));
        }
    }
};

var education = {
    'schools': [{
        'name': 'Monmouth University',
        'location': 'West Long Branch, NJ',
        'dates': '2014',
        'url': 'http://www.monmouth.edu/',
        'majors': ['Mathematics'],
        'degree': 'B.S.'
    }],
    'onlineCourse': [{
        'title': 'Front-End Web Development',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'https://www.udacity.com/'
    }, {
        'title': 'Digital Analytics',
        'school': 'University of British Columbia',
        'dates': '2015',
        'url': 'http://www.ubc.ca/'
    }],
    'display': function() {
        for (var i = 0; i < education.schools.length; i++) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url) + HTMLschoolDegree.replace('%data%', education.schools[i].degree));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[i].dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[i].location));
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[i].majors[0]));
        }
        $('#education').append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourse.length; i++) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourse[i].title).replace('#', education.onlineCourse[i].url) + HTMLonlineSchool.replace('%data%', education.onlineCourse[i].school));
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourse[i].dates));
            $('.education-entry:last').append(HTMLonlineURL.replace('%data%', education.onlineCourse[i].url).replace('#', education.onlineCourse[i].url));
        }
    }
};

var work = {
    'jobs': [{
        'employer': 'Ward Wight SIR',
        'title': 'Admin',
        'location': 'Manasquan, NJ',
        'dates': '1/2013 - Current',
        'description': 'A lot of stuff',
        'url': 'http://wardwight.com'
    }, {
        'employer': 'Monmouth University',
        'title': 'Researcher',
        'location': 'West Long Branch, NJ',
        'dates': 'Summer 2014',
        'description': 'Statistics research',
        'url': 'http://www.monmouth.edu/'
    }],
    'display': function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer).replace('#', work.jobs[i].url) + HTMLworkTitle.replace('%data%', work.jobs[i].title));
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
        }
    }
};

var projects = {
    'projects': [{
        'title': '1st Project',
        'dates': 'TBD',
        'description': 'n/a',
        'images': [
            'http://placekitten.com/100/200',
            'http://placekitten.com/500/200'
        ]
    }, {
        'title': '2nd Project',
        'dates': 'TBD',
        'description': 'n/a',
        'images': [
            'http://placekitten.com/400/200',
            'http://placekitten.com/200/200'
        ]
    }],
    'display': function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace('#', '#'));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
            for (var i2 = 0; i2 < projects.projects[i].images.length; i2++) {
                $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[i].images[i2]));
            }
        }
    }
};

//CALL DISPLAYS

bio.display();
education.display();
work.display();
projects.display();

//MAP

$('#mapDiv').append(googleMap);

//CSS: rubric req. to be done in js?

$('#lets-connect').children('h2').css('color', 'white');

//OTHER

// $(document).click(function(loc) {
//   logClicks(loc.pageX, loc.pageY);
// });
