import React, { useState, useEffect } from "react";
import { Card, Table, Button, Space, Checkbox } from "antd";
import { MdPostAdd } from "react-icons/md";
import { getCourseList } from "../../../apis/get";

const columns = [
  {
    title: "编号",
    dataIndex: "id",
    width: 200,
    ellipsis: true,
    key: "id",
  },
  {
    title: "名称",
    dataIndex: "name",
    width: 200,
    ellipsis: true,
    key: "name",
  },
  {
    title: "封面",
    dataIndex: "cover",
    key: "cover",
    render: (cover) => (
      <>
        <img style={{ width: "6rem", height: "4rem" }} src={cover} alt="" />
      </>
    ),
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 100,
    key: "status",
  },
  {
    title: "价格",
    dataIndex: "price",
    width: 100,
    key: "price",
  },
  {
    title: "销量",
    dataIndex: "quantity",
    width: 100,
    key: "quantity",
  },
  {
    title: "上传人",
    dataIndex: "uploader",
    width: 100,
    key: "uploader",
  },
  {
    title: "上传时间",
    dataIndex: "time",
    width: 150,
    key: "time",
  },
  {
    title: "操作",
    key: "action",
    width: 150,
    render: (_, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>{record.status === "上架" ? "下架" : "上架"}</a>
        <a>删除</a>
      </Space>
    ),
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

export default function CourseTable(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getCourseList();
      if (res.data) setData(res.data);
    }
    fetchData();
  }, []);

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
      添加课程
    </Button>
  );
  return (
    <Card title="课程列表" extra={extra}>
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
      <Button type="link">批量导出</Button>
    </Card>
  );
}
