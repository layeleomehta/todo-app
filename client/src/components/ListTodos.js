import React, {Fragment, useState, useEffect} from 'react'; 
import EditTodo from './EditTodo';



const ListTodos = () => {
    const [allTodos, setallTodos] = useState([])


    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:4000/todos"); 
            const jsonData = await response.json(); 
            console.log(jsonData);  
            setallTodos(jsonData);           
        } catch (err) {
            console.error(err.message);
            
        }
    }

    const deleteTodo = async (todoId) => {
        try {
            console.log("inside delete todo function:", todoId)
            const response = await fetch(`http://localhost:4000/todos/${todoId}`, {
                method: "DELETE"
            })

            setallTodos(allTodos.filter(todo => todo.todo_id !== todoId)); 
        } catch (err) {
            console.error(err.message); 
            
        }
    }

    useEffect(() => {
      getTodos(); 
    }, [])
    


  return (
    <Fragment>
        <h1 className='text-center mt-5'>All Todos</h1>
        <table className="table mt-2 mb-5">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Todo</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {allTodos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo}/></td>
                        <td><button className='btn btn-danger' onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
            </table>
  
    </Fragment>
  )
}

export default ListTodos; 