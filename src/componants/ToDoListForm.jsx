import { useState } from "react";
import shortid from 'shortid';

export function ToDoListForm(props){
    const [text,setText]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit({
            id : shortid.generate(),
           text:text,
            complete:false
        });
        setText("");
    }
    function handleChange(e){
        setText(e.target.value);
    }
    return(
        <div className="formContainer">
            <form action="" className="container mt-5" onSubmit={handleSubmit}>
                <div className="row ">
                    <div className="col-sm-9">
                <input type="text" onChange={handleChange} className="form-control " placeholder="Please enter your task" value={text} />
                </div>
                <div className="col-sm-3">
                <button onClick={handleSubmit} className="btn bg-success text-white">Add ToDo</button>
                </div>
                </div>
        
                {/* <div className="toggle d-flex justify-content-center mt-3">
                    <button className="btn bg-secondary text-white">Toggle all Completed</button>
                </div> */}

            </form>
        </div>
    )
}