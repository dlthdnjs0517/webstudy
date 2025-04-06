// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
// 	link.innerText = 'I AM A LINK!!'
// }

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

//attribute 변경법:

//document.querySelector('a').setAttribute('변경속성','변경할 내용')