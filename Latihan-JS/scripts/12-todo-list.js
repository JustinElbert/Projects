const todoArray = [{
   name: 'youtube',
   dueDate: '2022-12-22'
}, {
   name: 'call of duty',
   dueDate: '2022-12-22'}];

renderTodoList();

function renderTodoList(){
   let todoListHTML = '';

   todoArray.forEach((todoObject, index) => {
      const { name, dueDate } = todoObject;
      const html = `
         <div>${name}</div> 
         <div>${dueDate}</div> 
         <button class="delete-button">
            Delete
         </button>
      `;
      todoListHTML += html;
   });

   /*
   for(let i = 0; i < todoArray.length; i++){
      const todoObject = todoArray[i];
      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;
      const { name, dueDate } = todoObject;
      const html = `
         <div>${name}</div> 
         <div>${dueDate}</div> 
         <button class="delete-button" onclick="
            todoArray.splice(${i}, 1);
            renderTodoList();
         ">Delete</button>
      `;
      todoListHTML += html;
   }
   */
  
   // console.log(todoListHTML);
   document.querySelector('.js-list')
      .innerHTML = todoListHTML;

   document.querySelectorAll('.delete-button')
      .forEach((deleteButton, index) => {
         deleteButton.addEventListener('click', () =>{
            todoArray.splice(index, 1);
            renderTodoList();
         })
      });
}

document.querySelector('.add-button')
   .addEventListener('click', () => {
      addTodo();
   });

function addTodo(){
   
   let todoList = document.querySelector('.js-todo-input')
   const name = todoList.value;
   const dateInput = document.querySelector('.js-due-date-input');
   const dueDate = dateInput.value;

   todoArray.push({
      name: name,
      dueDate: dueDate
   });
   todoList.value = '';

   renderTodoList();
}