import React, {Fragment, useState} from 'react';

const EditTodo = ({todo}) => {
    const [newDescription, setnewDescription] = useState("")

    const submitChange = async e => {
        e.preventDefault(); 
        try {
            const body = {"description": newDescription}
            const response = await fetch(`http://localhost:4000/todos/${todo.todo_id}`, {
                method: "PUT", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }); 

            window.location = "/"; 

        } catch (err) {
            console.error(err.message);             
        }
        
    }

  return (
      <Fragment>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Edit
        </button>
        <div className="modal" id="myModal">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">Edit</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
                <input type="text"
                       className='form-control'
                       value={newDescription}
                       onChange={e => setnewDescription(e.target.value)}/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => submitChange(e)}>Submit</button>
            </div>
            </div>
        </div>
        </div>
      </Fragment>
  )
}

export default EditTodo; 