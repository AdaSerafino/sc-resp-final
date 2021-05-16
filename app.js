let toDoAdder = document.querySelector("#addToDo");
let taskList = document.querySelector("#addedTasks")
let tasks = [];


function reset() {
    toDoAdder.value ='';
    taskList.innerHTML = ''; 
}

toDoAdder.addEventListener( 'keyup', function(event) {
    if(event.code == 'Enter') { 
        let added = toDoAdder.value;
        tasks.push({
            description: added, 
            state: 'active'
        })
        reset();
        createTask('all');
    }
} ,
)
function createTask(filter) {
    let length = tasks.length;
    for (let i = 0; i < length; i++) {
        if (filter == 'active' && tasks[i].state != 'active') {
            continue;
        }

        if (filter == 'completed' && tasks[i].state != 'completed') {
            continue;
        }

        let addedInput = document.createElement("input");
        let addedLabel = document.createElement("label");
        let addedButton = document.createElement("button");

        addedInput.setAttribute( 'type', 'checkbox');
        if (tasks[i].state !== "active") {
            addedInput.setAttribute('checked', 'true')
        }
        addedButton.innerText = "x"
        addedLabel.innerText = tasks[i].description;
        taskList.appendChild(addedInput);                    
        taskList.appendChild(addedLabel);                    
        taskList.appendChild(addedButton);  
        
        addedButton.addEventListener('click', function(){
            tasks.splice(i , 1)
            reset();
            createTask();
        })
          
        addedInput.addEventListener('change', function(event){    
         if (this.checked) {
            tasks[i].state = 'completed';
         } else {
         tasks[i].state = 'active';}
        })
    } 
} 

document.querySelector("#completed").addEventListener('click' , function(){
    reset();
    createTask("completed");

} )

document.querySelector("#active").addEventListener('click', function(){
reset();
createTask('active');

})

document.querySelector("#all").addEventListener('click', function(){
    reset();
    createTask();
    
    })