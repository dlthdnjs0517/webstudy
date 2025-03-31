let choice;
let addlist = [];
while (choice !== 'quit') {
	choice = prompt("What would you like to do?");
	if (choice === 'quit') {
		break;
	}
	else if (choice === 'new') {
		addlist.push(prompt("Enter new to do"));
		console.log(`${addlist} is added to list`);
	} else if (choice === 'list') {
		console.log("**********")
		for (let i = 0; i < addlist.length; i++) {
			console.log(`${i}: ${addlist[i]}`);
		}
		console.log("**********")
	} else if (choice === 'delete') {
		indexNum = parseInt(prompt("Enter a index of todo to delete"));
		while (!indexNum) {
			console.log("enter a valid index number ")
		}
		addlist.splice(indexNum, 1);
	}
}