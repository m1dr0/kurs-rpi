const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		autoHeight: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}


//checkout-radiobuttons
const radioButtonField = document.querySelectorAll('.total-radio')
console.log(radioButtonField)