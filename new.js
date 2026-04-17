const addTasks = document.querySelector("#addTasks");
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");
const clearBtn = document.querySelector("#clearBtn");

let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

function addTask (event) {
    event.preventDefault ();

    if (taskInput.value === "") {
        alert('Please enter task.');
    } else { 
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        list.appendChild(li);
    }
    taskInput.value = "";
        
    }

    addBtn.addEventListener('click', function() {
        const (taskInput.value ===)
    })

    // const text = this.querySelector("taskInput");

    // const newTask = {
    //     text,
    //     done: false,
    // };


    // taskList.push(newTask);
    // populateList(taskList, list);
    // localStorage.setItem("taskList", JSON.stringify("taskList"));
    // this.reset () ;

}
