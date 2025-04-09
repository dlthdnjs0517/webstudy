const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    //내림해야 해서 256을 곱해야함
    return `rgb(${r},${g},${b})`;
}

const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
//h1은 페이지당 하나씩이 가장 적절하다.
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {//색을 바꾸는 generic 함수를 만든다
    this.style.color = makeRandomColor();
    this.style.backgroundColor = makeRandomColor();
}