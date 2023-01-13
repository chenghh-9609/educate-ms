import { Card, Table, Button, Space, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { getOrderList } from "../../../apis/get";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selected row keys:${selectedRowKeys}, selected rows: ${selectedRows}`
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log((record, selected, selectedRows));
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default function OrderTable(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getOrderList();
      setData(res.data);
    }
    fetchData();
  }, []);
  const setIsDetail = (record) => {
    props.setIsDetail(record);
  };
  const columns = [
    {
      title: "订单编号",
      dataIndex: "id",
      key: "id",
      width: 100,
      ellipsis: true,
    },
    {
      title: "用户昵称",
      dataIndex: "username",
      key: "username",
      width: 100,
      ellipsis: true,
    },
    {
      title: "手机号",
      dataIndex: "phonenumber",
      key: "phonenumber",
      width: 100,
      ellipsis: true,
    },
    {
      title: "课程名称",
      dataIndex: "coursename",
      key: "coursename",
      width: 100,
      ellipsis: true,
    },
    {
      title: "订单金额",
      dataIndex: "price",
      key: "price",
      width: 100,
      ellipsis: true,
    },
    {
      title: "订单状态",
      dataIndex: "status",
      key: "status",
      width: 100,
      ellipsis: true,
    },
    {
      title: "提交时间",
      dataIndex: "time",
      key: "time",
      width: 100,
      ellipsis: true,
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => setIsDetail(record)}>查看</a>
          <a>取消</a>
        </Space>
      ),
      width: 100,
      ellipsis: true,
    },
  ];
  return (
    <Card title="订单列表">
      <Table
        size="middle"
        rowSelection={{ ...rowSelection }}
        dataSource={data}
        columns={columns}
        pagination={{
          hideOnSinglePage: true,
          showQuickJumper: true,
          total: data.length,
          position: ["bottomCenter"],
        }}
      />
      <div style={{ position: "absolute", bottom: "30px", left: "30px" }}>
        <Checkbox>全选</Checkbox>
        <Button type="link">批量导出</Button>
      </div>
    </Card>
  );
}
