const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
	const newColor = makeRandomColor();
	document.body.style.backgroundColor = newColor;
	h1.innerText = newColor;
})

const makeRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	//내림해야 해서 256을 곱해야함
	return `rgb(${r},${g},${b})`;
}