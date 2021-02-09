import { PageHeader, Descriptions } from 'antd';
import { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import dayjs from "dayjs";

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
      console.log(this.state.articleDetail)
    })
  }

  render() {
    return (
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title={this.props.location.query.title}
        >
          <Descriptions size="small" column={2}>
            <Descriptions.Item>
              <a>{this.props.location.query.source}</a>
            </Descriptions.Item>
            <Descriptions.Item>{dayjs(this.props.location.query.createdAt).format("YYYY.MM.DD HH:mm")}</Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <div>
          {this.state.articleDetail.content}
        </div>
      </div>
    )
  }

  
}



export default ArtileDetail;

