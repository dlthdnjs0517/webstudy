import { franc, francAll } from "franc";
import langs from "langs";

const input = process.argv[2];
// const langCode = franc('문장이 꽤 길어야 인식을 하나봐요');
const langCode = franc(input);
const language = langs.where("3", langCode);
if (langCode === 'und') {
	console.log("sorry, couldn't figure it out! ")
} else {


	console.log(language);
	console.log(language.name);
}