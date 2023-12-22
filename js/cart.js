
//coupons
const couponBtn = document.querySelector('.coupon-button');
const couponField = document.querySelector('.coupon-input');
const discountField = document.querySelector('.discount__sum')
const subtotalField = document.querySelector('.subtotal__sum')
const totalField = document.querySelector('.total__sum')

let total = totalField.textContent.replace(/[^\d]/gi, '')
let couponChecked = false;

couponBtn.addEventListener("click", function () {
	const coupon = couponField.value;
	if (couponChecked)
		alert('Coupon has already been applied!')
	else if (subtotalField.textContent == '$0')
		alert('The cart is empty!')
	else if (coupon == 'я аналитик)') {
		discountField.textContent = '(-) 32,00'
		calculateTotal()
		couponChecked = true;
	}
	else 
		alert('Invalid coupon!')
})

//cart
const quantityField = document.querySelectorAll('.items-qty')
const minusQty = document.querySelectorAll('.items-minus')
const plusQty = document.querySelectorAll('.items-plus')
const productPrice = document.querySelectorAll('.items-price')
const productTotalPrice = document.querySelectorAll('.items-total')
const row1 = document.querySelector('.elem1')
const row2 = document.querySelector('.elem2')
const row3 = document.querySelector('.elem3')
const deleteRow = document.querySelectorAll('.items-delete')

let totalPrice0 = 0;
let totalPrice1 = 0;
let totalPrice2 = 0;

function calculateTotal(totalPrice0 = parseInt(productTotalPrice[0].textContent.replace(/[^\d]/gi, '').slice(0, -2)), 
			totalPrice1 = parseInt(productTotalPrice[1].textContent.replace(/[^\d]/gi, '').slice(0, -2)), 
			totalPrice2 = parseInt(productTotalPrice[2].textContent.replace(/[^\d]/gi, '').slice(0, -2))) {
	let subtotal = totalPrice0+totalPrice1+totalPrice2;
	if (subtotal == 0){
		subtotalField.textContent = '$0'
		discountField.textContent = '(-) 00,00'
		totalField.textContent = '$0'
	}
	else
		subtotalField.textContent = `$${subtotal.toString().slice(0, -3)},${subtotal.toString().slice(-3)}`
		subtotal -= discountField.textContent.replace(/[^\d]/gi, '').slice(0, 2);
		console.log(subtotal)
		totalField.textContent = `$${subtotal.toString().slice(0, -3)},${subtotal.toString().slice(-3)}`
}

deleteRow.forEach(element => {
	element.addEventListener("click", () => {
		switch (element) {
			case deleteRow[0]:
				row1.style.display = 'none';
				productTotalPrice[0].textContent = '$0,000'
				calculateTotal();
				break;
			case deleteRow[1]:
				row2.style.display = 'none';
				productTotalPrice[1].textContent = '$0,000'
				calculateTotal();
				break;
			case deleteRow[2]:
				row3.style.display = 'none';
				productTotalPrice[2].textContent = '$0,000'
				calculateTotal();
				break;
		}
	})
});
plusQty.forEach(elem => {
	elem.addEventListener("click", () => {
		switch (elem) {
			case plusQty[0]:
				quantityField[0].textContent = parseInt(quantityField[0].textContent) + 1;
				totalPrice0 = parseInt(productTotalPrice[0].textContent.replace(/[^\d]/gi, '').slice(0, -2)) + parseInt(productPrice[0].textContent.replace(/[^\d]/gi, '').slice(0, -2))
				productTotalPrice[0].textContent =  `$${totalPrice0.toString().slice(0, -3)},${totalPrice0.toString().slice(-3)}.00`
				calculateTotal(totalPrice0)
				break;
			case plusQty[1]:
					quantityField[1].textContent = parseInt(quantityField[1].textContent) + 1;
					totalPrice1 = parseInt(productTotalPrice[1].textContent.replace(/[^\d]/gi, '').slice(0, -2)) + parseInt(productPrice[1].textContent.replace(/[^\d]/gi, '').slice(0, -2))
					productTotalPrice[1].textContent =  `$${totalPrice1.toString().slice(0, -3)},${totalPrice1.toString().slice(-3)}.00`
					calculateTotal(undefined, totalPrice1)
				break;
			case plusQty[2]:
					quantityField[2].textContent = parseInt(quantityField[2].textContent) + 1;
					totalPrice2 = parseInt(productTotalPrice[2].textContent.replace(/[^\d]/gi, '').slice(0, -2)) + parseInt(productPrice[2].textContent.replace(/[^\d]/gi, '').slice(0, -2))
					productTotalPrice[2].textContent =  `$${totalPrice2.toString().slice(0, -3)},${totalPrice2.toString().slice(-3)}.00`
					calculateTotal(undefined, undefined,totalPrice2)
				break;
			}
	})
})
minusQty.forEach(elem => {
	elem.addEventListener("click", () => {
		switch (elem) {
			case minusQty[0]:
				if (quantityField[0].textContent == 1){
					row1.style.display = 'none'
					totalPrice0 = 0
				}

				quantityField[0].textContent = parseInt(quantityField[0].textContent) - 1;
				totalPrice0 = parseInt(productTotalPrice[0].textContent.replace(/[^\d]/gi, '').slice(0, -2)) - parseInt(productPrice[0].textContent.replace(/[^\d]/gi, '').slice(0, -2))
				productTotalPrice[0].textContent =  `$${totalPrice0.toString().slice(0, -3)},${totalPrice0.toString().slice(-3)}.00`
				calculateTotal(totalPrice0)
			break;
			case minusQty[1]:
				if (quantityField[1].textContent == 1){
					row2.style.display = 'none'
					totalPrice1 = 0
				}

				quantityField[1].textContent = parseInt(quantityField[1].textContent) - 1;
				totalPrice1 = parseInt(productTotalPrice[1].textContent.replace(/[^\d]/gi, '').slice(0, -2)) - parseInt(productPrice[1].textContent.replace(/[^\d]/gi, '').slice(0, -2))
				productTotalPrice[1].textContent =  `$${totalPrice1.toString().slice(0, -3)},${totalPrice1.toString().slice(-3)}.00`
				calculateTotal(undefined ,totalPrice1)
			break;
			case minusQty[2]:
				if (quantityField[2].textContent == 1) {
					row3.style.display = 'none'
					totalPrice2 = 0
				}

				quantityField[2].textContent = parseInt(quantityField[2].textContent) - 1;
				totalPrice2 = parseInt(productTotalPrice[2].textContent.replace(/[^\d]/gi, '').slice(0, -2)) - parseInt(productPrice[2].textContent.replace(/[^\d]/gi, '').slice(0, -2))
				productTotalPrice[2].textContent =  `$${totalPrice2.toString().slice(0, -3)},${totalPrice2.toString().slice(-3)}.00`
				calculateTotal(undefined, undefined,totalPrice2)
			break;
			}
	})
})