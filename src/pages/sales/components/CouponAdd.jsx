import React from "react";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Select,
  DatePicker,
  Space,
} from "antd";
export default function add() {
  const onFinish = (values) => console.log(values);
  return (
    <Card>
      <p style={{ marginBottom: "3rem", color: "grey" }}>请输入课程相关信息</p>
      <Form
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item label="优惠券名称" name="courseName">
          <Input placeholder="请输入课程名称"></Input>
        </Form.Item>
        <Form.Item label="优惠券类型" name="type">
          <Select />
        </Form.Item>
        <Form.Item label="优惠券数量" name="amount">
          <InputNumber
            min={1}
            placeholder="请输入金额"
            prefix="￥"
            style={{ width: "100%" }}
          ></InputNumber>
        </Form.Item>
        <Form.Item label="优惠券面额" name="denomination">
          <InputNumber
            min={1}
            placeholder="请输入金额"
            prefix="￥"
            style={{ width: "100%" }}
          ></InputNumber>
        </Form.Item>
        <Form.Item label="使用门槛" name="priceRestrict">
          <Radio.Group>
            <Radio value="on">上架</Radio>
            <Radio value="off">下架</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="使用范围" name="priceRestrict">
          <Radio.Group>
            <Radio value="on">上架</Radio>
            <Radio value="off">下架</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="有效日期" name="validDate">
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Space>
            <Button htmlType="submit" type="primary">
              确认
            </Button>
            <Button>取消</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
}
