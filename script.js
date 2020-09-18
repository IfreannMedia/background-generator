const h3 = document.getElementsByTagName("h3")[0];
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

const eventTypesEnum = {
	INPUT: 'input',
	CLICK: 'click',
	MOUSE_OVER:'mouseover',
	MOUSE_OUT: 'mouseout'
};

class InputManager {
	constructor(){

	}

	addEventListener(element, eventType, methodToAdd){
		if(!element){
			console.error(new Error('no html element passed where one needed'));
			return;
		}
		if(!methodToAdd){
			console.error(new Error('no method passed where one needed'));
			return;
		}
		switch (eventType){
			case eventTypesEnum.INPUT:
			element.addEventListener(eventTypesEnum.INPUT, methodToAdd);
			break;
			case eventTypesEnum.CLICK:
			element.addEventListener(eventTypesEnum.CLICK, methodToAdd);
			break;
			case eventTypesEnum.MOUSE_OVER:
			element.addEventListener(eventTypesEnum.MOUSE_OVER, methodToAdd);
			break;
			case eventTypesEnum.MOUSE_OUT:
			element.addEventListener(eventTypesEnum.MOUSE_OUT, methodToAdd);
			break;
			default: 
			console.error(new Error('incorrect event type passed'));
			break;
		}
	}

	removeEventListener(element, eventType, methodToAdd){
		if(!element){
			console.error(new Error('no html element passed where one needed'));
			return;
		}
		if(!methodToAdd){
			console.error(new Error('no method passed where one needed'));
			return;
		}
		switch (eventType){
			case eventTypesEnum.INPUT:
			element.removeEventListener(eventTypesEnum.INPUT, methodToAdd);
			case eventTypesEnum.CLICK:
			element.removeEventListener(eventTypesEnum.CLICK, methodToAdd);
			case eventTypesEnum.MOUSE_OVER:
			element.removeEventListener(eventTypesEnum.MOUSE_OVER, methodToAdd);
			case eventTypesEnum.MOUSE_OUT:
			element.removeEventListener(eventTypesEnum.MOUSE_OUT, methodToAdd);
			default: 
			console.error(new Error('incorrect event type passed'));

		}
	}
}


const colorFunction = function setColor(col1 = color1.value, col2 = color2.value) {
	color1.value = col1;
	color2.value = col2;
	body.style.background = 
	"linear-gradient(to right, " 
	+ col1
	+ ", " 
	+ col2
	+ ")";
	h3.textContent = body.style.background + ";";
	setCssInSessionStorage();
}


function randomiseGradient(){
	var randCol1 = getRandomHexCode();
	var randCol2 = getRandomHexCode();
	colorFunction(randCol1, randCol2);
}

function setInitialColors(){
	if(!sessionStorage.getItem('col1') && !sessionStorage.getItem('col1')){
		randomiseGradient();
	}
	else {
		colorFunction(sessionStorage.getItem('col1'), sessionStorage.getItem('col2'))
	}
}

function getRandomHexCode() {
	return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

function setCssInSessionStorage(){
	sessionStorage.setItem('col1', color1.value);
	sessionStorage.setItem('col2', color2.value);
}

const inputManager = new InputManager();
inputManager.addEventListener(color1, eventTypesEnum.INPUT, colorFunction);
inputManager.addEventListener(color2, eventTypesEnum.INPUT, colorFunction);

setInitialColors();
