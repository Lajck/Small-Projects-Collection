let input = document.querySelector('#input')
let output = document.querySelector('#output')

window.onload = () => {
	input.value = ''
}

function convert(binary) {
	let decimal = 0
	for (i = 0; i < binary.length; i++) {
		let digit = Number(binary[(i - binary.length + 1) * (-1)])
		decimal += ( 2 ** i ) * digit
	}
	return decimal
}

function binToDec(number) {
	// Search for any value that is not 0 or 1
	invalidChar = input.value.search(/[^01]/)

	// If there are no invalid characters, convert to decimal
	if (invalidChar === -1) {
		output.innerHTML = convert(number)
		output.style.color = "#FFFFFF"
	}	else {
		output.innerHTML = "Invalid value!"
		output.style.color = "#823636"
	}
}

input.addEventListener('keyup', () => {
	binToDec(input.value)
})
