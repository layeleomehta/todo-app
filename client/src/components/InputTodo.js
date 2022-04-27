import React, {Fragment, useState} from 'react'; 



const InputTodo = () => {
    const [todoInput, settodoInput] = useState(""); 

    const onSubmitForm = async (e) => {
        e.preventDefault(); 
        console.log(todoInput); 
        try {
            const body = {"description": todoInput};
            console.log(body); 
            const response = await fetch("http://localhost:4000/todos", {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(body)
            });  

        } catch (err) {
            console.error(err.message); 
            
        }

    }

    return (
        <Fragment>
        <h1 className="text-center mt-5">Todo List Application</h1>
        <form className='mt-5' onSubmit={onSubmitForm}>
            <div className="form-group">
                <label htmlFor="addTodo">Add a todo:</label>
                <input type="text" 
                       className="form-control" 
                       value={todoInput}
                       onChange={e => settodoInput(e.target.value)}
                       id="addTodo"/>
                <button type="submit" className="btn btn-primary mt-1">Submit</button>
            </div>
        </form>
        </Fragment>
    )
}

export default InputTodo; 
