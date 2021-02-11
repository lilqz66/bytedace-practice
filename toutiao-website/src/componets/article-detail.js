import { PageHeader, Descriptions,Tag } from 'antd';
import { Component } from 'react';
import axios from "axios";
import dayjs from "dayjs";
import Header from './header';
import { CommentList,Likes } from './comment';

class ArtileDetail extends Component {
  // state = {
  //   title: '',
  //   source: '',
  //   createdAt: '',
  //   content: '',
  //   id: ''
  // }
  constructor(props){
    super(props)
    this.state = {
      title: '',
      source: '',
      createdAt: '',
      content: '',
      id: '',
      articleDetail: {
      }
    }
  }

  componentDidMount(){
    axios.get('https://qcuwwu.fn.thelarkcloud.com/newscontent?id=' +  this.props.location.query.id)
    .then((res)=>{
      let data = res.data
      this.setState({
        articleDetail: data,
      });
    })
  }

  render() {
    return (
      <>
      <Header />
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title={this.props.location.query.title}
        >
          <Descriptions size="small" column={2}>
            <Descriptions.Item>
              <a href="#/">{this.props.location.query.source}</a>
            </Descriptions.Item>
            <Descriptions.Item>
              <Tag color="geekblue" style={{marginLeft:'20%'}}>
                {dayjs(this.props.location.query.createdAt).format("YYYY.MM.DD HH:mm")}
              </Tag>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <div style={{marginLeft: '25px',marginRight:'25px'}}>
          {this.state.articleDetail.content}
        </div>
      </div>
      <Likes detail={this.props.location.query.id} history={this.props.history}/>
      <CommentList detail={this.props.location.query.id} history={this.props.history}/>
      </>
    )
  }

  
}



export default ArtileDetail;

