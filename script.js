const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

// CRUD - Creat, Read, Update, Delete

// Create - create a new task
//1. capture/target text entered in input field. 
//2. using the addbtn to send the text inside the input field into the list

addBtn.addEventListener("click", function () {
    const newTask = input.value.trim()

    if(newTask === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = newTask;
    list.appendChild(li);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
     li.appendChild(editBtn);
    editBtn.addEventListener("click", function() {
        const updatedTask = prompt("Enter the updated task", li.textContent);
        if (updatedTask !== null && updatedTask.trim() !== "") {
            li.textContent = updatedTask.trim();
            li.appendChild(editBtn)
        }
    })

    // Delete button for each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        li.remove();
    })

    input.value = "";

})

// Read - display tasks (already done by default)

// Edit - update a task
