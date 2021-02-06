import { combineReducers } from 'redux'

const articles = (state = [], action) => {
  switch (action.type) {
    case 'ADD_Articles':
      return [
        ...state,
        action.article
      ]
    case 'Edit_Article':
      return state.map(todo =>
        (todo.id === action.id)
          ? action.article
          : todo
      )
    default:
      return state
  }
}

export default combineReducers({
  articles
})