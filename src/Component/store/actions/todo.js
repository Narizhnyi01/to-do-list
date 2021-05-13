import axios from "axios";
import {FETCH_TODO_ERROR, FETCH_TODO_START, FETCH_TODO_SUCCESS} from "./actionTypes";


export function fetchTodo() {
  return async dispatch => {
    dispatch(fetchTodoStart())
    try {
      const response = await axios.get('https://todo-list-a91ce-default-rtdb.firebaseio.com/todos.json')

      let todo = []

      let data = response.data
      for (let key in data) {
        let newItem = []
        newItem.push(data[key])
        let newObj = newItem[0]
        newObj.name = key
        todo.push(newObj)
      }
      dispatch(fetchTodoSuccess(todo))
    } catch (e) {
      dispatch(fetchTodoError(e))
    }


  }
}
export function fetchTodoStart() {
  return {
    type: FETCH_TODO_START
  }
}
export function fetchTodoSuccess(todo) {
  return {
    type: FETCH_TODO_SUCCESS,
    todo
  }
}

export function fetchTodoError(e) {
  return {
    type: FETCH_TODO_ERROR
  }
}