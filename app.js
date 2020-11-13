//ask usr what action to perorm
let   askUsr = prompt('Please select action:');
const itemtList = [];
//available actions
let addItem = 'n',
    listAll = 'l',
    delItem = 'd',
    quit = 'q',
    lineBr = '******************';
//add new item to the list
while (askUsr !==quit){
     if (askUsr === addItem) {
        askUsr = prompt('What would you like to do?');
        console.log(`"${askUsr}" added to the list`);
        if (askUsr) {
            askUsr = itemtList.push(askUsr);
            askUsr = prompt('Please select action:');
        }
    }
    //list all entrys
    else if (askUsr === listAll) {
        console.log(lineBr);
        for (const item of itemtList){
            console.log(`${itemtList.indexOf(item)}: ${item}`)
        }
        console.log(lineBr);
        askUsr = prompt('Please select action:');
    } 
    //delete entry
    else if (askUsr === delItem ) {
        //template
        console.log('deleted')
        askUsr = prompt('Please select action:');
    }
    else if (askUsr !== addItem || askUsr !== listAll || askUsr !== delItem){
        askUsr = prompt('ERROR: action not recognized. Please request correct action');
    } else {
        break;
    }
}



