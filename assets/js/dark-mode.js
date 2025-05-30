"use strict";

const modeToggler = document.getElementById('darkmode');
const documentBody = document.getElementsByTagName('body')[0];


function setThemeFromCookie() {
	// Check if the cookie is set 
	if (typeof Cookies.get('mode') !== "undefined") {
		documentBody.classList.add('dark-mode');
		modeToggler.checked = true;
		documentBody.style.setProperty('--bs-primary-bg-subtle', '#212529');
	} else {
		documentBody.classList.remove('dark-mode');
		modeToggler.checked = false;
		documentBody.style.setProperty('--bs-primary-bg-subtle', '#ddedf0');
	}
}


setThemeFromCookie();


modeToggler.addEventListener('change', () => {

	if (modeToggler.checked) {
		documentBody.classList.add('dark-mode');
		//Set cookies for 7 days 
		Cookies.set('mode', 'dark-mode', { expires: 7 });

		documentBody.style.setProperty('--bs-primary-bg-subtle', '#212529');

	} else {
		documentBody.classList.remove('dark-mode');
		//Remove cookies
		Cookies.remove('mode');

		documentBody.style.setProperty('--bs-primary-bg-subtle', '#ddedf0');
	}
});