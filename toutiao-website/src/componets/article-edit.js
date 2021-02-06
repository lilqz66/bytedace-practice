import { Modal, Button, Space, Input } from 'antd';
import React from "react";
const { TextArea } = Input;

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
          title="编辑文章"
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
          <Space size="middle" style={{ width: '100%' }}>
            标题
            <Input style={{ width: '100%' }} />
          </Space>
          <br />
          <br />
          <Space size="middle" style={{ width: '100%' }} >
            来源
            <Input style={{ width: '100%' }} />
          </Space>
          <br />
          <br />
          <Space size="middle">
            内容
            <TextArea showCount maxLength={300}/>
          </Space>
        </Modal>
      </>
    );
  }
}

export default ArticleAddModal;