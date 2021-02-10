import React from "react";
import LikeSvg from './likeSvg'
import DislikeSvg from './dislikeSvg'
import axios from "axios"
require('../../css/img.css')

const userId = window.sessionStorage.getItem('userId')
class Likes extends React.Component {
  state = {
    newsId:this.props.detail,
    likes:0,
    disagrees:0,
    islike:false,
    isdisagree:false,
  }
  getlikes = ()=>{
    axios.get('https://qcuwwu.fn.thelarkcloud.com/islike',
      {params:{newsId:this.state.newsId,userId:userId}}).then((res)=>{
        this.setState({
          islike: res.data.likes,
          isdisagree:res.data.disagrees
        });
    })
  }
  componentDidMount() {
    this.getlikes()
    this.changenumber()
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
          userId:userId,
          likes:islike,
          disagrees:isdisagree
      }
    }).then(res =>{
      if(!res.data.code) alert('操作失败')
      else {
        this.getlikes()
        this.changenumber()
      }
    })
   }
  changenumber = () => {
    axios.get('https://qcuwwu.fn.thelarkcloud.com/newscontent?id=' + this.state.newsId)
    .then((res)=>{
      this.setState({
        likes:res.data.likes,
        disagrees:res.data.disagrees
      });
      //console.log(this.state.articleDetail)
    })
   }
  sendLike = () =>{
    if(!userId) this.props.history.push('/Login')
    else this.setLike(1)
  }
  sendDislike = () =>{
    if(!userId) this.props.history.push('/Login')
    else this.setLike(2)
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
          <div style={{marginLeft:'3px'}}>{this.state.likes}</div>
        </div>
        <div 
          onClick={this.sendDislike}
          style={{height:'53px',width:'53px',borderRadius:'50%',
          backgroundColor:this.state.isdisagree?'#D8BFD8':'#eeeeee',paddingLeft:'14px',paddingTop:'1px'}}>
          <DislikeSvg />
          <div style={{marginLeft:'3px'}}>{this.state.disagrees}</div>
        </div>
      </div>
      </>
    );
  }  
        
}

export default Likes;

