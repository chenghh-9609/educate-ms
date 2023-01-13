import React from "react";
import { Card, Result, Descriptions } from "antd";

export default function OrderDetail(props) {
  console.log(props);
  return (
    <Card>
      <Result
        status="success"
        title="订单状态：已完成"
        style={{ backgroundColor: "#eee" }}
      />
      <Descriptions
        title="基础信息"
        bordered
        column={2}
        style={{ marginTop: "2rem" }}
      >
        <Descriptions.Item label="订单编号">{props.curRecord.id}</Descriptions.Item>
        <Descriptions.Item label="订单创建时间">{props.curRecord.time}</Descriptions.Item>
        <Descriptions.Item label="付款方式">
        {props.curRecord.status}
        </Descriptions.Item>
        <Descriptions.Item label="订单金额">{props.curRecord.price}</Descriptions.Item>
        <Descriptions.Item label="多余/长字段">
        {props.curRecord.other}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        title="用户信息"
        bordered
        column={2}
        style={{ marginTop: "2rem" }}
      >
        <Descriptions.Item label="用户ID">{props.curRecord.userId}</Descriptions.Item>
        <Descriptions.Item label="用户昵称">{props.curRecord.username}</Descriptions.Item>
        <Descriptions.Item label="手机号">{props.curRecord.phonenumber}</Descriptions.Item>
        <Descriptions.Item label="订单数量">{props.curRecord.amount}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
