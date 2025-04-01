let choice = prompt('What would you like to do?');
const addlist = [];
while (choice !== 'quit' && choice !== 'q') {
	if (choice === 'new') {
		const newTodo = prompt('what is new to do?');
		addlist.push(newTodo);
		console.log(`${newTodo} is added to the list`);
		// addlist.push(prompt("Enter new to do"));
		// console.log(`${addlist[addlist.length - 1]} is added to list`);
	} else if (choice === 'list') {
		console.log("**********")
		for (let i = 0; i < addlist.length; i++) {
			console.log(`${i}: ${addlist[i]}`);
		}
		console.log("**********")
	} else if (choice === 'delete') {
		const indexNum = parseInt(prompt("Enter a index of todo to delete"));
		if (!Number.isNaN(indexNum)) {
			const deleted = addlist.splice(indexNum, 1);
			console.log(`ok, deleted ${deleted[0]}`);
		} else {
			console.log('Unknown Index');
		}
	}
	choice = prompt('What would you like to do?');
}
console.log('ok quit the app!');