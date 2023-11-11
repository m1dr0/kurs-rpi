//checkout-radiobuttons
const radioButtonField = document.querySelectorAll('.total-radio input')
const radioBorderField = document.querySelectorAll('.total-radio__list li')

radioButtonField.forEach(elem => {
	elem.addEventListener("click", () => {
		switch (elem) {
			case radioButtonField[0]:
				radioBorderField[0].style.borderColor = "#FF6428"
				radioBorderField[1].style.borderColor = "#000000"
				radioBorderField[2].style.borderColor = "#000000"
				break;
			case radioButtonField[1]:
				radioBorderField[0].style.borderColor = "#000000"
				radioBorderField[1].style.borderColor = "#FF6428"
				radioBorderField[2].style.borderColor = "#000000"
				break;
			case radioButtonField[2]:
				radioBorderField[0].style.borderColor = "#000000"
				radioBorderField[1].style.borderColor = "#000000"
				radioBorderField[2].style.borderColor = "#FF6428"
				break;
			}
	})
})

//order create
const placeOrderButton = document.querySelector('.checkout-button')
const inputField = document.querySelectorAll('.items input')

let countEmptyFields = 9;
function emptyFields(field) {
	if (field.value != '')
		return countEmptyFields--;
}
placeOrderButton.addEventListener("click", () => {
	countEmptyFields = 9;
	inputField.forEach(elem => {
		emptyFields(elem);
		console.log(countEmptyFields)
	})
	if (countEmptyFields == 9)
		alert('Required fields are not filled in!')
	else 
		alert('Order placed!')
})

//modal

