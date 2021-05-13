import {FETCH_TODO_ERROR, FETCH_TODO_START, FETCH_TODO_SUCCESS} from "../actions/actionTypes";

const initialState = {
  todos: [],
  loading: false,
  error: null
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO_START:
      return {
        ...state, loading: true
      }
    case FETCH_TODO_SUCCESS:
      return {
        ...state, loading: false, todos: action.todo
      }
    case FETCH_TODO_ERROR:
      return {
        ...state, loading: false, error: action.error
      }

    default:
      return state
  }
}