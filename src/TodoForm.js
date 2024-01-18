import { useState } from "react";

function TodoForm({onAdd}) {
    const [text, setText] = useState("");

    return (
    <form className="form" onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
    }}>
        <input type="text" className="form-input" placeholder="What need to be done?" value={text} onChange={(e) =>{
            setText(e.target.value);
        }}/>
        <button className="form-btn"> Add </button>
    </form>
    )

}

export default TodoForm;