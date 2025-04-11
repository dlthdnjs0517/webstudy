// const lis = document.querySelectorAll('li')
// for (let li of lis) {
//     li.addEventListener('click', () => {
//         li.remove();
//     })}
//해당 코드는 기존에 있었던 li들만 삭제처리가 되고, 나중에 추가된 li들에 대해서는 효력이 없음.
//이때 필요한게 delegation

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', (e) => {
    // console.log('click on ul!');//ul을 클릭하는 것을 인지
    // console.log(e); event 객체를 통해 내가 어떤 것을 클릭했는지 확인-li
    // console.dir(e.target);//클릭한게 어떤 요소인지 확인
    // e.target.remove();
    //e.target(클릭한 요소가 list).remove ->list를 remove
    // -------------------------
    e.target.nodeName === 'LI' && e.target.remove();
})
