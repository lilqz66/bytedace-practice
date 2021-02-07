import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../store'
import { Table, Space } from 'antd';
import {getOfflineArticle} from '../actions';
import ArticleAddModal from "./article-add-modal";

class  OfflineArticleList extends Component {

  componentDidMount(){
    this.props.initOfflineArticleList();
  }

  render() {
    this.columns = [
      {
        title: '序号',
        dataIndex: '_id',
        key: '_id',
      },
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '来源',
        dataIndex: 'source',
        key: 'source',
      },
      {
        title: '日期',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: '状态',
        dataIndex: 'isUp',
        key: 'isUp',
      },
      {
        title: '操作',
        key: 'option',
        render: (text, record) => (
        // 为什么这里按钮渲染不出来
        // 该如何做编辑/下线事件处理
          <Space size="middle">
            <a>编辑</a>
            <a>下线</a>
          </Space>
        )
      }
    ];
    const { OfflineArticleList } = this.props;
    return (
      <div>
        <span>{this.props.OfflineArticleList}</span>
        <Table dataSource={OfflineArticleList} columns={this.columns} />
        <ArticleAddModal />
      </div>
    );
  }        
}

const mapStateToprops = (state) => {
  return {
    OfflineArticleList: state.OfflineArticleList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initOfflineArticleList() {
      const action = getOfflineArticle()
      dispatch(action)
    }
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(OfflineArticleList);


