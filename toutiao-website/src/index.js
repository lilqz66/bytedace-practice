import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App'
import OfflineArticleList from './componets/offline-article-list';
import OnlineArticleList from './componets/online-article-list';
import ArticleDetail from './componets/article-detail';
import { CommentList,Likes } from './componets/comment';


import 'antd/dist/antd.css'


render(
  <BrowserRouter>
  <div>
    <Route path='/' exact component={OnlineArticleList}></Route>
    <Route path='/OfflineArticleList' exact component={OfflineArticleList}></Route>
    <Route path='/ArticleDetail' exact component={ArticleDetail}></Route>
    <Route path='/Comment' exact component={Likes}></Route>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
)