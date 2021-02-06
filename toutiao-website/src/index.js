import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App'
import OfflineArticleList from './componets/offline-article-list';
import OnlineArticleList from './componets/online-article-list';
import ArticleDetail from './componets/article-detail';
import 'antd/dist/antd.css'

import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <BrowserRouter>
  <div>
    <Route path='/' exact component={OnlineArticleList}></Route>
    <Route path='/OfflineArticleList' exact component={OfflineArticleList}></Route>
    <Route path='/ArticleDetail' exact component={ArticleDetail}></Route>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
)