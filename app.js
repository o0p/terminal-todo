//ask usr what action to perform
let   askUsr = prompt('Please select action:');
const itemtList = [];
//available actions
let addItem = 'n',
    listAll = 'l',
    delItem = 'd',
    quit = 'q',
    indexDel = Number;
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
    //list all items
    else if (askUsr === listAll) {
        console.log(lineBr);
        for (const item of itemtList){
            console.log(`${itemtList.indexOf(item)}: ${item}`)
        }
        console.log(lineBr);
        askUsr = prompt('Please select action:');
    } 
    //delete item
    else if (askUsr === delItem ) {        
        indexDel = parseInt(prompt('Please select index of item to delete:'));
        while (indexDel < 0){
            indexDel = parseInt(prompt('Warning! Index can not be negative! Please select index of item to delete:'));
        }
        console.log(`Item "${itemtList[indexDel]}" successfully deleted.`);
        itemtList.splice(indexDel, 1);
        askUsr = prompt('Please select action:');
    }
    else if (askUsr !== addItem || askUsr !== listAll || askUsr !== delItem){
        askUsr = prompt('ERROR: action not recognized. Please request correct action');
    } else {
        break;
    }
}


