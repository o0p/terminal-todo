//ask usr what action to perorm
let   askUsr = prompt('Please select action:');
const createEntry = [];
//available actions
let newTask = 'n',
    listTask = 'l',
    deleteTask = 'd',
    quit = 'q',
    lineBr = '******************';
//add new item to the list
while (askUsr !==quit){
     if (askUsr === newTask) {
        askUsr = prompt('What would you like to do?');
        console.log(`"${askUsr}" added to the list`);
        if (askUsr) {
            askUsr = createEntry.push(askUsr);
            askUsr = prompt('Please select action:');
        }
    }
    //list all entrys
    else if (askUsr === listTask) {
        console.log(lineBr);
        for (const task of createEntry){
            console.log(`${createEntry.indexOf(task)}: ${task}`)
        }
        console.log(lineBr);    
        askUsr = prompt('Please select action:');
    } 
    //delete entry
    else if (askUsr === deleteTask ) {
        console.log('deleted')
        askUsr = prompt('Please select action:');
    }    
    else if (askUsr !== newTask || askUsr !== listTask || askUsr !== deleteTask){
        askUsr = prompt('Please select CORRECT action:');
    } else {
        break;
    }    
}



