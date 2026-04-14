const form = document.querySelector("#form");
const input = document.querySelector("#input");
const postBtn = document.querySelector("#postBtn");
const list = document.querySelector("#list");

//Using CRUD; Create a post

postBtn.addEventListener("click", function () {
    const newPost = input.value.trim()

    if (newPost === "") {
        alert("Please create post.");
        return;
    }


const li = document.createElement("li");
li.textContent = newPost;
list.appendChild(li);







input.value = "";

}) 

