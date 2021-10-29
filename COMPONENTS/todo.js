export class Todo {
    constructor(...params) {

        for (const element of params) {
            this[element] = document.querySelector('#' + element);
            // console.log(element);
        }
    }
    init() {
        this.addListeners();
    }
    addListeners() {

        this.taskInput.addEventListener('keyup', this.pressEnter);
        this.addTask.addEventListener('click', this.addNewTask);

    }
    pressEnter = (event) => {
        if (event.keyCode === 13) {
            this.addNewTask(event);
        }
    }

    addNewTask = (event) => {
        event.preventDefault();
        const task = this.taskInput.value;
        if (!task) {
            alert('Enter Task');
            return false;
        }
        const item = this.createItem(task);
        this.todoList.appendChild(item);
        this.resetInput();
    }
    createItem(task) {
        const item = document.createElement('li');
        item.innerText = task;
        this.addCheckbox(item);
        this.addRemoveTaskBtn(item);
        return item;
    }
    addRemoveTaskBtn(item) {
        const btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.innerText = 'x';
        btn.addEventListener('click', this.removeItem);

        item.appendChild(btn);
    }

    removeItem = (event) => {
        const btn = event.target;
        const li = btn.parentNode;

        if (!li.classList.contains('done')) {
            li.remove();
        }

    }

    addCheckbox(item) {
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('click', this.markDone);

        item.prepend(checkbox);

    }
    //Označi task rješenim/nerješenim
    markDone = (event) => {
        const checkbox = event.target;
        const item = checkbox.parentNode;

        item.classList.toggle('done');
    }

    resetInput() {
        this.taskInput.value = '';
        this.taskInput.focus();
    }
}