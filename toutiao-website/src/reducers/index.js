import { combineReducers } from 'redux'

const defaultState = {
  OfflineArticle: [
    {
      key: '1',
      orderNumber: '1',
      title: '文章title1',
      from: '大渝网',
      date: '2021.1.2 11:27',
      state: '线上'
    },
    {
      key: '2',
      orderNumber: '2',
      title: '文章title2',
      from: '新京报',
      date: '2021.1.2 11:23',
      state: '线下'
    }
  ]
}

const articles = (state = defaultState, action) => {

  if (action.type === 'ADD_Article') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    return newState;
  }
  if (action.type === 'Edit_Article') {
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.map(todo =>
        (todo.id === action.id)
          ? action.article
          : todo
      )
      return newState;
  }
  if (action.type === 'Init_Offline_Article') {
      console.log(state, action);
      let newState = JSON.parse(JSON.stringify(state));
      newState.OfflineArticle = action.OfflineArticle;
      return newState;
  }
  return state
}

export default combineReducers({
  articles
})