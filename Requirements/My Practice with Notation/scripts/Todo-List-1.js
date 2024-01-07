const todolist=['make dinner','wash dishes'];
renderTodoList();
function addTodoList(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  todolist.push(name);
  inputElement.value='';
  renderTodoList();
}

function renderTodoList(){
  let todoListHtml='';
  for(let i=0;i<todolist.length;i++){
      const todo=todolist[i]
      const html=`<p>${todo}</p>`
      todoListHtml += html;

  }
  document.querySelector('.js-todo-list').innerHTML=todoListHtml;

}
