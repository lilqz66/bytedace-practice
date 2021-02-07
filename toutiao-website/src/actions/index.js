import axios from "axios";
import store from "../store";

let nextArticleId = 0
export const addArticle = article => ({
  type: 'ADD_Article',
  id: nextArticleId++,
  article
})

export const editArticle = (id,article) => ({
  type: 'Edit_Article',
  id: nextArticleId++,
  article
})

export const initOfflineArticleAction = (OfflineArticle)=>{
  return {
    type: 'Init_Offline_Article',
    OfflineArticle
  }
}

export const getOfflineArticle = ()=>{
  return (dispatch)=>{
    axios.get('https://qcuwwu.fn.thelarkcloud.com/news')
        .then((res)=>{
          const { data } = res;
          const action = initOfflineArticleAction(data)
          console.log(action)
          dispatch(action)
        })
  }
}