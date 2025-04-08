const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
// 	link.innerText = 'I AM A LINK!!'
// }
for (let link of allLinks) {
	link.style.color = 'rgb(0,108,134)'
	link.style.textDecorationColor = 'magenta'
	link.style.textDecorationStyle = 'wavy'

}
//모든 앵커가 해당 속성값으로 바뀜. 
//!!주의 !!!  대쉬(-)는 쓰이지 않음!!!!!! 

const h1 = document.querySelector('h1')
// document.querySelector('h1').innerText = '<i>asdfasf</i>'
//<i>asdfasf</i>가 h1요소로 그대로 나타남,<i>태그를 텍스트로 인식해서 저렇게 됨

// document.querySelector('p').innerHTML
// 결과값에 모든 html 태그요소 및 컨텐츠들이 표시됨.(아래 참고)
//'The <b>Silkie</b> (sometimes spelled <b>Silky</b>)
//  is a <a href="/wiki/List_of_chicken_breeds" 
// title="List of chicken breeds">breed</a> of 
// <a href="/wiki/Chicken" title="Chicken">chicken</a> named for\n

// document.querySelector('h1').innerHTML = '<i>asdfasdf</i>'
//line 7의 결과와 달리 <i></i>가 적용된 asdfasdf가 나옴.(html임을 인식)

// document.querySelector('h1').innerHTML += '<sup>asdfasdf</sup>'
//+= 연산자도 적용가능

// document.querySelector('#banner').id = 'Whoops'
//id를 변경함으로써 이미지에 적용되어있는 id 속성에 영향을 줌(사이즈 조절됨)

//!!~ attribute 변경법 ~!!:

//document.querySelector('a').setAttribute('변경할 속성','변경할 내용')

//.style 객체를 이용해서 값을 변경하는 방법도 가능
// 명령어 : .style.color
// h1.style.color
// >'magenta'
// h1.style.color = 'green'
// >'green'
// h1.style.fontSize = '3em'
// >'3em'
// h1.style.border = '2px solid'
// >'2px solid'
// h1.style.border = '2px solid pink'
// >'2px solid pink'
// h1.style.textAlign = 'center'
// >'center'

//값이 변경되는 과정 

// window.getComputedStyle(계산된 요소)

//~! 어떤 요소의 부모,자식요소에 접근하는 방법
const first = document.querySelector('b')
first.parentElement//직속부모 요소인 <p></p>가 나옴
const paraghraph = first.parentElement
paraghraph.childElementCount//8
paraghraph.children//HTMLCollection(8) [b, b, a, a, a, a, a, a]

//!참고!html collection은 라이브 컬렉션으로, 동적요소임
//document.getElementsByClassName(),
//document.getElementsByTagName() 등으로 수집 가능

const firstImg = document.querySelector('.square')
firstImg.nextSibling //인접한 요소가 text node 형식으로 반환됨
firstImg.nextElementSibling//인접한 요소가 element형식으로 반환됨.

//element --> <img>,<p>,<h1> 같은 태그를 나타냄.
//text node --> 요소안에 포함된 텍스트를 나타내는 노드

//~! 새로운 DOM요소를 생성하는 방법

document.createElement('img')
//()안에는 태그명이(element) 옴, 페이지 상으로 나타나지 않음
const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D'

//추가한 이미지를 페이지에 나타나게 하는 방법
//첫번째!)
document.body.appendChild(newImg);
newImg.classList.add('square');
//css의 square 클래스에 넣어 사진 크기를 조정
//다른 예시
const newH3 = document.createElement('h3');//내용물없는 h3 생성
newH3.innerText = 'I am New!'
document.body.appendChild(newH3)
//-------------------------------------//
//두번째 !!)
const p = document.querySelector('p')
p.append('i am new text kkyahu~')
// 문단의 마지막에 새로운 요소가 추가된다.

p.append('asdfasfds', 'asdfasdfasfdasf')
//여러개도 가능

const newB = document.createElement('b')
newB.append('Hi!')
p.prepend(newB) // 문단의 맨 앞에 새로운 요소 추가

//! 특정 위치에 새로운 요소를 추가하고 싶은 경우?
//insertAdjacentElement를 사용한다.
//종류:	beforebegin, afterbegin, beforeend, afterend

const h2 = document.createElement('h2')
h2.append("are adorable chickens")
h1.insertAdjacentElement('afterend', h2)
//h1요소 다음으로 추가된 h2 요소

//insertAdjacentElement와 비슷한 역할을 하는 'AFTER'
const h3 = document.createElement('h3')
h3.innerText = 'i am h3';
h1.after(h3)

//remove
//<p>의 가장 첫번째 bold 태그 단어를 삭제한다고 헀을때
//1번째 방법)
const firstB = document.querySelector('b');
firstB.parentElement.removeChild(firstB);
//부모 노드로 거슬러 올라간뒤,자식 노드 중 원하는 노드를 삭제하는 방법
//------------------------------------------------
//2번째 방법
const img = document.querySelector('img');
img.remove()
