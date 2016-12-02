// //first I'm going to select items to grab
// catClick = document.getElementById("limecat");
// //now I'm going to give this object some properties
// catClick.name = "limecat";
// catClick.age = 500;

//now let's create the onclick function
// catClick.onclick = function () {
// 	this.setAttribute("width","350px");
// 	console.log("You clicked " + this.name);
// };
//now I'm going to make the ghost text hide in my form
"use strict";
var fNameField = document.getElementById("fnamefield");

fNameField.onblur = function () {
	if (fNameField.value ==""){
		fNameField.value = "your name";
	}
};

fNameField.onfocus = function () {
	if (fNameField.value =="your name"){
		fNameField.value ="";
	}
};
// function simpleMessage() {
// 	alert("This a simple alert box");
// }
//working on the image rotation now
var myImage = document.getElementById("mainImage");
var imageArray = ["images/baseball.jpeg", "images/canadaball.jpeg", "images/USAball.jpeg", "images/beachball.jpeg", "images/9ball.jpeg"];
var imageIndex = 0;

function changeImage () {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	console.log("Index is now at " + imageIndex);
	if (imageIndex >= imageArray.length){
		imageIndex = 0;
	}
}
//set up functions for starting and stopping the slider
var myInterval;
function startSlide(){
	myInterval = setInterval(changeImage, 2500);
}
function stopSlide(){
	clearInterval(myInterval);
}
//set up mouseover and mouseout functions calling the start/stop slider functions
myImage.onmouseover = function () {
	stopSlide();
	console.log("The slideshow is paused");
};
myImage.onmouseout = function () {
	startSlide();
	console.log("The slideshow resumes");
};
//call the startSlide function when loading the page to start the slideshow 
startSlide();



