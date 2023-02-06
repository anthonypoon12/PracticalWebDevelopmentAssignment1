"use strict";

function changeTextColors() {
	let color = document.body.style.color;
	if (color === 'black') {
		document.body.style.color = 'red';
	} else {
		document.body.style.color = 'black';
	}
}