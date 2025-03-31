let choice;
const addlist = [];
while (choice !== 'quit') {
	choice = prompt("What would you like to do?");
	if (choice === 'new') {
		addlist.push(prompt("Enter new to do"));
		console.log(`${addlist[addlist.length - 1]} is added to list`);
	} else if (choice === 'list') {
		console.log("**********")
		for (let i = 0; i < addlist.length; i++) {
			console.log(`${i}: ${addlist[i]}`);
		}
		console.log("**********")
	} else if (choice === 'delete') {
		indexNum = parseInt(prompt("Enter a index of todo to delete"));
		addlist.splice(indexNum, 1);
	} else if (choice === 'quit') break;
}