import { Card, Button, Form, Input, Select, DatePicker } from "antd";
import React, { useState } from "react";

export default function Search() {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  const stateOptions = [
    { value: "on", label: "上架" },
    { value: "off", label: "下架" },
  ];
  const uploadPersons = [
    { label: "金金小张", value: "12344" },
    { label: "曹操", value: "3455" },
  ];
  const onFinish = (values) => console.log(values);
  const onReset = () => form.resetFields();
  return (
    <Card>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item label="上架时间" name="time">
          <RangePicker />
        </Form.Item>
        <Form.Item label="上架状态" name="state">
          <Select options={stateOptions} style={{ width: 200 }} />
        </Form.Item>
        <Form.Item label="上传人" name="person">
          <Select options={uploadPersons} style={{ width: 200 }} />
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
