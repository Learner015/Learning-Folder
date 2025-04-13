let todo = [];
let req = prompt("Please enter your request")

while(true){
    if(req == 'quit'){
        console.log("quitting app");
        break;
    }
    if(req == 'list'){
        console.log('----------------------');
        for (let i = 0; i<todo.length();i++){
            console.log(i,task[i])
        }
        console.log('----------------------');
        
    }

    else if(req == 'add'){
        let task = prompt("please enter the add ");
        todo.push(task);
        console.log("task added sucessfully")
      
    }
    else if(req == 'delete'){
        let ind = prompt('please add the index of your todo.')
        todo.splice(ind)
        console.log(todo)
    }
    req = prompt("Please enter your request")
}