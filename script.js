const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

// CRUD - Create, Read, Update, Delete

// Create - create a new task
//1. capture/target text entered in input field. 
//2. using the addbtn to send the text inside the input field into the list

addBtn.addEventListener("click", function () {
    const newTask = input.value.trim()

    if(newTask === "") {
        alert("Please enter a task");
        localStorage.setItem("input", JSON.stringify(newTask));
        const parseNewTask = JSON.parse(localStorage.getItem("newTask"));

        return;
    }

    // function display() {
    //     localStorage.setItem()
    // }

    const li = document.createElement("li");
    li.textContent = newTask;
    list.appendChild(li);

    // const liSpan = document.createElement("span");
    // liSpan.textContent = newTask;
    // li.appendChild(liSpan);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    li.appendChild(editBtn);
    editBtn.addEventListener("click", function() {
        const updatedTask = prompt("Enter the updated task", li.firstChild.textContent);
        if (updatedTask !== null && updatedTask.trim() !== "") {
            li.firstChild.textContent = updatedTask.trim();
            // li.appendChild(editBtn);


        }
    })
     
    // Delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Clear";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        li.remove();
    })

    console.log(newTask);




    input.value = "";

})

// Read - display tasks (already done by default)

// Edit - update a 

//localstorage
