const todolist=[
  {
    name:'wash dishes',
    dueDate:'2024-01-10'
  },
  {
    name:'make dinner',
    dueDate:'2024-01-12'
  },
];
renderTodoList();

function addTodoList(){
  const inputElement=document.querySelector('.js-name-input');
  const dateElement=document.querySelector('.js-due-input');
  const name=inputElement.value;
  const dueDate=dateElement.value;

  todolist.push({
   /* name:name,
    dueDate:dueDate

    we use shortcut
    */
    name,
    dueDate
  });
  inputElement.value='';
  renderTodoList();
}

function renderTodoList(){
  let todoListHtml='';
  for(let i=0;i<todolist.length;i++){
      const todoObject=todolist[i];
     /* const name=todoObject.name;
      const dueDate=todoObject.dueDate;

       we use shortcut
      */
      const {name,dueDate}=todoObject;

      const html=
      `<div>${name}</div>
       <div>${dueDate}</div>
       <button onclick="todolist.splice(${i},1); renderTodoList();" class="css-delete-button"
       >Delete</button>`;
      todoListHtml += html;
  }
  document.querySelector('.js-todo-list').innerHTML=todoListHtml;

}
