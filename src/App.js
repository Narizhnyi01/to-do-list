import React, {useEffect} from "react";
import './App.scss'
import ListWrap from "./Component/ListWrap/ListWrap";
import AddTask from "./Component/AddTask/AddTask";
import Context from "./context";
import axios from "axios";

function App() {

  const [todos, setTodos] = React.useState([

  ])


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
      })
  }, [])

  function toggleTodo(name) {
    let state
    setTodos(todos.map(todo => {
      if (todo.name === name) {
        state = !todo.checked
        todo.checked = !todo.checked
      }
      return todo

    }))
    console.log(state)
    axios.put(`https://todo-list-a91ce-default-rtdb.firebaseio.com/todos/${name}/checked.json`, `${state}` )
  }

  function removeTodo(name) {
    setTodos(todos.filter(todo => todo.name !== name))

    axios.delete(`https://todo-list-a91ce-default-rtdb.firebaseio.com/todos/${name}.json`)
  }

  function addTodo(title) {

    let newItem = {
      id: Date.now(),
      text: title,
      checked: false
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

    <Context.Provider value={{removeTodo}}>

      <div className="App">
        <div className="container">
          <h1 className="title">Todo App</h1>
          <AddTask onCreate={addTodo}/>

          {
            todos.length
              ? <ListWrap list={todos} onToggle={toggleTodo}/>

              : <h2>У вас нет заданий</h2>

          }


        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
