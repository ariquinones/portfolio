function openFencing () {
	console.log("fencing&steelArt")
	function backHome () {
		mainContainer.style.top = "20%"
		projectImagesContainer.innerHTML = ''
		projectDetailsContainer.innerHTML = ''
		projectImagesContainer.style.background = "rgb(41,110,180)" 
		projectDetailsContainer.style.background = "rgb(41,110,180)" 
		mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/fencingAndSteelArt.png">' +
								'</div>' +
								'<h1 class="projectName">F&S Art </h1>'+
								'<h2 class="projectSummary">Website Design</h2>'+
								'<button class="links">View</button>' +
								'<div class="navArrowsContainer">\
									<img class="navigationArrow" id="previous" src="images/prevArrow.svg">\
									<img class="navigationArrow" id="next" src="images/nextArrow.svg">\
								</div>'
	document.querySelector("#next").addEventListener('click',changeToHomePage)
	document.querySelector("#previous").addEventListener('click',changeToDoList)
	document.querySelector('.links').addEventListener('click', openFencing)
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
	document.querySelector(".projectDetailsContainer").style.background = 'rgb(41,110,180)' 
	projectImagesContainer.style.background = 'rgb(41,110,180)' 
	projectImagesContainer.style.backgroundImage = "url('./images/fencingAndSteelArtDesktopZ.png')"
	projectImagesContainer.style.backgroundPosition = "center"
	projectDetailsContainer.innerHTML = '<h1 class="projectDescription">Website Design</h1>' +
										'<h2 class="overview">Overview</h2>' +
										'<h3 class="projectDetailOverview">The Fencing and Steel Art website</h3>' +
										 '<a  href="http://fencingandsteelart.com/" target="_blank"><span id="goto">Visit: </span><button class="githubProject">Fencing & Steel Art</button></a>' +
										 '<img class="arrow buttonRight" src="images/arrow-right.svg">'
	document.querySelector('.buttonRight').addEventListener('click', page2)
	// document.querySelector('.buttonLeft').addEventListener('click', prevPage)
	function page2 () {
		projectImagesContainer.style.backgroundImage = "url('./images/fencingAndSteelArtIpadZ.png')"
		projectImagesContainer.style.backgroundPosition = "center"
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">Website Design</h1>' +
										'<h2 class="overview">Concept</h2>' +
										'<h3 class="projectDetailOverview">Build this website for Fencing and Steel Art company to showcase their work and acquire new customers</h3>' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page3)
		document.querySelector('.buttonLeft').addEventListener('click', openFencing)
	}
	function page3 () {
		projectImagesContainer.style.backgroundImage = "url('./images/fencingAndSteelArtIpadLaydownZ.png')"
		projectImagesContainer.style.backgroundPosition = "center"
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">Website Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">A simple user experience to view the best Fencing & Steel Art projects and be able to get a free estimate at any moment.</h3>' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg">'
		document.querySelector('.buttonLeft').addEventListener('click', page2)
	}
	// function page4 () {
	// 	projectImagesContainer.style.backgroundImage = "url('./images/toDoListIpadView.png')"
	// 	projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
	// 									'<h2 class="overview">Designs</h2>' +
	// 									 '<img class="arrow buttonLeft" src="images/arrow-left.svg">'
	// 	document.querySelector('.buttonLeft').addEventListener('click', page3)
	// }
}