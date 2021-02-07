import {Image } from 'antd';
import React from "react";
import '../../css/img.css'
class Likes extends React.Component {
  state = {
    likes:0,
    disagrees:0,
    islike:false,
    isdisagree:false
  };
  render() {
    return (
      <>
      <div style={{height:"100px",width:"120px"}}>
      <img className={"img"} src={require('../../images/1.png')}  alt="" />
      </div>
       <Image
        width={20}
        height={20}
        src={require("../../images/like.ico")}
      />
      <Image
        width={100}
        height={100}
        src={require('../../images/1.png')}
      />
      </>
    );
  }  
        
}

export default Likes;

