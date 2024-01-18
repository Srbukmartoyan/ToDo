function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label className="item">
                <div>
                    <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        })
                    }} />
                    {todo.text}
                </div>
                <button className="item-btn" onClick={() => {
                    onDelete(todo);
                    }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;