import React, { useEffect, useState } from "react";
import { Card, Table, Button, Space, Checkbox, Switch } from "antd";
import { getStudentList } from "../../../apis/get";

const columns = [
  {
    title: "用户ID",
    dataIndex: "id",
    key: "id",
    width: 80,
    ellipsis: true,
  },
  {
    title: "用户昵称",
    dataIndex: "username",
    key: "username",
    width: 80,
    ellipsis: true,
  },
  {
    title: "手机号",
    dataIndex: "phonenumber",
    key: "phonenumber",
    width: 80,
    ellipsis: true,
  },
  {
    title: "付费金额",
    dataIndex: "amount",
    key: "amount",
    width: 80,
    ellipsis: true,
  },
  {
    title: "订单数量",
    dataIndex: "number",
    key: "number",
    width: 80,
    ellipsis: true,
  },
  {
    title: "付费时间",
    dataIndex: "time",
    key: "time",
    width: 100,
    ellipsis: true,
  },
  {
    title: "账号禁用",
    dataIndex: "disable",
    key: "disable",
    render: (_, record) => <Switch defaultChecked={record.disable} />,
    width: 80,
    ellipsis: true,
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
    width: 100,
    ellipsis: true,
  },
];

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

export default function StudentTable(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getStudentList();
      setData(res.data);
    }
    fetchData();
  }, []);
  const setIsDetail = (record) => {
    props.setIsDetail(record);
  };
  return (
    <Card title="学员列表">
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
