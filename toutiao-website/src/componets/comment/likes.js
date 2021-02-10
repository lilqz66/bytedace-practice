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
    isdisagree:false,
  };
  getlikes = ()=>{
    axios.get('https://qcuwwu.fn.thelarkcloud.com/islike',
      {params:{newsId:this.state.newsId,userId:this.state.userId}}).then((res)=>{
        this.setState({
          islike: res.data.likes,
          isdisagree:res.data.disagrees
        });
    })
  }
  componentDidMount() {
    this.getlikes()
   };
  setLike = (flag) =>{
    let {islike,isdisagree} = this.state
    if(flag === 1) {
      islike = !islike
      if(islike) isdisagree = false
    }
    if(flag === 2){
      isdisagree = !isdisagree
      if(isdisagree) islike = false
    }  
    axios({
      method:"patch",
      url:"https://qcuwwu.fn.thelarkcloud.com/islike",
      data:{
          newsId:this.state.newsId,
          userId:this.state.userId,
          likes:islike,
          disagrees:isdisagree
      }
    }).then(res =>{
      if(!res.data.code) alert('操作失败')
      else this.getlikes()
    })
   }
  sendLike = () =>{
    this.setLike(1)
  }
  sendDislike = () =>{
    this.setLike(2)
  }
  render() {
    return (
      <>
      <div style={{width:'130px',display:'flex',justifyContent:'space-between',marginLeft:'35%',marginTop:'70px'}}>
        <div
          onClick={this.sendLike} 
          style={{height:'53px',width:'53px',borderRadius:'50%',
          backgroundColor:this.state.islike?'#D8BFD8':'#eeeeee',paddingLeft:'14px',paddingTop:'2px'}}>
            <LikeSvg />
          <div style={{marginLeft:'2px'}}>{this.state.likes}</div>
        </div>
        <div 
          onClick={this.sendDislike}
          style={{height:'53px',width:'53px',borderRadius:'50%',
          backgroundColor:this.state.isdisagree?'#D8BFD8':'#eeeeee',paddingLeft:'14px',paddingTop:'1px'}}>
          <DislikeSvg />
          <div style={{marginLeft:'2px'}}>{this.state.disagrees}</div>
        </div>
      </div>
      </>
    );
  }  
        
}

export default Likes;

