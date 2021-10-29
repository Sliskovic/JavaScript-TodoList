import { Todo } from './COMPONENTS/todo.js';

(function () {
    "use strict";
    const todo = new Todo('taskInput', 'addTask', 'todoList', 'saveTaskslist', 'deleteTaskslist');
    todo.init();
    //window.addEventListener('load', todo.init());
    // console.log(todo);
})();
