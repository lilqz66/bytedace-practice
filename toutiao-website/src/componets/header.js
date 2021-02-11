import { Button, Tag } from 'antd';
import { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  state = {
    visible:false
  }

  componentDidMount(){
    const userId = window.sessionStorage.getItem('userId')
    if(userId){
      this.setState({
        visible: true,
      });
    }
  };
  Logout = (event) => {
    window.sessionStorage.removeItem('userId')
    this.setState({
      visible: false,
    });
  }
 
  render() {
    return (  
      <div style={{height:'30px',width:'100%',background:'#eeeeee'}}>
        <Button type="primary" size="small" 
          style={{marginLeft:'90%',marginTop:'2px',display:this.state.visible?'none':''}} >
          <Link to={{ pathname: '/Login'}}>
          登录
          </Link>
        </Button>
        <Tag color="geekblue" style={{marginLeft:'65%',display:this.state.visible?'':'none'}}>
          已登录</Tag>
        <Button type="danger" size="small" 
          onClick={this.Logout}
          style={{marginTop:'2px',display:this.state.visible?'':'none'}} >
          <Link to={{ pathname: '/Login'}}>
          退出
          </Link>
        </Button>
      </div>
    );
  }

}

export default Header;