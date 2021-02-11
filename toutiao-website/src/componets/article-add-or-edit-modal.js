import { Modal, Button, Input,Form } from 'antd';
import React from "react";
import axios from "axios";
const { TextArea } = Input;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

class ArticleAddOrEditModal extends React.Component {
  constructor(props){
    super(props)
    this.formRef = React.createRef();
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  // formRef = React.createRef();
  state = {
    loading: false,
    visible: false,
    title: '',
    source: '',
    content: '',
    option: '',
    id: ''
  };

  initEdit = () => {

  }

  showModal = (option, record) => {
    // this.formRef.current为空? 给modalforceRender="true" 解决
      if(option === 'edit') {
      this.setState({
        visible: true,
        option,
        id: record._id
      });
      // console.log(record)
      // console.log(this.formRef.current)
      axios.get('https://qcuwwu.fn.thelarkcloud.com/newscontent?id='+record._id).then((res)=>{
        console.log(res.data)
        this.formRef.current.setFieldsValue({
          title: record.title,
          source: record.source,
          content: res.data.content
        })
    })
    }else {
      this.setState({
        visible: true,
        option,
      });
    }
  };

  addArticle = (OfflineArticle) => {
    this.props.getData(OfflineArticle)
  }

  handleAdd = () => {
    console.log(this.formRef.current)
    const data = this.formRef.current.getFieldsValue()
    this.setState({ loading: true });
    axios({
      method:"post",
      url:"https://qcuwwu.fn.thelarkcloud.com/news",
      data
    }).then(res =>{
      if(res.status === 200){
        //offlinelist重新请求
        axios.get('https://qcuwwu.fn.thelarkcloud.com/news').then((res)=>{
          this.addArticle(res.data)
          this.setState({ loading: false, visible: false });
          this.formRef.current.resetFields()
      })
      }
    })
  }

  handleEdit = () => {
    console.log(this.formRef.current)
    const data = this.formRef.current.getFieldsValue()
    this.setState({ loading: true });
    axios({
      method:"put",
      url:"https://qcuwwu.fn.thelarkcloud.com/news",
      data: {
        ...data,
        id: this.state.id
      }
    }).then(res =>{
      if(res.status === 200){
        //offlinelist重新请求
        axios.get('https://qcuwwu.fn.thelarkcloud.com/news').then((res)=>{
          this.addArticle(res.data)
          this.setState({ loading: false, visible: false });
          this.formRef.current.resetFields()
      })
      }
    })
  }

  handleOk = async (option) => {
    await this.formRef.current.validateFields();
    if(this.state.option === 'add'){
      this.handleAdd()
    }else {
      this.handleEdit()
    }
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.formRef.current.resetFields()
  };
  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Modal forceRender="true"
          visible={visible}
          title={this.state.option === 'add'? "添加文章": '编辑文章'}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
         <Form 
          {...layout}
          ref={this.formRef}>
          <Form.Item
            label="标题"
            name='title'
            rules={[{ required: true, message: '请输入新闻标题!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="来源"
            name='source'
            rules={[{ required: true, message: '请输入新闻来源!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="内容"
            name='content'
            rules={[{ required: true, message: '新闻内容不能为空!' }]}
          >
            <TextArea showCount maxLength={300}/>
          </Form.Item>
         </Form>  
        </Modal>
      </>
    );
  }
}

export default ArticleAddOrEditModal;