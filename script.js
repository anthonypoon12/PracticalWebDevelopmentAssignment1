"use strict";

function changeTextColors() {
	let color = document.body.style.color;
	if (color === 'red') {
		document.body.style.color = 'black';
	} else {
		document.body.style.color = 'red';
	}
}