function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'hand in assigments',
      isCompleted: false,
    },
    {
      text: 'do some revision',
      isCompleted: false

    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
      setTodos(newTodos);

  }


  const removeTodo = index =>{
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp); 
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((item, index) => <Todo todo={item} key={index} index={index} remove={removeTodo}/>)}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
    
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
