import { List,Avatar,Space,Tag,Input,Button } from 'antd';
import React from "react";
import dayjs from 'dayjs'
import axios from "axios"
import {  HeartTwoTone } from '@ant-design/icons';

const { TextArea } = Input;
class CommentList extends React.Component {
  state = {
    newsId: '6018d6acf420eb0237dda180',
    userId:'60193a152d137c021861c850',
    words:'',
    data: [
    ]
  };
  componentDidMount() {
    axios.get('https://qcuwwu.fn.thelarkcloud.com/comment?newsId='+this.state.newsId).then((res)=>{
        this.setState({
          data: res.data,
        });
    })
   };
  addComment = () => {
     axios({
      method:"post",
      url:"https://qcuwwu.fn.thelarkcloud.com/comment",
      data:{
          newsId:this.state.newsId,
          userId:this.state.userId,
          words:this.state.words
      }
    }).then(res =>{
      if(res.status === 200){
        axios.get('https://qcuwwu.fn.thelarkcloud.com/comment?newsId='+this.state.newsId).then((res)=>{
          this.setState({
            data: res.data,
            words:''
          });
      })
      }
    })
   }
  setwords = (event) => {
    this.setState({
      words: event.target.value,
    });
   }
  render() {
    return (
      <>
      <div style={{ width: '360px', margin:'3px',display:'flex',justifyContent:'space-between' }}>
      <TextArea placeholder="留下你的精彩评论吧" 
        rows={1}
        value= {this.state.words}
        size="middle" 
        onChange={this.setwords}
        />
        <Button type="primary" onClick={this.addComment}> 发送 </Button>
      </div>
      <List
       style={{ fontSize: '18px' }}
       dataSource={this.state.data}
       renderItem={item => (
      <List.Item size = "large">
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="#/">{item.userId.account}&nbsp;&nbsp;{item.userId.name}</a>}
          description= {item.words.replaceAll('\n','<br />')}
        >
        </List.Item.Meta>
         <Tag color="geekblue">{dayjs(item.createdAt).format("M-DD HH:mm")}</Tag>
         <Space><HeartTwoTone />&nbsp;</Space>
      </List.Item>
    )}
    / >
      </>
    );
  }  
        
}

export default CommentList;
