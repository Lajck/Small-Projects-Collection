let handlers = document.querySelectorAll('.handler')
let handlers_type = document.querySelectorAll('.handler_type')
const moreValues = document.getElementById('more_values')
const button = document.querySelector('#code')

handlers.forEach(handler => {
	handler.addEventListener('keyup', changeBorderRadius)
})

handlers_type.forEach(handler_type => {
	handler_type.addEventListener('keyup', changeBorderRadius)
})

button.addEventListener('click', copyToClipboard)

moreValues.addEventListener('click', toggleMoreValues)

window.onload = () => {
	toggleMoreValues()
	handlers.forEach(handler => handler.value = '0')
	handlers_type.forEach(handler_type => handler_type.value = 'px')
}

function changeBorderRadius() {
	let box = document.getElementById('box')
	let cssCode = document.querySelector('#css_code')
	handlers_type = document.querySelectorAll('.handler_type')
	handlers = document.querySelectorAll('.handler')

	if (moreValues.checked) {
		box.style.borderRadius = `
			${handlers[0].value}${handlers_type[0].value}
			${handlers[1].value}${handlers_type[1].value}
			${handlers[2].value}${handlers_type[2].value}
			${handlers[3].value}${handlers_type[3].value} /
			${handlers[4].value}${handlers_type[4].value}
			${handlers[5].value}${handlers_type[5].value}
			${handlers[6].value}${handlers_type[6].value}
			${handlers[7].value}${handlers_type[7].value}` 
	} else {
		box.style.borderRadius = `
			${handlers[0].value}${handlers_type[0].value}
			${handlers[1].value}${handlers_type[1].value}
			${handlers[2].value}${handlers_type[2].value}
			${handlers[3].value}${handlers_type[3].value}` 
	}

	cssCode.innerHTML = `border-radius: ${box.style.borderRadius};`
}

function toggleMoreValues() {
	let optional = document.querySelectorAll('.optional')
	if (moreValues.checked) {
		optional.forEach(el => el.style.display = "inline-block")
	} else {
		optional.forEach(el => el.style.display = "none")
	}
	changeBorderRadius()
}

function copyToClipboard() {
	let cssCode = document.getElementById('css_code').innerHTML
	let copyText = document.querySelector('#clipboard p')

	navigator.clipboard.writeText(cssCode)

	copyText.style.display = 'block'
	copyText.style.left = '-70px'
	copyText.innerHTML = 'COPIED'

	setTimeout(() => {
		copyText.innerHTML = 'COPY'
		copyText.style.left = '-60px'
		copyText.style.display = 'none'
	}, 3000)

}
