//동기 메서드 -> 동작이 완료될때 까지 다른 동작 실행 x
const fs = require('node:fs');
const folderName = process.argv[2] || 'Project' 
//터미널에서 첫번째로 작성한 인수를 가리킨다.


// mkdir('Dogs', { recursive: true }, (err) => {
// 	console.log("In the callback!")
//   if (err) throw err;
// }); 
//-----비동기 과정(동작이 완료되기 전에도 다른 동작 실행 o)--------
try{
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`,'');
fs.writeFileSync(`${folderName}/app.css`,'');
fs.writeFileSync(`${folderName}/app.js`,'');
							//원하는 인수를 더 추가할 수 있음!
}
catch(e){
	console.log("something went wrong!");
	console.log(e);
}

//mkdir은 비동기 작업이기 때문에, 비동기 예약(mkdir('Dogs', ...)) 후,
// console.log('i come after...') 실행.
//폴더 만드는 작업이 완료되면 콜백 호출. -> 'in the callback!'






// const fs = require('fs');
// const folderName = process.argv[2] || 'Project';
 
// try {
//     fs.mkdirSync(folderName);
//     fs.writeFileSync(`${folderName}/index.html`, '');
//     fs.writeFileSync(`${folderName}/app.js`, '');
//     fs.writeFileSync(`${folderName}/styles.css`, '');
// } catch (e) {
//     console.log("SOMETHING WENT WRONG!!!");
//     console.log(e);
// }
