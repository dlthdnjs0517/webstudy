const form = document.querySelector('#shelterForm')
const input = document.querySelector('#catName')
const list = document.querySelector('#cats')
form.addEventListener("submit", (e) => {
    // console.log("SUBMITTED!")
    //아주 빠르게 SUBMITTED! 가 뜨고 action에 지정된 페이지로 넘어감
    // ---------------------------------------
    e.preventDefault();
    // console.log("SUBMITTED THE FORM!")
    //form이 제출되었지만 다음페이지로 넘어가지 않음
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    console.log(newLI);
    list.append(newLI)
    input.value = '';
})
