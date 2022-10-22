function isIdExists(id){
    return id != null && document.getElementById(id) ? true : false;
}

function getCookie(cname) {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];

		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function setCookie(cookieName,value,numberOfDays)
{
    var date=new Date();
    date.setDate(date.getDate() + numberOfDays);
    var cookieValue = escape(value) + ((numberOfDays==null) ? "" : "; expires="+date.toUTCString()) + "; path=/";
    document.cookie=cookieName + "=" + cookieValue;
}

// check if Class not null

function isClassExists(classElement){
    return document.querySelectorAll('.'+ classElement)!= null ? true : false;
}

// check if html tag not null
let isTagElementExists = (tagElement) => {
    return document.querySelectorAll(tagElement)!= null ? true : false;
}

// create event listener function for any class or id
const eventListener = (eventItem, eventListenerType, eventFunction, isClass = true) => {
	if(isClass){
		let eventClassNames = document.getElementsByClassName(`${eventItem}`);
		let i = 0;
		for(i; i < eventClassNames.length; i++){
			eventClassNames[i].addEventListener(eventListenerType, (e) => {
				if(eventFunction && (typeof eventFunction == "function")){
					eventFunction(e);
				}
			})
		}
	}else if(isClass == false){
		let eventID = document.getElementById(`${eventItem}`);
debugger
		eventID.addEventListener(eventListenerType, (e) => {
			if(eventFunction && (typeof eventFunction == "function")){
				eventFunction(e);
			}
		})
	}

}

