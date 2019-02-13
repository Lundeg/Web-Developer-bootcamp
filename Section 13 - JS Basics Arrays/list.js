var todos = [];
var input = prompt("what would you like to do?");


while(input !== 'quit'){
    //list haruulah
    if(input === 'list'){
        ListTodo();
    }
    else if(input === 'new'){ 
        AddedTodo();
    }

    //remove
    else if(input === 'delete'){
        DeleteTodo();
    }


    // input
    input = prompt("what would you like to do")
}

function AddedTodo(){
    //shine element nemenh huvisagch
    var newTodo = prompt("Enter new Todo?");
    // use push add to todos array
    todos.push(newTodo); 
    console.log("Added todo");
}

function ListTodo(){
    console.log("**********");
    todos.forEach(function(todo,i){
        console.log(i + ": " + todo);
    });
    console.log("**********");

}

function DeleteTodo(){
    // ask for delete todo index
    var index = prompt("Enter index of delete todo?");
    //use splice(); delete
    todos.splice(index,1);    
}

// finished
console.log("Finished, bye!");