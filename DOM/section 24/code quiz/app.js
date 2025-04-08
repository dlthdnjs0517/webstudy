const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//PLEASE DON'T CHANGE THIS LINE!

const spans = document.querySelectorAll('span');
// for (let i = 0; i < spans.length; i++) {
// 	spans[i].style.color = colors[i];
// }
let index = 0;
for (let span of spans) {
	span.style.color = colors[index];
	index++;
} 