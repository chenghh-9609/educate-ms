import { Card, Button, Form, Input, DatePicker } from "antd";
import React, { useState } from "react";

export default function Search() {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  const onFinish = (values) => console.log(values);
  const onReset = () => form.resetFields();
  return (
    <Card style={{ marginBottom: "2rem" }}>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item label="注册时间" name="time">
          <RangePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="手动搜索" name="search">
          <Input style={{ width: 300 }} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          搜索
        </Button>
        <Button style={{ marginLeft: "1rem" }} onClick={onReset}>
          重置
        </Button>
      </Form>
    </Card>
  );
}
