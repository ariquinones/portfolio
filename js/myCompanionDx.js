function openMyCompanionDxView () {
	console.log("myCompanionDxView")
	function backHome () {
		mainContainer.style.top = "20%"
		projectImagesContainer.innerHTML = ''
		projectDetailsContainer.innerHTML = ''
		projectImagesContainer.style.background = "rgb(41,110,180)" 
		projectDetailsContainer.style.background = "rgb(41,110,180)" 
		mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/MyCompanionDx_ExecSumPage.jpg">' +
								'</div>' +
								'<h1 class="projectName">MyCompanionDx</h1>'+
								'<h2 class="projectSummary">UI/UX Design</h2>'+
								'<button class="links">View</button>' +
								'<div class="navArrowsContainer">\
									<img class="navigationArrow" id="previous" src="images/prevArrow.svg">\
									<img class="navigationArrow" id="next" src="images/nextArrow.svg">\
								</div>'
	document.querySelector("#next").addEventListener('click',changeToWeatherApp)
	document.querySelector("#previous").addEventListener('click',changeToBloggingLargeView)
	document.querySelector('.links').addEventListener('click', openMyCompanionDxView)
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
										'<h3 class="projectDetailOverview">An innovative pharmacogenomics and next-generation sequence app\
										 to help physicians view details an all patient reports.</h3>' +
										 '<img class="imageContainerDesktopLook" src="images/myCdxDesktop.jpg">' +
										 '<img class="arrow buttonRight" src="images/arrow-right.svg">'
	document.querySelector('.buttonRight').addEventListener('click', page2)

	function page2 () {
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">\
										Access all patient information & reports with one tool. \
										Give control to users on viewable data needed. \
										Track patient treatment regimen history and changes and \
										notify physicians on changes needed to regimen & schedule report reads from CompanionDx experts.</h3>' +
										'<img class="imageContainerDesktopLookTilt" src="images/myCdxDesktopTilt.png">' +
										'<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page3)
		document.querySelector('.buttonLeft').addEventListener('click', openMyCompanionDxView)
	}
	function page3 () {
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">MyCompanionDx web-based application is a tool that assists healthcare professionals\
										 in utilizing pharmacogenomics in daily practice. Finding the right dose for the right patient\
										  at the right time for a better medication treatment regimen.</h3>' +
										 '<img class="imageContainerDesktopLook" src="images/myCdxDesktopDetails.jpg">' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg">'
		document.querySelector('.buttonLeft').addEventListener('click', page2)
	}

}