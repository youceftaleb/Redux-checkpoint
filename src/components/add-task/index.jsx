import { useState } from "react";
import propTypes from 'prop-types';
export const AddTask = ({ addtodo }) => {
    const [todo,setTodo]=useState(null)
    return (
        <div className="row">
            <div className="col-md-10">
                <input type="text" onChange={(e)=>setTodo(e.target.value)} placeholder="add todo" className="form-control" value={todo ? todo : ""}/>
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary" onClick={() => {
                    addtodo(todo);
                    setTodo(null);
                }}>Add todo</button>
            </div>
        </div>
    )
}

AddTask.propTypes = {
    addtodo: propTypes.func.isRequired,
}