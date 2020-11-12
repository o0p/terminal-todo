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
        console.log(`"${askUsr}" added to the list`);
        if (askUsr) {
            askUsr = createEntry.push(askUsr);
            askUsr = prompt('Please select action:');
        }
    }
}
//list all entrys
if (askUsr === 'l' || askUsr !== 'q') {
    console.log(lineBr);
    for (const task of createEntry){
        console.log(`${createEntry.indexOf(task)}: ${task}`)
    }
    console.log(lineBr);    
    askUsr = prompt('Please select action:');
    while (askUsr === 'n') {
        if (askUsr === 'q') {
            break
        } else {
            askUsr = prompt('What would you like to do?');
            console.log(`"${askUsr}" added to the list`);
            if (askUsr) {
                askUsr = createEntry.push(askUsr);
                askUsr = prompt('Please select action:');
            }
        }
    }}

    //delete specific to-do
    // if (askUsr === 'd' || askUsr !== 'q') {
    //     console.log('deleted')
    //     askUsr = prompt('Please select action:');
    //     console.log(askUsr);
    // }

//quit

