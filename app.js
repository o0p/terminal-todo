//ask usr what action to perform
let   askUsr = prompt('Please select action:'),
      lineBr = '******************';
const itemtList = [];
//add new item
while (askUsr !=='q'){
    while (askUsr !== 'n' && askUsr !== 'l' && askUsr !== 'd' && askUsr !=='q'){
        askUsr = prompt('ERROR: action not recognized. Please request correct action');     
    } 
    if (askUsr === 'n') {
       askUsr = prompt('What would you like to do?');
       console.log(`"${askUsr}" added to the list`);
       askUsr = itemtList.push(askUsr);
   }
    //list all items
    else if (askUsr === 'l') {
        console.log(lineBr);
        for (let item of itemtList){
            console.log(`${itemtList.indexOf(item)}: ${item}`)
        }
        console.log(lineBr);
    } 
    //delete item
    else if (askUsr === 'd' ) {        
       let indexDel = parseInt(prompt('Please select index of item to delete:'));
       while (Number.isNaN(indexDel) || indexDel < 0 || indexDel > itemtList.length){
           indexDel = parseInt(prompt('Warning! Index can not be negative and has to exist! Please select index of item to delete:'));
       }
       console.log(`Item "${itemtList[indexDel]}" successfully deleted.`);
       itemtList.splice(indexDel, 1);
    }      
    askUsr = prompt('Please select action!');    
}
console.log('Quitting');

