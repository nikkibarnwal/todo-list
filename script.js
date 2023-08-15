let todoList = [];
let leftTask = 0;
function addTodo() {
    document.getElementById('errorMessage').innerHTML = "";
    let todoInput = document.getElementById('todoInput').value;
    if (todoInput !== "") {
        let dynamicId = Date.now();
        let todoItem = {
            id: dynamicId,
            taskName: todoInput,
            isCompleted: false
        }
        document.getElementById('todoInput').value = "";
        todoList.push(todoItem);
        showList();
    } else {
        document.getElementById('errorMessage').innerHTML = "Please enter a valid Input";
    }

}
function showList() {
    let list = "";
    taskLeft = todoList.length;
    todoList.map((item) => {
        let complete = item.isCompleted ? `class='completed'` : "";
        let checked = item.isCompleted ? `checked` : "";

        // console.log(item.id);
        list += `<li>
        <input type="checkbox"  ${checked} id = "completeCheckBox" value="${item.id}" onchange="completeTask(this)" />
        <label ${complete}>${item.taskName}</label>
        <button type ="button" onclick="deleteItem(${item.id})">X</button>   </li>     `;
        if (item.isCompleted) {
            taskLeft--;
        }
    })
    document.getElementById('taskLeft').innerHTML = taskLeft + " Task left";
    document.getElementById('list-item').innerHTML = list;

}
function completeTask(element) {
    // console.log(element);
    todoList = todoList.map((item) => {
        // console.log(item.isCompleted);
        if (element.value == item.id) {
            item.isCompleted = element.checked;
        }
        return item;
    });
    showList();
    if (taskLeft == 0 && todoList.length > 0)
    {
        document.getElementById('checkAll').checked = true;
    }else {
        document.getElementById('checkAll').checked = false;

    }
    //    console.log(todoList);
}
function deleteItem(deleteId) {
    todoList = todoList.filter((item) => item.id !== deleteId);
    showList();
    //    console.log(itemId);
}
function checkAll(element) {
    todoList = todoList.map((item) => {
        item.isCompleted = element.checked;
        return item;
    })
    showList();
}


