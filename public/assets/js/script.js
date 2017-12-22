document.getElementById('titlePage').style.height = window.innerHeight+'px';

// *********** Start NavBar Script ***************
var navBar = document.getElementsByTagName('nav')[0];
var scrollIcon = document.getElementById('scrollIcon');
var mobileNavOpen = false;
var scrollDown = false;
var navLink = document.getElementsByClassName('navLink');
var isSmall;

function turnOnMobile() {
	navBar.classList.remove('normalNav');
	navBar.classList.add('navOnScroll');
}

function turnOffMobile() {
	navBar.classList.remove('navOnScroll');
	navBar.classList.add('normalNav');
	navBar.classList.remove('mobileNav');
}

function checkY(y) {
	if(window.scrollY > (y*.25)) {
		turnOnMobile();
		scrollDown = true;
	}
	// When you scroll up, turn off mobile
	else if(isSmall == false) {
		turnOffMobile();
		scrollDown = false;
	}
}

function checkX(x) {
	if(x <= 960) {
		turnOnMobile();
		isSmall = true;
	}
	else {
		turnOffMobile();
		isSmall = false;
	}
}

// Find screen size, turn on mobile if applicable
window.addEventListener('load', function() {
	checkX(window.innerWidth);
})

// When you scroll down, turn on mobile
window.addEventListener('scroll', function() {
	checkY(window.innerHeight);
});
// When screen is resized, find out size, then turn on mobile if applicable
window.addEventListener('resize', function() {
	//resize background image
	document.getElementById('titlePage').style.height = window.innerHeight+'px';
	checkX(window.innerWidth);
	if(scrollDown == true) {
		checkY(window.innerHeight);
	}
})

// On click of hamburger icon
scrollIcon.addEventListener('click', function() {
	// If mobileNav is closed, open it
	if(mobileNavOpen == false) {
		navBar.classList.add('mobileNav');
		mobileNavOpen = true;
	}
	// If mobileNav is open, close it
	else {
		navBar.classList.remove('mobileNav');
		mobileNavOpen = false;
	}
})

for(var i=0; i<navLink.length; i++) {
	navLink[i].addEventListener('click', function() {
		navBar.classList.remove('mobileNav');
		mobileNavOpen = false;
		checkY(window.innerHeight);
	})
}
// *********** End NavBar Script ***************


// *********** Start Portfolio Script ***************

var projects = [
	{
		name: "tfc",
		imgURL: "assets/images/tfc.png",
		link: "http://www.david-golden.com/TFC2",
		desc: "<span style='color: #609994'>Table to Farm Compost<br>[Still In Development]</span> <br><br> This website designed for a 'curbside composting' company utilizes vanilla HTML, CSS, and JS. Although this website is still a work in progress, take a look at the JS/CSS transitions, and especially the Sign Up page which utilizes Google Maps API.",
		tags: ["HTML", "CSS", "JavaScript", "Google Maps API", "Stripe API"]
	},
	{
		name: "todo",
		imgURL: "assets/images/todo.jpg",
		link: "http://www.david-golden.com/todo",
		desc: "<span style='color: #609994'>To Do List</span> <br><br> A simple to do list application that allows users to add and delete items from a list.",
		tags: ["HTML", "CSS", "JavaScript", "jQuery"]
	},
	{
		name: "colorgame",
		imgURL: "assets/images/colorgame.jpg",
		link: "http://www.david-golden.com/colorgame",
		desc: "<span style='color: #609994'>Color Game</span> <br><br> A fun RGB color guessing game that generates a random color, then the player must try to guess which colored square is a match!",
		tags: ["HTML", "CSS", "JavaScript"]
	}

];

var displayProject = document.getElementById('displayProject');
var displayImage = document.getElementById('displayImage');
var displayDesc = document.getElementById('displayDesc');
var displayTags = document.getElementById('displayTags');
var nextProject = document.getElementsByClassName('fa-chevron-right')[0];
var lastProject = document.getElementsByClassName('fa-chevron-left')[0];
var currentProject = 0;

showProject(currentProject);

lastProject.addEventListener('click', function() {
	displayLastProject();
})

nextProject.addEventListener('click', function() {
	displayNextProject();
})

function showProject(currentProject) {
	displayImage.innerHTML = "<a href='"+projects[currentProject].link+"'target='_blank'><img src='"+projects[currentProject].imgURL+"'></a>";
	displayDesc.innerHTML = "<p>"+projects[currentProject].desc+"</p>";
	displayTags.innerHTML = "";
	for(var i = 0; i<projects[currentProject].tags.length; i++) {
		displayTags.innerHTML += "<span>"+projects[currentProject].tags[i]+"</span>";
	}
}

function displayNextProject() {
	// add 1 to currentproject
	currentProject++;
	// if currentproject is > projects.length-1, reset back to 0, then display project
	if(currentProject > projects.length-1) {
		currentProject =0;
		showProject(currentProject);
	}
	// if not, display project
	else {
		showProject(currentProject);
	}
}

function displayLastProject() {
	// subtract 1 from currentproject
	currentProject--;
	// if current project < project.length-project.length, reset to currentproject.length-1
	if(currentProject < 0) {
		currentProject = projects.length-1;
		showProject(currentProject);
	}
	//if not, display project
	else {
		showProject(currentProject);
	}
	
}
