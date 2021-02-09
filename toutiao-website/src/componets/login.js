import { Button, Input,Form } from 'antd';
import React from "react";
import axios from "axios"
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const box = {
  height:'270px',
  width:'400px',
  backgroundColor:'#eeeeee',
  borderRadius:'5px',
  position:'absolute',
  left:'35%',
  top:'30%',
  paddingTop:'70px'
}

class Login extends React.Component {
  state = {
    account: '',
    password: '',
  };
  onFinish = (values) => {
    console.log('Success:', values);
    axios({
      method:"post",
      url:"https://qcuwwu.fn.thelarkcloud.com/login",
      data:{
          account:values.account,
          password:values.password
      }
    }).then(res =>{
      if(res.status === 200){
        window.sessionStorage.setItem('userId',res.data)
        const userId = window.sessionStorage.getItem('userId')
        console.log(userId)
      }
    })

  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <div style={box}>
        <Form {...layout}
          name="form"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}>
        <Form.Item
          label="账号"
          name = "account"
          rules={[{ required: true, message: '请输入登录账号' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name = "password"
          rules={[{ required: true, message: '请输入登录密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
        <Button  type="primary" htmlType="submit" style={{float:'right'}}>
          登录
        </Button>
        </Form.Item>
        </Form> 
      </div> 
    );
  }
}

export default Login;