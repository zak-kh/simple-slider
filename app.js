const $ = document;
let index = 1;
const nextItem = () => {
	index++;
	if (index > 3) {
		index = 1;
	}
	$.getElementById("slider-item").src = `./images/${index}.jpeg`;
};

const pervItem = () => {
	index--;
	if (index < 1) {		index = 3;
	}
	$.getElementById("slider-item").src = `./images/${index}.jpeg`;
};


// Every 4 seconds will change the slider's item
setInterval(nextItem, 4000);
