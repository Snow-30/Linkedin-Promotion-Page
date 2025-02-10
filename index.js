import { review } from './JS/reviews.js';

let id = 0;

function updateReview() {
	if ((id + 1) % 100 === 0) {
		id = 100;
	} else {
		id = (id + 1) % 100;	
	}
	const curr_review = document.querySelector('.person-review');
	const curr_worksin = document.querySelector('.worksin');
	const curr_position = document.querySelector('.position');
	const curr_name = document.querySelector('.name');
	const currentReview = review.find((r) => r.id === id);
	curr_review.innerHTML = `${currentReview.review}`;
	curr_worksin.innerHTML = `${currentReview.worksin}`;
	curr_position.innerHTML = `${currentReview.position}`;
    curr_name.innerHTML = `${currentReview.name}`;
}

setInterval(updateReview, 2500);

updateReview();
