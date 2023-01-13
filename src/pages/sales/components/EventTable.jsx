import React, { useState, useEffect } from "react";
import { Card, Table, Button, Space, Checkbox } from "antd";
import { MdPostAdd } from "react-icons/md";
import { getEventList } from "../../../apis/get";

const columns = [
  {
    title: "活动编号",
    dataIndex: "id",
    key: "id",
    width: 80,
    ellipsis: true,
  },
  {
    title: "活动标题",
    dataIndex: "title",
    key: "title",
    width: 80,
    ellipsis: true,
  },
  {
    title: "活动封面",
    dataIndex: "cover",
    key: "cover",
    render: (cover) => (
      <>
        <img style={{ width: "6rem", height: "4rem" }} src={cover} alt="" />
      </>
    ),
    width: 100,
    ellipsis: true,
  },
  {
    title: "活动状态",
    dataIndex: "status",
    key: "status",
    width: 80,
    ellipsis: true,
  },
  {
    title: "开始时间",
    dataIndex: "starttime",
    key: "starttime",
    width: 100,
    ellipsis: true,
  },
  {
    title: "结束时间",
    dataIndex: "endtime",
    key: "endtime",
    width: 100,
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
    width: 80,
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

export default function EventTable(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getEventList();
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
      添加活动
    </Button>
  );
  return (
    <Card title="活动列表" extra={extra}>
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
