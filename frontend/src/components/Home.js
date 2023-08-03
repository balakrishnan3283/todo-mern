import React, { useState, useEffect } from 'react';
import { postTodosAPI, getTodosAPI, patchTodosAPI, deleteTodosAPI } from '../api/todos'
import CreateToDo from '../CreateToDo';
import TodoTable from '../TodoTable'

function Home() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodosAPI().then(todos => setTodos(todos))
  }, []);

  const addTodo = (todo) => {
    postTodosAPI(todo).then(data => {
      setTodos([...todos, data])
    })
  }

  const updateTodo = (id, done) => {
    patchTodosAPI(id, (done) ? false : true).then(data => {
      if(data){
        console.log('updating status!!')
        getTodosAPI().then(todos => setTodos(todos))
      }
    })
  }

  // const editTodo = (id, done) => {
  //   patchTodosAPI(id, todo).then(data => {
  //     if(data){
  //       console.log('updating records!!')
  //       getTodosAPI().then(todos => setTodos(todos))
  //     }
  //   })
  // }

  const deleteTodo = (id) => {
    deleteTodosAPI(id).then(data => {
      if (data.deletedCount === 1) {
        setTodos(todos.filter(todo => todo._id !== id))
      }
    })
  }

    return (
      <main role="main" className="container">
        <CreateToDo onCreate={addTodo} />
        <TodoTable 
          todos={todos} 
          onUpdate={updateTodo}
          onEdit={updateTodo}
          onDelete={deleteTodo}
        />
      </main>  
    )
}

export default Home;