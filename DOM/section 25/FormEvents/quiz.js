const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const input1 = product.value;
	const input2 = qty.value;
	const newLI = document.createElement('li');
	newLI.innerText = `${input2} ${input1}`;
	list.appendChild(newLI);
	form.reset(); 
	//폼을 초기상태로 리셋,폼 제출 취소, 초기화
	// input.value = '' 
	// 특정 input 값을 지금 이 순간에 비움, 사용자 입력만 지우고 싶을때

})

//SOLUTION #2
// const form = document.querySelector('form');
// const ul = document.querySelector('#list');
 
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const qty = form.elements.qty.value;
//   const product = form.elements.product.value;
//   const li = document.createElement('li');
//   li.innerText = `${qty} ${product}`;
//   ul.appendChild(li);
//   form.reset();
// });
//SOLUTION #1
// const form = document.querySelector('form');
// const list = document.querySelector('#list');
 
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const productInput = form.elements.product;
//   const quantityInput = form.elements.qty;
//   addElement(productInput.value, quantityInput.value);
//   productInput.value = '';
//   quantityInput.value = '';
// });
 
// const addElement = (product, qty) => {
//   const li = document.createElement('li');
//   li.innerText = `${qty} ${product}`;
//   list.appendChild(li);
// }