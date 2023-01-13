import React, { useState } from "react";
import { Card, Table, Button, Space, Checkbox } from "antd";
import { MdPostAdd } from "react-icons/md";
const dataSource = [
  {
    key: "1325435",
    id: "1325435",
    username: "金金",
    phonenumber: "139342555",
    coursename: "如何。。。",
    status: "待支付",
    price: "100.00",
    committime: "2021.07.01 15:00",
  },
  {
    key: "234555",
    id: "234555",
    title: "示例rererererererere",
    phonenumber: "139342555",
    coursename: "如何。。。",
    status: "上架",
    price: "100.00",
    committime: "2021.07.01 15:00",
  },
];

const columns = [
  {
    title: "场次编号",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "场次名称",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "每日开始时间",
    dataIndex: "startTime",
    key: "startTime",
  },
  {
    title: "每日结束时间",
    dataIndex: "endTime",
    key: "endTime",
  },
  {
    title: "课程数量",
    dataIndex: "courseNum",
    key: "courseNum",
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
  },
];

export default function table(props) {
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
    >
      <MdPostAdd />
      添加时段
    </Button>
  );
  return (
    <Card title="活动列表" extra={extra}>
      <Table
        size="middle"
        dataSource={dataSource}
        columns={columns}
        pagination={{
          hideOnSinglePage: true,
          showQuickJumper: true,
          total: 500,
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
