var buttonsContainer = document.querySelector(".links")
var mainContainer = document.querySelector('.mainContainer')
var profileImage = document.querySelector('.mainImageContainer')
var projectName = document.querySelector('.projectName')
var projectSummary = document.querySelector('.projectSummary')

var projectImagesContainer = document.querySelector(".projectImagesContainer")
var projectDetailsContainer = document.querySelector(".projectDetailsContainer")
mainContainer.style.transform = "translateX(-50%)"


function changeToHomePage () {
	document.querySelector('.currentViewContainer').style.transform = "rotateX(360deg)"
	document.querySelector(".currentView").textContent = "Home"
	document.querySelector(".currentViewContainer").style.top = "-2%"
	mainContainer.style.transform = "translateX(-50%)"
	mainContainer.style.transform += ' rotateY(180deg)'
	function turn () {
		mainContainer.style.transform += ' rotateY(180deg)'
	}
	setTimeout(turn,600)
	mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/DesignProfilePic.jpg">' +
								'</div>' +
								'<h1 class="projectName">Ari Quinones</h1>'+
								'<h2 class="projectSummary">Designer/Developer</h2>'+
								'<button class="links">Get Started</button>' +
								'<div class="iconsContainer">\
									<img id="aboutMePage" class="iconLink" src="images/aboutIcon.svg">\
									<a href="https://github.com/ariquinones" target="_blank"><img class="iconLink" src="images/githubIcon.svg"></a>\
									<a href="https://www.linkedin.com/in/ariquinones" target="_blank"><img class="iconLink" src="images/linkedInIcon.svg"></a>\
								</div>'
	document.querySelector('#aboutMePage').addEventListener('click',openAboutMe)
	document.querySelector(".links").addEventListener('click', changeToBloggingLargeView)
	document.querySelector('.mainImageContainer').addEventListener('click',changeToBloggingLargeView)
}

function changeToFencing () {
	document.querySelector('.currentViewContainer').style.transform = "rotateX(-360deg)"
	document.querySelector(".currentView").textContent = "F&S Art"
	document.querySelector(".currentViewContainer").style.top = "97%"
	mainContainer.style.transform = "translateX(-50%)"
	mainContainer.style.transform += ' rotateY(180deg)'
	function turn () {
		mainContainer.style.transform += ' rotateY(180deg)'
	}
	setTimeout(turn,600)
	mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/fencingAndSteelArt.jpg">' +
								'</div>' +
								'<h1 class="projectName">F&S Art </h1>'+
								'<h2 class="projectSummary">Website Design</h2>'+
								'<button class="links">View</button>' +
								'<div class="navArrowsContainer">\
									<img class="navigationArrow" id="previous" src="images/prevArrow.svg">\
									<img class="navigationArrow" id="next" src="images/nextArrow.svg">\
								</div>'
	document.querySelector(".links").addEventListener('click', openFencing)
	document.querySelector("#next").addEventListener('click',changeToHomePage)
	document.querySelector("#previous").addEventListener('click',changeToDoList)
}

function changeToDoList () {
	document.querySelector('.currentViewContainer').style.transform = "rotateX(360deg)"
	document.querySelector(".currentView").textContent = "To Do List"
	document.querySelector(".currentViewContainer").style.top = "77.5%"
	mainContainer.style.transform = "translateX(-50%)"
	mainContainer.style.transform += ' rotateY(180deg)'
	function turn () {
		mainContainer.style.transform += ' rotateY(180deg)'
	}
	setTimeout(turn,600)
	mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/toDoList.jpg">' +
								'</div>' +
								'<h1 class="projectName">Smart Task List</h1>'+
								'<h2 class="projectSummary">App Development</h2>'+
								'<button class="links">View</button>' +
								'<div class="navArrowsContainer">\
									<img class="navigationArrow" id="previous" src="images/prevArrow.svg">\
									<img class="navigationArrow" id="next" src="images/nextArrow.svg">\
								</div>'
	document.querySelector(".links").addEventListener('click', openToDoList)
	document.querySelector("#next").addEventListener('click',changeToFencing)
	document.querySelector("#previous").addEventListener('click',changeToWeatherApp)
}

function changeToWeatherApp () {
	document.querySelector('.currentViewContainer').style.transform = "rotateX(-360deg)"
	mainContainer.style.transform += ' rotateY(180deg)'
	function turn () {
		mainContainer.style.transform += ' rotateY(180deg)'
	}
	setTimeout(turn,600)
	document.querySelector(".currentViewContainer").style.top = "56.5%"
	document.querySelector(".currentView").textContent = "Ad. Recovery"
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
	var button = document.querySelector(".links")
	button.addEventListener('click', openWeatherOrNot)
	document.querySelector("#next").addEventListener('click',changeToDoList)
	document.querySelector("#previous").addEventListener('click',changeToCdxProject)
}

function changeToCdxProject () {
	document.querySelector('.currentViewContainer').style.transform = "rotateX(360deg)"
	mainContainer.style.transform += ' rotateY(180deg)'
	function turn () {
		mainContainer.style.transform += ' rotateY(180deg)'
	}
	setTimeout(turn,600)
	document.querySelector(".currentViewContainer").style.top = "37%"

	document.querySelector(".currentView").textContent = "MyCDx"
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
	var button = document.querySelector(".links")
	button.addEventListener('click', openMyCompanionDxView)
	document.querySelector("#next").addEventListener('click',changeToWeatherApp)
	document.querySelector("#previous").addEventListener('click',changeToBloggingLargeView)
}

function changeToBloggingLargeView () {
	console.log("advancedRecoveryView")
	mainContainer.style.transform += ' rotateY(180deg)'
	function turn () {
		mainContainer.style.transform += ' rotateY(180deg)'
	}
	setTimeout(turn,600)
	document.querySelector(".currentViewContainer").style.top = "18%"
	
	document.querySelector('.currentViewContainer').style.transform = "rotateX(-360deg)"
	document.querySelector(".currentView").textContent = "GamerWall"
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
	document.querySelector(".links").addEventListener('click', openBloggingLargeProject)
	document.querySelector("#next").addEventListener('click',changeToCdxProject)
	document.querySelector("#previous").addEventListener('click',changeToHomePage)
}

function openAboutMe () {
	console.log("about me")
		function backHome () {
			mainContainer.style.top = "20%"
			projectImagesContainer.innerHTML = ''
			projectDetailsContainer.innerHTML = ''
			projectImagesContainer.style.background = "rgb(41,110,180)" 
			projectDetailsContainer.style.background = "rgb(41,110,180)" 
			mainContainer.innerHTML = 	 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/DesignProfilePic.jpg">' +
								'</div>' +
								'<h1 class="projectName">Ari Quinones</h1>'+
								'<h2 class="projectSummary">Designer/Developer</h2>'+
								'<button class="links">Get Started</button>' +
								'<div class="iconsContainer">\
									<img id="aboutMePage" class="iconLink" src="images/aboutIcon.svg">\
									<a href="https://github.com/ariquinones" target="_blank"><img class="iconLink" src="images/githubIcon.svg"></a>\
									<a href="https://www.linkedin.com/in/ariquinones" target="_blank"><img class="iconLink" src="images/linkedInIcon.svg"></a>\
								</div>'
		document.querySelector('#aboutMePage').addEventListener('click',openAboutMe)
		document.querySelector('.links').addEventListener('click', changeToBloggingLargeView)
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
	projectDetailsContainer.style.background = 'rgb(41,110,180)' 
	projectDetailsContainer.innerHTML = '<div class="aboutMeContainer">\
											<h1>ABOUT ME:</h1>' +
											'<p>Ari C Quinones Vargas</p>' +
											'<p>I am a Front-End Developer with a passion for UI/UX design. I love designing beautiful and elegant user interfaces.</p>\
											<p>I focus on writing clean, elegant and functional code.</p>\
											<p>I love development and design.</p>\
											<p>I mix my two passions together to create a more complete Developer.</p>\
											<h2>Education:</h2>\
											<p>The University of Texas at San Antonio - B.B.A. in Marketing</p>\
											<p>Ashworth College - Graphic Design</p>\
											<p>The Iron Yard - Front-End Engineer</p>\
											<h2>Skills:</h2>\
											<ul class="aboutMeUl">\
												<li>Html/Html5</li>\
												<li>Css/Sass/Bootstrap</li>\
												<li>NodeJs/Express</li>\
												<li>React</li>\
												<li>Jquery</li>\
												<li>Php/Zend2</li>\
												<li>Sql/MySql</li>\
												<li>Photoshop</li>\
												<li>Illustrator</li>\
												<li>Sketch</li>\
											</ul>\
										</div>'
}


buttonsContainer.addEventListener("click",changeToBloggingLargeView)

document.querySelector('#home').addEventListener('click',changeToHomePage)
document.querySelector("#bloggingLarge").addEventListener('click',changeToBloggingLargeView)
document.querySelector("#myCompanionDx").addEventListener('click',changeToCdxProject)
document.querySelector("#weatherOrNot").addEventListener('click',changeToWeatherApp)
document.querySelector("#toDoList").addEventListener('click',changeToDoList)
document.querySelector("#fencing").addEventListener('click',changeToFencing)
document.querySelector('#aboutMePage').addEventListener('click',openAboutMe)

