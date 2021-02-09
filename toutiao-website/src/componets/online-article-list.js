import { List, Avatar } from 'antd';
import { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import dayjs from 'dayjs';

class OnlineArticleList extends Component {
  state = {
    OnlineArticleList: []
  }

  componentDidMount(){
    axios.get(' https://qcuwwu.fn.thelarkcloud.com/newsup')
    .then((res)=>{
      let data = res.data
      this.setState({
        OnlineArticleList: data,
      });
      // console.log(res.data)
    })
  }

  render() {
    return (
      <List
      itemLayout="horizontal"
      dataSource={this.state.OnlineArticleList}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={
            <Link to={{
                pathname: '/ArticleDetail',
                query: {
                  id: item._id,
                  title: item.title,
                  source: item.source,
                  createdAt: item.createdAt
                }
              }}>
                {item.title}
                </Link>
              }
            description={<div>{item.source} {dayjs(item.createdAt).format("YYYY.MM.DD HH:mm") }</div>}
          />
        </List.Item>
      )}
    />
    );
  }

}

export default OnlineArticleList;