import React, { Component } from 'react';
import { connect } from 'react-redux'
// import store from '../store'
import { Table, Space, Button } from 'antd';
import {getOfflineArticle} from '../actions';
import ArticleAddOrEditModal from "./article-add-or-edit-modal";
import axios from "axios";

class OfflineArticleList extends Component {
  state = {
    OfflineArticleList: []
  }

  getDatas = (OfflineArticle) => {
    this.setState({
      OfflineArticleList: OfflineArticle
    })
  }

  showModal = (option, record) => {
    this.modal.showModal(option, record)
  };

  onRef = (ref) => {
    this.modal = ref
  }


  componentDidMount(){
    axios.get('https://qcuwwu.fn.thelarkcloud.com/news')
    .then((res)=>{
      // 为什么不能给data中的每个对象加一个属性?
      let data = res.data
      // for(let i = 1; i <= data.length; i++){
      //   data[i]['order'] = i
      // }
      console.log(data)
      this.setState({
        OfflineArticleList: data,
      });
      console.log(this.state.OfflineArticleList)
    })
  }

  upOrDown = (record) => {
    axios({
      method:"patch",
      url:"https://qcuwwu.fn.thelarkcloud.com/news",
      data: {
        id: record._id,
        isUp: !record.isUp
      }
    }).then(res =>{
      if(res.status === 200){
        console.log('操作成功')
        let newOfflineArticleList = JSON.parse(JSON.stringify(this.state.OfflineArticleList));
        newOfflineArticleList.map(item =>
          (item._id === record._id)
            ? {...item, isUp: !item.isUp }
            : item
        )
        console.log(newOfflineArticleList)
        this.setState({
          OfflineArticleList: newOfflineArticleList,
        });
        // console.log(this.state.OfflineArticleList)
      }
    })
  }

  render() {
    this.columns = [
      {
        title: '序号',
        dataIndex: 'order',
        key: 'order',
        render: (text, record, index) => {
          return index + 1
        }
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
        render: (text, record) => {
          return text === true? '线上' : '线下'
        }
      },
      {
        title: '操作',
        key: 'option',
        render: (text, record) => (
        // 为什么这里按钮渲染不出来
        // 该如何做编辑/下线事件处理
          <Space size="middle">
            <button onClick={() => this.showModal('edit', record)}>编辑</button>
            <button onClick={() => {console.log(record); this.upOrDown(record); record.isUp=!record.isUp;}}> 
              {record.isUp === true? '下线' : '上线'}
            </button>
          </Space>
        )
      }
    ];
    // const { OfflineArticleList } = this.props;
    return (
      <div>
        <span>{this.OfflineArticleList}</span>
        <Table dataSource={this.state.OfflineArticleList} columns={this.columns} />
        <Button type="primary" onClick={() => this.showModal('add')}>
          添加文章
        </Button>
        <ArticleAddOrEditModal getData={this.getDatas} onRef={this.onRef} />
      </div>
    );
  }        
}

//react-redux相关代码，暂时没用，不确定为什么this.props.OfflineArticleList会没数据
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


