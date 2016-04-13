function openMyCompanionDxView () {
	console.log("myCompanionDxView")
	function backHome () {
		mainContainer.style.top = "20%"
		projectImagesContainer.innerHTML = ''
		projectDetailsContainer.innerHTML = ''
		projectImagesContainer.style.background = "rgb(41,110,180)" 
		projectDetailsContainer.style.background = "rgb(41,110,180)" 
		mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/MyCompanionDx_ExecSumPage.png">' +
								'</div>' +
								'<h1 class="projectName">MyCompanionDx</h1>'+
								'<h2 class="projectSummary">Web App Design</h2>'+
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
	mainContainer.style.top = "-52%"
	mainContainer.innerHTML = '<div class="homeArrowContainer">\
									<img class="homeArrow" src="images/arrow-bottom.svg">\
								</div>'
	document.querySelector(".homeArrow").addEventListener("click", backHome)
	document.querySelector(".projectDetailsContainer").style.background = "rgb(41,110,180)"
	projectImagesContainer.style.backgroundImage = "url('./images/MyCompanionDx_ExecSumPage2.png')"
	projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Overview</h2>' +
										'<h3 class="projectDetailOverview">An innovative pharmacogenomics and next-generation sequence app\
										 to help physicians view details in patient reports.</h3>' +
										 '<img class="arrow buttonRight" src="images/arrow-right.svg">'
	document.querySelector('.buttonRight').addEventListener('click', page2)
	// document.querySelector('.buttonLeft').addEventListener('click', prevPage)
	function page2 () {
		projectImagesContainer.style.backgroundImage = "url('./images/myCompanionDashboardView.png')"
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">With ux research information we narrowed down the highest requirements for all physicians to use this application\
										 without too much work on their part:\
										Access all patient information & reports with one tool\
										Give control to users on viewable data needed\
										Track patient treatment regimen history and changes\
										Notify physicians on changes needed to regimen & schedule report reads from CompanionDx experts</h3>' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page3)
		document.querySelector('.buttonLeft').addEventListener('click', openMyCompanionDxView)
	}
	function page3 () {
		projectImagesContainer.style.backgroundImage = "url('./images/myCompanionMedView.png')"
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">In order to work rapidly & see all options we had for creating the application,\
										 I sketched my designs on paper and as a team evaluated them to decide what route we would go.\
										  This gave us a broader view on the system and we could highlight all areas where we could really innovate this app.</h3>' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page4)
		document.querySelector('.buttonLeft').addEventListener('click', page2)
	}
	function page4 () {
		projectImagesContainer.style.backgroundImage = "url('./images/myCompanionZoomInView.png')"
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">MyCompanionDx web-based application is tool that assists healthcare professionals\
										 in utilizing pharmacogenomics in daily practice. Finding the right dose for the right patient\
										  and the right time for a better medication treatment regimen.</h3>' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg">'
		document.querySelector('.buttonLeft').addEventListener('click', page3)
	}

}