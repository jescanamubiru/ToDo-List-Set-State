function Todo({todo, index, remove}) {

    const removeToDo = () => {
        remove(index);
    }

    return (
        <div className="todo" key={index} id={index} onClick={removeToDo}>
            {todo.text}
            <span className="btn-remove">x</span>
        </div>
    );
}