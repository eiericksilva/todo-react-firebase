
const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');

const tasksContainer = document.querySelector('.tasks-container');

const validateInput = () => { 
    return inputElement.value.trim().length > 0 
}

        /* Adicionando Nova Task */

const handleAddTask = () => {

    const inputIsValid = validateInput();  

    if(!inputIsValid) {
       return inputElement.classList.add("error");

    }

    const taskItemContainer = document.createElement("div");
    
    taskItemContainer.classList.add("task-item");


    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

            /* Adicionando evento para marcar Task como feita */

    taskContent.addEventListener('click', () => handleClick(taskContent))



    const deleteItem = document.createElement('i');

    deleteItem.classList.add('far');
    deleteItem.classList.add('fa-trash-alt');
    deleteItem.classList.add('delete-task-button')

            /* Adicionando evento para excluir Task */

    deleteItem.addEventListener('click', () => 
    handleDeleteClick(taskItemContainer, taskContent))



    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer)

    inputElement.value = ""

            /* Fim do handleAddTask */

};

/* Função para marcar Task como feita */

const handleClick = (taskContent) => {
    /* pegar todos itens (tasks) */
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {

        if(task.firstChild === taskContent){
            task.firstChild.classList.toggle("completed");
        }
    }
};

const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        if (task.firstChild === taskContent) {
            taskItemContainer.remove();
            
        }
    }
}
 


const handleInputChange = () => {

    const inputIsValid = validateInput();

    if(inputIsValid) {
        return inputElement.classList.remove("error");
    }
};


addTaskButton.addEventListener('click', () => {
   handleAddTask()
});


inputElement.addEventListener('change', () => {

    handleInputChange()
});
