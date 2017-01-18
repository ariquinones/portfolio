function openBloggingLargeProject () {
	console.log("GamerWall")
			function backHome () {
				mainContainer.style.top = "20%"
				projectImagesContainer.innerHTML = ''
				projectDetailsContainer.innerHTML = ''
				projectImagesContainer.style.background = "rgb(41,110,180)" 
				projectDetailsContainer.style.background = "rgb(41,110,180)" 
				mainContainer.innerHTML = 	'<div class="mainImageContainer">\
											<img class="profilePicture" src="images/gamerWall.jpg">' +
										'</div>' +
										'<h1 class="projectName">GamerWall</h1>'+
										'<h2 class="projectSummary">Web App Development</h2>'+
										'<button class="links">View</button>' +
										'<div class="navArrowsContainer">\
											<img class="navigationArrow" id="previous" src="images/prevArrow.svg">\
											<img class="navigationArrow" id="next" src="images/nextArrow.svg">\
										</div>'
			document.querySelector("#next").addEventListener('click',changeToCdxProject)
			document.querySelector("#previous").addEventListener('click',changeToHomePage)
			document.querySelector('.links').addEventListener('click', openBloggingLargeProject)
			document.querySelector(".sidePathContainer").style.display = "initial"
			}
	document.querySelector(".sidePathContainer").style.display = "none"
		if( /Android|webOS|iPhone|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		mainContainer.style.top = "-370px"
	} else if ( /iPad|BlackBerry/i.test(navigator.userAgent) )  {
		mainContainer.style.top = "-370px"
	} else {
		mainContainer.style.top = "-370px"
	}
	mainContainer.innerHTML = '<div class="homeArrowContainer">\
									<img class="homeArrow" src="images/arrow-bottom.svg">\
								</div>'
	document.querySelector(".homeArrow").addEventListener("click", backHome)
	document.querySelector(".projectDetailsContainer").style.background = 'rgb(41,110,180)' 
	projectDetailsContainer.innerHTML = '<h1 class="projectDescription">Web App</h1>' +
										'<h2 class="overview">Overview</h2>' +
										'<p class="projectDetailOverview">GamerWall is an eSports gaming platform that allows players to "Put Their Money Where Their Mouth Is". We provide a secure network for gamers to gather and compete for cash. If you crave competition and think you can take on the best, you come to the GamerWall. We feature head to head matches of your favorite eSports games. Put your skills to the test and become the best gamer around!</p>' +
										 '<img class="imageContainerDesktopLook" src="images/gamerWallNew.jpg">' +
										 '<a href="http://thegamerwall.com/" target="_blank"><span id="goto">Visit: </span><button class="githubProject">GamerWall</button></a>' +
										 '<img class="arrow buttonRight" src="images/arrow-right.svg">'
	document.querySelector('.buttonRight').addEventListener('click', page2)
	
	function page2 () {
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">Web App</h1>' +
										'<h2 class="overview">From design to development</h2>' +
										'<p class="projectDetailOverview">Built on the Zend Framework, I was the UI/UX developer for the application. Using latest front-end technologies, I took the UI designs and coded every bit of the front-end.</p>' +
										'<img class="imageContainerDesktopLook" src="images/gamerWallCreateMatch.jpg">' +
										'<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page3)
		document.querySelector('.buttonLeft').addEventListener('click', openBloggingLargeProject)
	}
	function page3 () {
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">Web App</h1>' +
										'<h2 class="overview">Mobile First</h2>' +
										'<p class="projectDetailOverview">Learned how the php/zend framework works along with relational databases and Sql programming</p>' +
										'<img class="imageContainerMobileView" src="images/gamerWallMobile.jpg">' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg">'
		
		document.querySelector('.buttonLeft').addEventListener('click', page2)
	}
}