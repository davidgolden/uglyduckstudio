// Portfolio Navigation Configure
var navButtons = document.getElementsByClassName('navButton');
var examples = document.getElementsByClassName('example');

for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', event => showThis(event.target.id));

    function showThis(type) {
        for (var i = 0; i < navButtons.length; i++) {
            navButtons[i].classList.remove('activeNav');
        }
        navButtons[type].classList.add('activeNav');
        for (var i = 0; i < examples.length; i++) {
            examples[i].classList.remove('disabled');
            if (!examples[i].classList.contains('' + type)) {
                examples[i].classList.add('disabled');
            }
        }
    }
}


// Modal Configure

var examplesInfo = {
    'tfc': {
        title: 'Table to Farm Compost',
        website: "https://www.tabletofarmcompost.com",
        text: 'Table to Farm was our first business! Launched in 2015, the curbside composting company has flourished in Durango, CO. We’ve since sold the company, but still maintain its brand and website. We built the company’s brand to be neighborhood friendly and easily recognizable (so people would notice buckets on distant curbs!). The #SaveTheScraps educational campaign aimed to market the ethical value of the company.',
        skills: 'Branding, Graphics, Print, Web Design, Javascript, HTML/CSS, Video',
        images: [
            './assets/images/projects/tfc/TFC_Website.jpg',
            './assets/images/projects/tfc/TFC_Branding.jpg',
            './assets/images/projects/tfc/TFC_scraps.jpg',
            './assets/images/projects/tfc/TFC_social.jpg'
        ]
    },
    'caddis': {
        title: 'Caddis Creative Solutions',
        text: 'Caddis Creative is a sustainable home renovations company in Falmouth, Maine. They’ve got the quirky, passionate, creative minds to change existing resources into something new. We had the great pleasure of helping them design a brand that emphasizes these unique qualities. Their commitment and excitement made it all the more fun!',
        skills: 'Branding',
        images: [
            './assets/images/projects/caddis/Caddis_Branding.jpg',
            './assets/images/projects/caddis/Caddis_Truck.jpg'
        ]
    },
    'sjca': {
        title: 'San Juan Citizens Alliance – sanjuancitizens.org',
        text: 'The San Juan Citizens Alliance is fighting a serious fight for Southwest Colorado’s air, land, and water. Working within an existing web design and brand we revised the website’s structure and content with animated videos, custom interactive maps, and infographics.',
        skills: 'Graphics, Print, Web Design, HTML/CSS, Video',
        images: [
            './assets/images/projects/sjca/SJCA_animas.jpg',
            './assets/images/projects/sjca/SJCA_Faces.jpg',
            './assets/images/projects/sjca/SJCA_Fracking.jpg',
            './assets/images/projects/sjca/SJCA_Website.jpg'
        ]
    },
    'bowies': {
        title: 'Bowie’s Firewood',
        text: 'We designed this logo for a firewood, land clearing, and excavation company in Maine in 2014. It has since been used on hats, road signs, and as a truck decal to spread the word and grow the company significantly in a small town setting.',
        skills: 'Branding',
        images: [
            './assets/images/projects/bowies/Bowies_Branding.jpg'
        ]
    },
    'pol': {
        title: 'Path of Logic',
        text: 'The founder of Path of Logic, Nichole Baker, is a professional mountain biker and pathologist with a passion for helping people. She combined all of her interests into Path of Logic, through which she uses money raised from mountain biking and bike touring to support and teach pathology students in Uganda each year. We got to help Nichole design her branding and website at the founding of the project!',
        skills: 'Branding, Web Design, HTML/CSS',
        images: [
            './assets/images/projects/pol/PoL_Branding.jpg',
        ]
    },
    'drnasha': {
        title: "Dr. Nasha",
        website: "https://www.drnasha.com",
        text: "Dr. Nasha Winters is a global healthcare authority in integrative cancer research. She presents to and consults with physicians all around the world. We helped Dr. Nasha develop her personal brand—serious… but not too serious! Through her website, infographics, and powerpoint presentations, we help Dr. Nasha communicate complex ideas to a variety of audiences.",
        skills: "Branding, Graphics, Web Design",
        images: [
            "./assets/images/projects/drnasha/DRN_Website.png",
            "./assets/images/projects/drnasha/DrNasha_Brand-01.png",
            "./assets/images/projects/drnasha/Nasha_Graphic.png",
            './assets/images/projects/optimal/OptimalTerrain_Graphic.jpg'
        ]
    },
    'goldenmay': {
        title: "Golden May Book Coaching & Editing",
        website: "https://www.goldenmayediting.com",
        text: "Our co-founder Emily is a fiction writing coach and editor, in addition to her design work! Golden May helps writers define and shape their words so they reach and resonate with their intended audiences. The company’s brand is professional, but approachable. We also built and regularly maintain the company’s website and social media content.",
        skills: "Branding, Graphics, Web Design",
        images: [
            "./assets/images/projects/goldenmay/Golden_May_Handout.png",
            "./assets/images/projects/goldenmay/GOLDENMAY_BRAND_FINAL-01.png",
            "./assets/images/projects/goldenmay/GoldenMayWebsite.png",
        ],
    },
    "applyed": {
        title: "ApplyEd Learning",
        text: "Corrie at ApplyEd is an actor, educator, and voiceover artist who tutors kids to help support her creative pursuits. During her years in the art world, she discovered there are other creatives interested in tutoring as a side gig to support their own dreams—so she started ApplyED to help give people the skills they need to start tutoring businesses of their own. We helped Corrie create a fun, friendly, professional brand for the company.",
        skills: "Branding",
        images: [
            "./assets/images/projects/applyed/ApplyEd_Logo.png",
        ]
    }
};

var modalLeftButton = document.querySelector('#modalLeftButton');
var modalRightButton = document.querySelector('#modalRightButton');

$('#exampleModal').on('show.bs.modal', function (event) {
    var modalCall = $(event.relatedTarget); // Button that triggered the modal
    var modalSize = modalCall.data('size');
    var modal = $(this);
    var currentImage = 0;
    var modalID = modalCall.data('id');

    if (examplesInfo[modalID].images.length == '1') {
        modalLeftButton.style.display = 'none';
        modalRightButton.style.display = 'none';
    } else {
        modalLeftButton.style.display = 'block';
        modalRightButton.style.display = 'block';
    }

    function displayNextImage() {
        // add 1 to currentimage
        currentImage++;
        // if currentimage is > images.length-1, reset back to 0, then display image
        if (currentImage > examplesInfo[modalID].images.length - 1) {
            currentImage = 0;
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
        if (currentImage < 0) {
            currentImage = examplesInfo[modalID].images.length - 1;
            newImage(currentImage);
        }
        //if not, display image
        else {
            newImage(currentImage);
        }
    }

    function newImage(currentImage) {
        modal.find('.modal-img').html("<img src='" + examplesInfo[modalID].images[currentImage] + "'>");
    }

    modalLeftButton.addEventListener('click', function () {
        displayLastImage();
    });

    modalRightButton.addEventListener('click', function () {
        displayNextImage();
    })

    modal.find('.modal-img').html("<img src='" + examplesInfo[modalID].images[currentImage] + "'>");
    var text = '<h1>Client:&nbsp;</h1><p>' + examplesInfo[modalID].title + '</p><br><p>' + examplesInfo[modalID].text + '</p><br><h1>Skills:&nbsp;</h1><p>' + examplesInfo[modalID].skills + '</p>';
    if (examplesInfo[modalID].website) {
        text += `<br><h1>Website:&nbsp;</h1><a target="_blank" href=${examplesInfo[modalID].website}>${examplesInfo[modalID].website.replace(/https:\/\//, "")}</a>`;
    }
    modal.find('.modal-text').html(text);

    if (modalSize === 'large') {
        modal.find('.modal-dialog').addClass('modal-lg');
    } else {
        modal.find('.modal-dialog').removeClass('modal-lg');
    }

})
