import React from "react";
import LikeSvg from './likeSvg'
import DislikeSvg from './dislikeSvg'
import axios from "axios"
require('../../css/img.css')
class Likes extends React.Component {
  state = {
    newsId: '6018d6acf420eb0237dda180',
    userId:'60193a152d137c021861c850',
    likes:10,
    disagrees:23,
    islike:false,
    isdisagree:false
  };
  componentDidMount() {
    axios.get('https://qcuwwu.fn.thelarkcloud.com/islike',
      {params:{newsId:this.state.newsId,userId:this.state.userId}}).then((res)=>{
        this.setState({
          islike: res.data.likes,
          isdisagree:res.data.disagrees
        });
    })
   };
  render() {
    return (
      <>
      <div style={{width:'150px',display:'flex',justifyContent:'space-between'}}>
        <div style={{height:'58px',width:'58px',borderRadius:'50%',
          backgroundColor:'#D8BFD8',paddingLeft:'17px',paddingTop:'5px'}}>
          <LikeSvg />
          <div style={{marginLeft:'2px'}}>{this.state.likes}</div>
        </div>
        <div style={{height:'58px',width:'58px',borderRadius:'50%',
          backgroundColor:'#D8BFD8',paddingLeft:'17px',paddingTop:'3px'}}>
          <DislikeSvg />
          <div style={{marginLeft:'2px'}}>{this.state.disagrees}</div>
        </div>
      </div>
      </>
    );
  }  
        
}

export default Likes;

