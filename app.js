//ask usr what action to perform
let   askUsr = prompt('Please select action:');
const itemtList = [];
//available actions
let indexDel = Number;
    lineBr = '******************';
//add new item to the list
while (askUsr !=='q'){
     if (askUsr === 'n') {
        askUsr = prompt('What would you like to do?');
        console.log(`"${askUsr}" added to the list`);
        if (askUsr) {
            askUsr = itemtList.push(askUsr);
            askUsr = prompt('Please select action:');
        }
    }
    //list all items
    else if (askUsr === 'l') {
        console.log(lineBr);
        for (const item of itemtList){
            console.log(`${itemtList.indexOf(item)}: ${item}`)
        }
        console.log(lineBr);
        askUsr = prompt('Please select action:');
    } 
    //delete item
    else if (askUsr === 'd' ) {        
        indexDel = parseInt(prompt('Please select index of item to delete:'));
        while (indexDel < 0){
            indexDel = parseInt(prompt('Warning! Index can not be negative! Please select index of item to delete:'));
        }
        console.log(`Item "${itemtList[indexDel]}" successfully deleted.`);
        itemtList.splice(indexDel, 1);
        askUsr = prompt('Please select action:');
    }
    else if (askUsr !== 'n' || askUsr !== 'l' || askUsr !== 'd'){
        askUsr = prompt('ERROR: action not recognized. Please request correct action');
    } else {
        break;
    }
}


