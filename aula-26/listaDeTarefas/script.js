document.addEventListener("DOMContentLoaded", () => {

    // FAZENDO CONEXÃO COM O DOM
    const addTaskButton = document.getElementById('addTask');
    const taskText = document.getElementById("taskText");
    const taskList = document.getElementById("taskList");

    // ARRAY DE TAREFAS
    const tasks = [];

    // READ
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const taskItem = createTaskItem(task, index);
            taskList.appendChild(taskItem);
        });    
    };

    // CREATE
    function createTaskItem(task, index) {
        const taskItem = document.createElement("li");
        taskItem.textContent = task.text;

        // CRIANDO O BOTÃO DE EDITAR
        const editButton = createButton('Editar');
        editButton.addEventListener("click", () => {
            editTask(index);
        });

        // CRIANDO O BOTÃO DE DELETAR
        const deleteButton = createButton('Deletar');
        deleteButton.addEventListener("click", () => {
            deleteTask(index);
        });

        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        return taskItem;

    };
    
    // CRIANDO O BOTÃO DINAMICAMENTE
    function createButton(label) {
        const button = document.createElement("button");
        button.textContent = label;

        return button;
    };

    // UPDATE
    function editTask(index) {
        const newText = prompt("Editar Tarefa:", tasks[index].text);

        if (newText !== null) {
            tasks[index].text = newText;
            renderTasks();
        };
    };

    // DELETE
    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    };

    addTaskButton.addEventListener('click', () => {
        const taskTextValue = taskText.value;
        if (taskTextValue) {
            tasks.push({text: taskTextValue});
            taskText.value = "";
            renderTasks();
        };
    });
});