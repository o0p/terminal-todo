//ask usr what action to perorm
let   askUsr = prompt('Please select action:'),
        createEntry = [];
//available actions
let newTask = 'n',
    listTask = 'l',
    deleteTask = 'd',
    quit = 'q',
    lineBr = '******************';
//add new item to arr
while (askUsr === 'n') {
    if (askUsr === 'q') {
        break
    } else {
        askUsr = prompt('What would you like to do?');
        console.log(askUsr);
        if (askUsr) {
            askUsr = createEntry.push(askUsr);
            askUsr = prompt('Please select action:');
        }
    }
}
//list all entrys
if (askUsr === 'l') {
    for (const task of createEntry){
        console.log(lineBr);
        console.log(task)
        console.log(lineBr);
    }
    
}


//if delete - delete specific to-do

//quit