import React, {Fragment, useState, useEffect} from 'react'; 



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
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                ))}
            </tbody>
            </table>
  
    </Fragment>
  )
}

export default ListTodos; 