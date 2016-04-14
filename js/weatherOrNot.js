function openWeatherOrNot () {
	console.log("weatherOrNotContentView")
	function backHome () {
		mainContainer.style.top = "20%"
		projectImagesContainer.innerHTML = ''
		projectDetailsContainer.innerHTML = ''
		projectImagesContainer.style.background = "rgb(41,110,180)" 
		projectDetailsContainer.style.background = "rgb(41,110,180)" 
		mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/weatherOrNot.png">' +
								'</div>' +
								'<h1 class="projectName">Weather Or Not App</h1>'+
								'<h2 class="projectSummary">Weather App Development</h2>'+
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
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		mainContainer.style.top = "-35%"
	} else {
		mainContainer.style.top = "-48%"
	}
	mainContainer.innerHTML = '<div class="homeArrowContainer">\
									<img class="homeArrow" src="images/arrow-bottom.svg">\
								</div>'
	document.querySelector(".homeArrow").addEventListener("click", backHome)

	document.querySelector(".projectDetailsContainer").style.background = "rgb(41,110,180)" 
	projectImagesContainer.style.backgroundImage = "url('./images/weatherOrNotDesktopView.png')"
	//projectImagesContainer.innerHTML = '<img class="projectImage" src="images/weatherOrNotDesktopViewPresentation.png">'
	projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Overview</h2>' +
										'<h3 class="projectDetailOverview">A weather app that uses geolocation to make requests to Forecast.io with a cities (lat,lng) and any search parameters to show the user all detail weather information to their search.</h3>' +
										 '<a href="http://ariquinones.github.io/weatherOrNot/" target="_blank"><span id="goto">Go to: </span><p class="githubProject" >Weather Or Not</p></a>' +
										 '<img class="arrow buttonRight" src="images/arrow-right.svg">'
	document.querySelector('.buttonRight').addEventListener('click', page2)
	// document.querySelector('.buttonLeft').addEventListener('click', prevPage)
	function page2 () {
		projectImagesContainer.style.backgroundImage = "url('./images/weatherOrNotIpadView.png')"
		//projectImagesContainer.innerHTML = '<img class="projectImage" src="images/weatherOrNotIpadViewPresentation.png">'
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">App objectives: Demonstrate understanding of functions, loops/array, variadic behavior\
											Be able to breakdown a simple process of mathematical steps into a series of statements in JS \
											and emonstrate Functional Programming methods</h3>' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page3)
		document.querySelector('.buttonLeft').addEventListener('click', openWeatherOrNot)
	}
	function page3 () {
		projectImagesContainer.style.backgroundImage = "url('./images/weatherOrNotIphoneView.png')"
		//projectImagesContainer.innerHTML = '<img class="projectImage" src="images/weatherOrNotIphoneViewPresentation.png">'
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">Demonstrating usage of Promises and AJAX methods\
												with the ability to update DOM elements and their attributes/innerHTML via JS\
												I demonstrate an understanding of routing, and its role in "single page apps"\
												Using concepts of MVC, such as Backbone Models, Views and Routers</h3>' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page4)
		document.querySelector('.buttonLeft').addEventListener('click', page2)
	}
	function page4 () {
		projectImagesContainer.style.backgroundImage = "url('./images/weatherOrNotIpadView2.png')"
		//projectImagesContainer.innerHTML = '<img class="projectImage" src="images/MyCompanionDx_ExecSumPage.png">'
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg">'
		document.querySelector('.buttonLeft').addEventListener('click', page3)
	}

}