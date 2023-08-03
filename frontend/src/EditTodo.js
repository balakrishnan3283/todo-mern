import React, { useState, useEffect, Fragment } from 'react'
import { getTodosAPIById, updateTodosAPIById} from './api/todos'
import { useParams } from 'react-router-dom';


function EditToDo(props) {

    const [todos, setTodos] = useState([])
    
    const { id } = useParams();

    

  useEffect(() => {
    getTodosAPIById(id).then(todos => setTodos(todos))
  }, [id]);


  const onUpdate = (book) => {
    console.log(book);
    updateTodosAPIById(id,book).then(data => {
        console.log(data);
    //   if(data){
    //     console.log('updating 234232!!')
        
    //   }
    })
  }


   
    const [book, setBook] = useState({
        title: "",
        description: "",
        done: false
    })

    const onChange = (event) => {
       setBook({
            ...book,
            [event.target.name]: event.target.value
        })
    }

    const saveTodo = (e) => {
        e.preventDefault()
        onUpdate(book)
    }
   
    return (
        <Fragment>
             {todos.map(d => (
                <form onSubmit={saveTodo}>
               
                    <h2 className="text-center m-3">Update here</h2>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-3 m-1">
                            <input name = "title" type="text" 
                                className="form-control" placeholder="Title" defaultValue={d.title}
                                onChange={(e) => onChange(e)}/>
                        </div>
                        <div className="col-5 d-flex justify-content-center m-1">
                            <input type="text" className="form-control" 
                                name = "description" placeholder="Description" defaultValue={d.description}
                                onChange={(e) => onChange(e)}/>
                        </div>
                        <button className='btn btn-primary col-2 d-flex justify-content-center m-1' 
                            type='submit'>Update</button>
                    </div>
                    
                </form>
                ))} 
        </Fragment>
    )
}

export default EditToDo