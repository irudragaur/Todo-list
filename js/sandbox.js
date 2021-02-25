const todosContainer = document.querySelector('.todos');
const addForm = document.querySelector('.add');
const search = document.querySelector('.search input')

// function to generate a todo template
const generateTodoTemplate = todo => {
    // creating & attaching a todo
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items center">
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>
    `
    todosContainer.innerHTML += html;
}; 

// function to filter the search based on the term entered by user
const filterTodos = (term) => {
    Array.from(todosContainer.children)
        .filter(child => {
            return !child.textContent.toLowerCase().includes(term.toLowerCase());
        }).forEach(todo => {
            todo.classList.add('filtered');
        });

    Array.from(todosContainer.children)
        .filter(child => {
            return child.textContent.toLowerCase().includes(term.toLowerCase());
        }).forEach(todo => {
            todo.classList.remove('filtered');
        });
};

// adding a todo
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length > 0) {
        generateTodoTemplate(todo);

        // resetting the form-input value to ''
        addForm.reset();
    }

});

// deleting a todo
todosContainer.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    };
});

// searching for todos
search.addEventListener('keyup', e => {
    const term = search.value.trim();
    filterTodos(term);
});