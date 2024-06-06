function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        li.appendChild(checkbox);
        var taskText = document.createTextNode(taskInput.value);
        li.appendChild(taskText);
        taskList.appendChild(li);
        taskInput.value = "";

        checkbox.addEventListener("change", function() {
            if (this.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });

        li.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            this.remove();
        });
    }
}