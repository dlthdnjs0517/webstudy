// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    // delay 시간을 랜덤으로 지정
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
//THE PROMISE VERSION
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!")
//         console.log(response)//success() 콜백
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!")
//                 console.log(response)//success() 콜백
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN(3rd)!!!")
//                         console.log(response)//success() 콜백
//                     }, function (err) {
//                         console.log("ERROR(3rd req)!!", err)//failure() 콜백
//                     })
//             }, function (err) {
//                 console.log("ERROR(2nd req)!!", err)//failure() 콜백
//             })
//     }, function (err) {
//         console.log("ERROR!!", err)//failure() 콜백

//     })
// 첫번째 요청이 실패하면 나머지는 실행되지도 않음

// ----------------------------------------------------
// const request = fakeRequestPromise('yelp.com/api/coffee/page1')
// request // request 는 객체이고, .then .catch는 메서드가 된다
// 하지만 굳이 변수에 저장할 필요는 없다!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => { //promise가 resolved되면 이 함수가 실행됨
//         console.log("PROMISE RESOLVED!(page1)")
//         console.log("IT WORKED!")

//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => { //promise가 resolved되면 이 함수가 실행됨
//                 console.log("PROMISE RESOLVED(page2)!")
//                 console.log("IT WORKED!")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => { //promise가 resolved되면 이 함수가 실행됨
//                         console.log("PROMISE RESOLVED(page3)!")
//                         console.log("IT WORKED!")
//                     })
//                     .catch(() => {
//                         console.log("oh no error! (page3)")
//                     })
//             })
//             .catch(() => {//promise가 rejected 되면 이 함수가 실행됨
//                 console.log("PROMISE REJECTED(page2)!!")
//                 console.log("OH NO! ERROR!!")
//             })


//     }).catch(() => {//promise가 rejected 되면 이 함수가 실행됨
//         console.log("PROMISE REJECTED(page1)!!")
//         console.log("OH NO! ERROR(page1)!!")
//     })

// ----------------------------------------
//위의 코드를 더 쉽게 만드는 방법
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!!!!! (page1)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
        //return을 하지 않으면 page 1이 성공했는지, 실패했는지 알 수 없음
        //return 한 경우 page1 요청이 성공적으로 끝난 후에만 다음 .then()이 실행됨
    })
    .then((data) => {
        console.log("IT WORKED!!!(page2)")
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!!(page3)")
        console.log(data)
    })
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!")
        console.log(err)
    })


