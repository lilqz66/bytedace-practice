import { Modal, Button, Input,Form } from 'antd';
import React from "react";
const { TextArea } = Input;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

class ArticleAddModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          添加文章
        </Button>
        <Modal
          visible={visible}
          title="添加文章"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              添加
            </Button>,
          ]}
        >
         <Form {...layout}>
          <Form.Item
            label="标题"
            rules={[{ required: true, message: '请输入新闻标题!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="来源"
            rules={[{ required: true, message: '请输入新闻来源!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="内容"
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

export default ArticleAddModal;