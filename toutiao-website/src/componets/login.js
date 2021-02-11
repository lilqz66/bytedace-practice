import { Button, Input,Form,Select} from 'antd';
import React from "react";
import axios from "axios"
//import { routerRedux } from 'dva/router';

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};
const box = {
  height:'300px',
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
          flag:values.select,
          account:values.account,
          password:values.password
      }
    }).then(res =>{
      //console.log(res)
      if(res.status === 200 ){
        if(res.data.code) alert(res.data.message)
        else{
          window.sessionStorage.setItem('userId',res.data)
          if(values.select==='1') this.props.history.push('/');
          else this.props.history.push('/OfflineArticleList');
        }
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
          name="select"
          label="权限"
          hasFeedback
          rules={[{ required: true, message: '必选字段' }]}>
            <Select placeholder="选择登录权限">
              <Option value="1">用户登录</Option>
              <Option value="0">管理员登录</Option>
          </Select>
        </Form.Item>
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