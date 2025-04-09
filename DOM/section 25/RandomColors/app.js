const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
	const newColor = makeRandomColor();
	document.body.style.backgroundColor = newColor;
	h1.innerText = newColor;
	const rgbValues = newColor.match(/\d+/g);
	const r = parseInt(rgbValues[0]);
	const g = parseInt(rgbValues[1]);
	const b = parseInt(rgbValues[2]);

	// 밝기 계산: r + g + b 값이 400보다 작으면 텍스트 색을 흰색으로 설정
	if (r + g + b < 400) {
		h1.style.color = 'white';
	} else {
		h1.style.color = 'black';  // 밝은 배경에서는 검은색 텍스트로 설정
	}
});


const makeRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	//내림해야 해서 256을 곱해야함
	return `rgb(${r},${g},${b})`;
}
