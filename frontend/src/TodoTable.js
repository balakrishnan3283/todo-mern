import React from 'react'
import {Link } from "react-router-dom";

function TodoTable(props) {
   
    const { todos, onUpdate, onEdit, onDelete } = props

    return (
        <div className="App mt-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Done</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => {
                            return (
                                <tr key={todo._id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td onClick={() => onUpdate(todo._id, todo.done)}>
                                        {
                                            (todo.done) ? 
                                            (<img width="25" src="../../check.png" style={{cursor:"pointer"}} />) 
                                            :
                                            (<img width="25" src="../../uncheck.jpeg" style={{cursor:"pointer"}}/>)
                                        }
                                    </td>
                                    <td>
                                    <Link className='btn btn-secondary' to= {`/editBook/${todo._id}`}>Edit</Link>
                                    </td>
                                    <td>
                                        <button 
                                            className='btn btn-danger'
                                            onClick={() => onDelete(todo._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoTable