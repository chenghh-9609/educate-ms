import React, { useState, useEffect } from "react";
import { Card, Table, Button, Space, Checkbox } from "antd";
import { MdPostAdd } from "react-icons/md";
import { getCouponList } from "../../../apis/get";

const columns = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
    width: 60,
    ellipsis: true,
  },
  {
    title: "名称",
    dataIndex: "title",
    key: "title",
    width: 60,
    ellipsis: true,
  },
  {
    title: "使用范围",
    dataIndex: "range",
    key: "range",
    width: 80,
    ellipsis: true,
  },
  {
    title: "使用门槛",
    dataIndex: "threshhold",
    key: "threshhold",
    width: 80,
    ellipsis: true,
  },
  {
    title: "面值",
    dataIndex: "price",
    key: "price",
    width: 50,
    ellipsis: true,
  },
  {
    title: "有效期",
    dataIndex: "validtime",
    key: "validtime",
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

export default function CouponTable(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getCouponList();
      setData(res.data);
    }
    fetchData();
  }, []);
  const setIsDetail = (record) => {
    props.setIsDetail(record);
  };
  const setIsAdd = () => {
    props.setIsAdd();
  };
  const extra = (
    <Button
      type="link"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
      onClick={setIsAdd}
    >
      <MdPostAdd />
      添加优惠券
    </Button>
  );
  return (
    <Card title="优惠券列表" extra={extra}>
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
