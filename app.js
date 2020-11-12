//ask usr what action to perorm
let   askUsr = prompt('Please select action:'),
        createEntry = [];
let newTask = 'n',
    listTask = 'list',
    deleteTask = 'delete',
    quit = 'q';
//if new - add new item to arr
while (askUsr === 'n') {
    if (askUsr === 'q') {break
    } else {
        askUsr = prompt('What would you like to do?');
        console.log(askUsr);
        if (askUsr) {
            askUsr = createEntry.push(askUsr);
            console.log(createEntry);
            askUsr = prompt('Please select action:');
        }
    }
}

//if list - list all to-dos

//if delete - delete specific to-do

//quit