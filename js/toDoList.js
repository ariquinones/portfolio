function openToDoList () {
	console.log("toDoList")
	function backHome () {
		mainContainer.style.top = "20%"
		projectImagesContainer.innerHTML = ''
		projectDetailsContainer.innerHTML = ''
		projectImagesContainer.style.background = "rgb(41,110,180)" 
		projectDetailsContainer.style.background = "rgb(41,110,180)" 
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
	document.querySelector("#next").addEventListener('click',changeToFencing)
	document.querySelector("#previous").addEventListener('click',changeToWeatherApp)
	document.querySelector('.links').addEventListener('click', openToDoList)
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
	projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Overview</h2>' +
										'<h3 class="projectDetailOverview">A helpful and easy to use to do list application for \
										daily use.</h3>' +
										'<img class="imageContainerDesktopLook" src="images/todoDesktop.jpg">' +
										 '<a  href="http://ariquinones.github.io/yourToDos/" target="_blank"><span id="goto">Visit: </span><button class="githubProject">Your To Dos List</button></a>' +
										 '<img class="arrow buttonRight" src="images/arrow-right.svg">'
	document.querySelector('.buttonRight').addEventListener('click', page2)
	function page2 () {
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Concept</h2>' +
										'<h3 class="projectDetailOverview">Using React and Backbone for JSX components, this list allows a user to add\
										list items and toggle between what has been done and not done.</h3>' +
										 '<img class="imageContainerDesktopLook" src="images/todoIpad.jpg">' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg"><img class="arrow buttonRight" src="images/arrow-right.svg">'
		document.querySelector('.buttonRight').addEventListener('click', page3)
		document.querySelector('.buttonLeft').addEventListener('click', openToDoList)
	}
	function page3 () {
		projectDetailsContainer.innerHTML = '<h1 class="projectDescription">App Design</h1>' +
										'<h2 class="overview">Designs</h2>' +
										'<h3 class="projectDetailOverview">Simple UI design with the user in mind for the best possible experience.</h3>' +
										'<img class="imageContainerMobileView" src="images/todoMobile.jpg">' +
										 '<img class="arrow buttonLeft" src="images/arrow-left.svg">'
		document.querySelector('.buttonLeft').addEventListener('click', page2)
	}
	
}