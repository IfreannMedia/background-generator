const h3 = document.getElementsByTagName("h3")[0];
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const eventTypesEnum = {
	INPUT: 'input',
	CLICK: 'click',
	MOUSE_OVER:'mouseover',
	MOUSE_OUT: 'mouseout'
};

class EventListenerMain {
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
		console.log(eventTypesEnum.INPUT);
		console.log(eventType);
		switch (eventType){
			case eventTypesEnum.INPUT:

			element.addEventListener(eventTypesEnum.INPUT, methodToAdd);
			case eventTypesEnum.CLICK:
			element.addEventListener(eventTypesEnum.CLICK, methodToAdd);
			case eventTypesEnum.MOUSE_OVER:
			element.addEventListener(eventTypesEnum.MOUSE_OVER, methodToAdd);
			case eventTypesEnum.MOUSE_OUT:
			element.addEventListener(eventTypesEnum.MOUSE_OUT, methodToAdd);
			default: 
			console.error(new Error('incorrect event type passed'));

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

const inputManager = new EventListenerMain();
const color1Function = function function_name(argument) {
	// body...
	console.log("successfully called: " + argument);
}
console.log(eventTypesEnum.INPUT);
inputManager.addEventListener(color1, eventTypesEnum.INPUT, color1Function);