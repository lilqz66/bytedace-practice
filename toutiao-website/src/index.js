import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';


import Login from './componets/login';
import OfflineArticleList from './componets/offline-article-list';
import OnlineArticleList from './componets/online-article-list';
import ArticleDetail from './componets/article-detail';


import 'antd/dist/antd.css'




render(
  <BrowserRouter >
  <div>
    <Route path='/' exact component={OnlineArticleList}></Route>
    <Route path='/OfflineArticleList' exact component={OfflineArticleList}></Route>
    <Route path='/ArticleDetail' exact component={ArticleDetail}></Route>
    <Route path='/Login' exact component={Login}></Route>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
)