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
									<img class="profilePicture" src="images/fencingAndSteelArt.png">' +
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
									<img class="profilePicture" src="images/toDoList.png">' +
								'</div>' +
								'<h1 class="projectName">Smart To Do List</h1>'+
								'<h2 class="projectSummary">Mobile App Development</h2>'+
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
	document.querySelector(".currentView").textContent = "Weather Or Not"
	mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/weatherOrNot.png">' +
								'</div>' +
								'<h1 class="projectName">Weather Or Not</h1>'+
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
									<img class="profilePicture" src="images/MyCompanionDx_ExecSumPage.png">' +
								'</div>' +
								'<h1 class="projectName">MyCompanionDx</h1>'+
								'<h2 class="projectSummary">Web App Design</h2>'+
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
	// var computedStyles = window.getComputedStyle(mainContainer)
	// console.log(computedStyles)
	// var oldTransform = computedStyles.transform
	console.log("bloggingLargeView")
	mainContainer.style.transform += ' rotateY(180deg)'
	function turn () {
		mainContainer.style.transform += ' rotateY(180deg)'
	}
	setTimeout(turn,600)
	document.querySelector(".currentViewContainer").style.top = "18%"
	document.querySelector(".currentView").textContent = "Blogging Large"
	document.querySelector('.currentViewContainer').style.transform = "rotateX(-360deg)"
	mainContainer.innerHTML = 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/bloggingLargeLoginScreenShot.png">' +
								'</div>' +
								'<h1 class="projectName">Blogging Large App</h1>'+
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
			projectImagesContainer.style.width = "50%"							
			projectDetailsContainer.style.display = 'initial'
			projectImagesContainer.innerHTML = ''
			projectDetailsContainer.innerHTML = ''
			projectImagesContainer.style.background = "rgb(41,110,180)" 
			projectDetailsContainer.style.background = "rgb(41,110,180)" 
			mainContainer.innerHTML = 	 	'<div class="mainImageContainer">\
									<img class="profilePicture" src="images/DesignProfilePic.jpg">' +
								'</div>' +
								'<h1 class="projectName">Ari Quinones</h1>'+
								'<h2 class="projectSummary">UI Developer</h2>'+
								'<button class="links">View Projects</button>' +
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
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		mainContainer.style.top = "-45%"
	} else {
		mainContainer.style.top = "-48%"
	}
	mainContainer.innerHTML = '<div class="homeArrowContainer">\
									<img class="homeArrow" src="images/arrow-bottom.svg">\
								</div>'
	document.querySelector(".homeArrow").addEventListener("click", backHome)
	//document.querySelector(".projectDetailsContainer").style.background = 'rgb(41,110,180)' 
	projectImagesContainer.style.background = 'rgb(41,110,180)' 
	projectImagesContainer.innerHTML = 	'<div class="aboutMeContainer">\
											<h1>ABOUT ME:</h1>' +
											'<p>Ari C Quinones Vargas</p>' +
											'<p>I am a UI/UX designer with a passion for designing beautiful and functional user experiences.</p>\
											<p>As well as a Front-End developer who focuses on writing clean, elegant and functional code.</p>\
											<p>I love development and design.</p>\
											<p>I mix my two passions together to create a more complete UI developer.</p>\
											<h2>Education:</h2>\
											<p>The University of Texas at San Antonio - B.B.A. in Marketing</p>\
											<p>Ashworth College - Graphic Design</p>\
											<p>The Iron Yard - Front-End Engineer</p>\
											<h2>Skills:</h2>\
											<ul class="aboutMeUl">\
												<li>HTML</li>\
												<li>CSS</li>\
												<li>Javascript</li>\
												<li>Photoshop</li>\
												<li>Illustrator</li>\
												<li>Sketch</li>\
											</ul>\
										</div>'
	projectImagesContainer.style.width = "100%"							
	projectDetailsContainer.style.display = 'none'
}


buttonsContainer.addEventListener("click",changeToBloggingLargeView)

document.querySelector('#home').addEventListener('click',changeToHomePage)
document.querySelector("#bloggingLarge").addEventListener('click',changeToBloggingLargeView)
document.querySelector("#myCompanionDx").addEventListener('click',changeToCdxProject)
document.querySelector("#weatherOrNot").addEventListener('click',changeToWeatherApp)
document.querySelector("#toDoList").addEventListener('click',changeToDoList)
document.querySelector("#fencing").addEventListener('click',changeToFencing)
document.querySelector('#aboutMePage').addEventListener('click',openAboutMe)

