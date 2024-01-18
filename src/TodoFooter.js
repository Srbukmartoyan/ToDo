function TodoFooter({todos, onClearCompleted}) {
    const completedSize = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div class="footer">
            <span>{completedSize}/{todos.length} Completed</span>
            <button className="footer-btn" onClick={onClearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoFooter;