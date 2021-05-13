import React, {useEffect} from "react";
import './App.scss'
import ListWrap from "./Component/ListWrap/ListWrap";
import AddTask from "./Component/AddTask/AddTask";
import axios from "axios";
import {connect} from "react-redux";
import Loader from "./Component/Loader/Loader";

function App() {

  const [todos, setTodos] = React.useState([

  ])
  const [loading, setLoading] = React.useState(true)




  useEffect(() => {
    let todo = []
    axios.get('https://todo-list-a91ce-default-rtdb.firebaseio.com/todos.json')
      .then(response => {
        let data = response.data
        for (let key in data) {
          let newItem = []
          newItem.push(data[key])
          let newObj = newItem[0]
          newObj.name = key
          todo.push(newObj)
        }
        setTodos(todo)
        console.log(todo)
        setLoading(false)
      })
  }, [])

  function toggleTodo(name) {
    let state
    setTodos(todos.map(todo => {
      if (todo.name === name) {
        state = !todo.checked
        todo.checked = state
      }
      return todo

    }))

    axios.put(`https://todo-list-a91ce-default-rtdb.firebaseio.com/todos/${name}/checked.json`, `${state}` )
  }

  function removeTodo(name) {
    setTodos(todos.map(todo => {
      if (todo.name === name) {

        todo.removeTodo = true
      }
      return todo

    }))

    setTimeout(() => {
      setTodos(todos.filter(todo => name !== todo.name))
      axios.delete(`https://todo-list-a91ce-default-rtdb.firebaseio.com/todos/${name}.json`)
    }, 980)

  }

  function addTodo(title) {

    let newItem = {
      id: Date.now(),
      text: title,
      checked: false,
      removeTodo: false
    }

    axios.post('https://todo-list-a91ce-default-rtdb.firebaseio.com/todos.json', newItem)
      .then(response => {
        console.log(response)
        newItem.name = response.data.name
        setTodos(
          [...todos, newItem]
        )

      })
      .catch(e => {
        console.log(e)
      })
  }

  return (



      <div className="App">
        <div className="container">
          <h1 className="title">Todo App</h1>
          <AddTask onCreate={addTodo}/>

          {
            loading
            ? <Loader/>
            : todos.length
                ? <ListWrap list={todos} onToggle={toggleTodo} removeTodo={removeTodo}/>

                : <h2>У вас нет заданий</h2>


          }

        </div>
      </div>

  );
}




export default App;
