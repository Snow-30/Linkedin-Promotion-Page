import { review } from './JS/reviews.js';

let id = 0;

function updateReview() {
	id = Math.abs(id);
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

function updateReviewRight() {
	id = Math.abs(id);
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

function updateReviewLeft() {
	id = Math.abs(id);
	if ((id - 1) % 100 === 0) {
		id = 100;
	} else {
		id = (id - 1) % 100;
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

const leftShift = document.querySelector('.left-arrow');

leftShift.addEventListener('click', () => {
	updateReviewLeft();
	clearInterval(Intervalid);
	autoChangeReview();
})

const rightShift = document.querySelector('.right-arrow');

rightShift.addEventListener('click', () => {
	updateReviewRight();
	clearInterval(Intervalid);
	autoChangeReview();
})

let Intervalid;

function autoChangeReview() {
	Intervalid = setInterval(updateReview, 4000);
}

autoChangeReview();