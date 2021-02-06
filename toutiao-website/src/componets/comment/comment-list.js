import { List,Avatar,Space,Tag } from 'antd';
import React from "react";
import dayjs from 'dayjs'
import {  HeartTwoTone } from '@ant-design/icons';

class CommentList extends React.Component {
  state = {
    data: [
      { 
      _id: '60193ef5367aea021c8c2f15',
      createdAt: '2021-02-02T12:00:53.733Z',
      newsId: '6018d6acf420eb0237dda180',
      userId:
       { _id: '6019396f367aea021c8c2eeb',
         createdAt: '2021-02-02T11:37:19.353Z',
         updatedAt: '2021-02-02T11:42:25.661Z',
         name: '聪明的ying',
         account: '121126' 
        },
      words: '珍视明护眼贴' 
    },
    { _id: '60193ef5367aea021c8c2f17',
      createdAt: '2021-02-02T12:00:53.905Z',
      newsId: '6018d6acf420eb0237dda180',
      userId:
       { _id: '60193a152d137c021861c850',
         createdAt: '2021-02-02T11:40:05.077Z',
         updatedAt: '2021-02-02T11:42:16.444Z',
         name: '大傻子秋作',
         account: '121125' },
      words: '城南小陌又逢春，只见梅花不见人。\n 玉骨久沉泉下土，墨痕犹锁壁间尘 \n 1111111111111111111111111111111111111111111111 \n hhvjhvvvvvvvvvjvvvvvvvvvvvvvvvvvvvv' 
    } 
    ]
  };
  render() {
    return (
      <>
      <List
       style={{ fontSize: '18px' }}
       dataSource={this.state.data}
       renderItem={item => (
      <List.Item size = "large">
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="#/">{item.userId.account}&nbsp;&nbsp;{item.userId.name}</a>}
          description={item.words}
        />
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
