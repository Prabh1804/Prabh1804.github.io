sunFunc = () => {
	let sunButton = document.querySelector(".sun-button");
	sunButton.style.display = "none";
	document.documentElement.style.setProperty('--hue-value1', '0')
	document.querySelector(".moon-button").style.display = "block" ;
};
moonFunc = () => {
	let moonButton = document.querySelector(".moon-button");
	moonButton.style.display = "none";
	document.documentElement.style.setProperty('--hue-value1', '100%')
	document.querySelector(".sun-button").style.display = "block" ;
};

function go_to_about(){
	console.log("about is clicked");
}
function go_to_project(){
	console.log("about is project");
}
function go_to_contact(){
	console.log("about is contact");
} 
