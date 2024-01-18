import TodoItem from "./TodoItem";

function TodoList({todos, onDelete, onChange}) {
    return  (
        <div class="list"> {
            todos.map((todo) => {
                return (
                   <TodoItem 
                   key={todo.id} 
                   todo={todo}
                   onChange={onChange}
                   onDelete={onDelete} /> 
                )
            })
        }
        </div>
    )
}

export default TodoList;