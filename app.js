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


while (askUsr !=='q'){

     if (askUsr === 'n') {
        askUsr = prompt('What would you like to do?');
        console.log(`"${askUsr}" added to the list`);
        if (askUsr) {
            askUsr = createEntry.push(askUsr);
            askUsr = prompt('Please select action:');
        }
    }
    //list all entrys
    else if (askUsr === 'l') {
        console.log(lineBr);
        for (const task of createEntry){
            console.log(`${createEntry.indexOf(task)}: ${task}`)
        }
        console.log(lineBr);    
        askUsr = prompt('Please select action:');
    } 
    //delete entry
    else if (askUsr === 'd') {
        console.log('deleted')
        askUsr = prompt('Please select action:');
    }    
    else if (askUsr !== 'n' || askUsr !== 'l' || askUsr !== 'd'){
        askUsr = prompt('Please select CORRECT action:');
    } else {
        break;
    }
    
}



