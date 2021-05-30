"use strict";

const title = document.querySelector("h1");
const dateTime = document.querySelector(".datetime");
const time = document.querySelector(".time");
const city = document.querySelector(".city");
const table = document.querySelector("table");

Date.prototype.addHours = function(h) {
	this.setTime(this.getTime() + (h*60*60*1000));
	return this;
}

function update() {
	const newTime = new Date(dateTime.value);
	let timeDiff = 0;
	switch (city.value) {
		case "nz_al":
			timeDiff = 3;
			break;
		case "us_la":
		case "cr_sj":
			timeDiff = -16;
			break;
		case "us_ws":
			timeDiff = -13;
			break;
		case "pl_ws":
			timeDiff = -7;
			break;
	}
	newTime.addHours(timeDiff);
	time.innerHTML = newTime.toLocaleString();
	table.style.left = `${(window.innerWidth / 2) - (table.getBoundingClientRect().width / 2)}px`;
	table.style.top = `${(window.innerHeight / 2) - (table.getBoundingClientRect().height / 2)}px`;
	title.style.left = `${(window.innerWidth / 2) - (title.getBoundingClientRect().width / 2)}px`;
	title.style.top = `${(window.innerWidth / 5) - (title.getBoundingClientRect().height / 2)}px`;
	requestAnimationFrame(update);
}
requestAnimationFrame(update);