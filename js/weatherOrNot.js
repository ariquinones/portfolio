function openWeatherOrNot () {
	console.log("weatherOrNotContentView")
	function backHome () {
		mainContainer.style.top = "20%"
		projectImagesContainer.innerHTML = ''
		projectDetailsContainer.innerHTML = ''
		projectImagesContainer.style.background = "rgb(41,110,180)" 
		projectDetailsContainer.style.background = "rgb(41,110,180)" 
		mainContainer.innerHTML = 	'<div class="mainImageContainer">\
													<img class="profilePicture" src="images/advancedRecovery.jpg">' +
												'</div>' +
												'<h1 class="projectName">Advanced Recovery</h1>'+
												'<h2 class="projectSummary">Web App Development</h2>'+
												'<button class="links">View</button>' +
												'<div class="navArrowsContainer">\
													<img class="navigationArrow" id="previous" src="images/prevArrow.svg">\
													<img class="navigationArrow" id="next" src="images/nextArrow.svg">\
												</div>'
	document.querySelector("#next").addEventListener('click',changeToDoList)
	document.querySelector("#previous").addEventListener('click',changeToCdxProject)
	document.querySelector('.links').addEventListener('click', openWeatherOrNot)
	document.querySelector(".sidePathContainer").style.display = "initial"
	}
	document.querySelector(".sidePathContainer").style.display = "none"
		if( /Android|webOS|iPhone|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		mainContainer.style.top = "-45%"
	} else if ( /iPad|BlackBerry/i.test(navigator.userAgent) )  {
		mainContainer.style.top = "-35%"
	} else {
		mainContainer.style.top = "-48%"
	}
		mainContainer.innerHTML = '<div class="homeArrowContainer">\
									<img class="homeArrow" src="images/arrow-bottom.svg">\
								</div>'
	document.querySelector(".homeArrow").addEventListener("click", backHome)

	document.querySelector(".projectDetailsContainer").style.background = "rgb(41,110,180)" 
	projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Overview</h2>' +
										'<h3 class="projectDetailOverview">A physical therapy web app for better healthcare\
										 communication between a patient and their physical therapist. Building an at home exercise\
										  treatment regimen for a patient to better assist them in their recovery journey.</h3>' +
										  '<img class="imageContainerDesktopLook" src="images/advancedRecoveryMac.jpg">' +
										 '<a  href="http://ariquinones.github.io/pt4home/#splash" target="_blank"><span id="goto">Visit: </span><button class="githubProject">Advanced Recovery App</button></a>' +
										 '<img class="arrow buttonRight" src="images/arrow-right.svg">'
	document.querySelector('.buttonRight').addEventListener('click', page2)
	
	function page2 () {
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Concept</h2>' +
										'<h3 class="projectDetailOverview">Built on React.js a web based application \
										which focuses on a niche market for a better patient journey experience in the\
										 physical therapy industry that has not been there before.</h3>' +
										 '<img class="imageContainerMobileView" src="images/advancedRecoveryIpad.jpg">' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page3)
		document.querySelector('.buttonLeft').addEventListener('click', openWeatherOrNot)
	}

	function page3 () {
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
											'<h3 class="projectDetailOverview">User authentification to maintain user safety. Responsive and persistant database</h3>' +
										 '<img class="imageContainerMobileView" src="images/advancedRecoveryMobile.jpg">' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg">'
		
		document.querySelector('.buttonLeft').addEventListener('click', page2)
	}

}