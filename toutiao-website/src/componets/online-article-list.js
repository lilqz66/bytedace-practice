import { Button, Table, Space, Card  } from 'antd';

function OnlineArticleList() {
  const dataSource = [
    {
      key: '1',
      orderNumber: '1',
      title: '文章title1',
      from: '大渝网',
      date: '2021.1.2 11:27',
      state: '线上'
    },
    {
      key: '2',
      orderNumber: '2',
      title: '文章title2',
      from: '新京报',
      date: '2021.1.2 11:23',
      state: '线下'
    }
  ];
  
  const columns = [
    {
      title: '序号',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '来源',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: '操作',
      key: 'option',
      render: (text, record) => (
      // 为什么这里按钮渲染不出来
      // 该如何做编辑/下线事件处理
        <Space size="middle">
          <a>编辑</a>
          <a>下线</a>
        </Space>
      )
    }
  ];
  
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Card title="标题" style={{ width: '100%' }}>
          <Space size="middle" style={{ width: '100%' }}>
            <a>来源</a>
            日期
          </Space>
      </Card>
      <Card title="标题" style={{ width: '100%' }}>
          <Space size="middle" style={{ width: '100%' }}>
            <a>来源</a>
            日期
          </Space>
      </Card>
    </Space>
  );
        
}

export default OnlineArticleList;