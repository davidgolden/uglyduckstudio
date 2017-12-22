// Portfolio Navigation Configure
var navButtons = document.getElementsByClassName('navButton');
var examples = document.getElementsByClassName('example');

for(var i=0; i<navButtons.length; i++) {
  navButtons[i].addEventListener('click', event => showThis(event.target.id));

  function showThis(type) {
    for(var i=0; i<navButtons.length; i++) {
      navButtons[i].classList.remove('activeNav');
    }
    navButtons[type].classList.add('activeNav');
    for(var i=0; i<examples.length; i++) {
      examples[i].classList.remove('disabled');
      if(!examples[i].classList.contains(''+type)) {
        examples[i].classList.add('disabled');
      }
    }
  }
}



// Modal Configure

var examplesInfo = {
  'tfc': {
    title: 'Table to Farm Compost - www.tabletofarmcompost.com',
    text: 'Composting is our other business! Launched in 2015, the curbside composting company has flourished in Durango, CO. When creating our brand, we wanted to ensure that the food scrap buckets would be easily recognizable from a distance as they sat on customers’ curbs. The bright colors and graphics create a tone of neighborhood friendliness. The #SaveTheScraps educational campaign aimed to market the ethical value of the company. Our website is custom coded with a neat javascript “Sign Up” map that automatically filters out potential customers outside our service area, pointing them toward an alternative option.',
    skills: 'Branding, Graphics, Print, Web Design, Javascript, HTML/CSS, Video',
    images: [
      '/assets/images/projects/tfc/TFC_Website.jpg',
      '/assets/images/projects/tfc/TFC_Branding.jpg',
      '/assets/images/projects/tfc/TFC_scraps.jpg',
      '/assets/images/projects/tfc/TFC_social.jpg'
    ]
  },
  'caddis': {
    title: 'Caddis Creative Solutions',
    text: 'Caddis Creative is a sustainable home renovations company in Falmouth, Maine. They’ve got the quirky, passionate, creative minds to change existing resources into something new. We had the great pleasure of helping them design a brand that emphasizes these unique qualities. Their commitment and excitement made it all the more fun!',
    skills: 'Branding',
    images: [
      '/assets/images/projects/caddis/Caddis_Branding.jpg',
      '/assets/images/projects/caddis/Caddis_Truck.jpg'
    ]
  },
  'sjca': {
    title: 'San Juan Citizens Alliance – sanjuancitizens.org',
    text: 'Emily, our graphic designer, has worked for the San Juan Citizens Alliance for several years fighting the good fight for the planet. Working within an existing web design and brand she revised the website’s structure and content with animated videos, custom interactive maps, and infographics. With David, our developer, she designed the photo documentary “Faces of Chaco” to help tell the story of northwest New Mexico’s oil and gas development in an alternative format.',
    skills: 'Graphics, Print, Web Design, HTML/CSS, Video',
    images: [
      '/assets/images/projects/sjca/SJCA_animas.jpg',
      '/assets/images/projects/sjca/SJCA_Faces.jpg',
      '/assets/images/projects/sjca/SJCA_Fracking.jpg',
      '/assets/images/projects/sjca/SJCA_Website.jpg'
    ]
  },
  'bowies': {
    title: 'Bowie’s Firewood',
    text: 'We designed this logo for a firewood, land clearing, and excavation company in Maine in 2014. It has since been used on hats, road signs, and as a truck decal to spread the word and grow the company significantly in a small town setting.',
    skills: 'Branding',
    images: [
      '/assets/images/projects/bowies/Bowies_Branding.jpg'
    ]
  },
  'optimal': {
    title: 'Optimal Design Consulting',
    text: 'Optimal Design Consulting is forging a new definition of health. That’s not an easy mission, so we help with graphics to help communicate their ideas and periodic web updates to keep them current. Our first project was to illustrate how Dr. Nasha Winters’ Terrain 10 impact our health through the metaphor of “Drops in a Bucket.”',
    skills: 'Graphics',
    images: [
      '/assets/images/projects/optimal/OptimalTerrain_Graphic.jpg'
    ]
  },
  'pol': {
    title: 'Path of Logic',
    text: 'Path of Logic is one of our most interesting and rewarding customers. The founder of the Non-Profit, Nichole Baker, is a professional mountain biker and pathologist with a passion for helping people. She combined all of her interests into Path of Logic, through which she uses money raised from mountain biking and bike touring to support and teach pathology students in Uganda each year. We got to help Nichole design her branding and website at the founding of the project and can’t wait to see where it leads!',
    skills: 'Branding, Web Design, HTML/CSS',
    images: [
      '/assets/images/projects/pol/PoL_Branding.jpg',
      '/assets/images/projects/pol/PoL_Website.jpg'
    ]
  },
  'airport': {
    title: 'YESforDRO!',
    text: 'YESforDRO! was a county ballot campaign to approve the construction of a new airport in Durango, CO. We helped with speculative branding as well as the design of a versatile infographic that condensed the complicated campaign into a simple eye-catching image.',
    skills: 'Branding, Graphics',
    images: [
      '/assets/images/projects/airport/Airport_Branding.jpg',
      '/assets/images/projects/airport/Airport_Graphic.jpg'
    ]
  },
  'swwha': {
    title: 'Southwest Women’s Health Associates – southwestwomenshealth.com',
    text: 'SWHA came to us with a mission to create a user and mobile friendly website for their patients. The website contains all documents needed upon office arrival, information about women’s health, and all contact information in a simple and welcoming format.',
    skills: 'Web Design, HTML/CSS',
    images: [
      '/assets/images/projects/swwh/SWHA_Website.jpg'
    ]
  }
}

var modalLeftButton = document.querySelector('#modalLeftButton');
var modalRightButton = document.querySelector('#modalRightButton');

$('#exampleModal').on('show.bs.modal', function (event) {
  var modalCall = $(event.relatedTarget); // Button that triggered the modal
  var modalSize = modalCall.data('size');
  var modal = $(this);
  var currentImage = 0;
  var modalID = modalCall.data('id');

  if(examplesInfo[modalID].images.length == '1') {
    modalLeftButton.style.display = 'none';
    modalRightButton.style.display = 'none';
  }

  else {
    modalLeftButton.style.display = 'block';
    modalRightButton.style.display = 'block';
  }

  function displayNextImage() {
  	// add 1 to currentimage
  	currentImage++;
  	// if currentimage is > images.length-1, reset back to 0, then display image
  	if(currentImage > examplesInfo[modalID].images.length-1) {
  		currentImage =0;
  		newImage(currentImage);
  	}
  	// if not, display image
  	else {
  		newImage(currentImage);
  	}
  }

  function displayLastImage() {
  	// subtract 1 from currentimage
  	currentImage--;
  	// if current image < image.length-image.length, reset to currentimage.length-1
  	if(currentImage < 0) {
  		currentImage = examplesInfo[modalID].images.length-1;
  		newImage(currentImage);
  	}
  	//if not, display image
  	else {
  		newImage(currentImage);
  	}
  }

  function newImage(currentImage) {
    modal.find('.modal-img').html("<img src='"+examplesInfo[modalID].images[currentImage]+"'>");
  }

  modalLeftButton.addEventListener('click', function() {
    displayLastImage();
  });

  modalRightButton.addEventListener('click', function() {
    displayNextImage();
  })

  modal.find('.modal-img').html("<img src='"+examplesInfo[modalID].images[currentImage]+"'>");
  modal.find('.modal-text').html('<h1>Client:&nbsp;</h1><p>'+examplesInfo[modalID].title+'</p><br><p>'+examplesInfo[modalID].text+'</p><br><h1>Skills:&nbsp;</h1><p>'+examplesInfo[modalID].skills+'</p>');
  if(modalSize === 'large') {
    modal.find('.modal-dialog').addClass('modal-lg');
  }
  else {
    modal.find('.modal-dialog').removeClass('modal-lg');
  }

})
