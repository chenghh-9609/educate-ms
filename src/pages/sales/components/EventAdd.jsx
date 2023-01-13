import React from "react";
import {
  Card,
  Form,
  Input,
  DatePicker,
  Button,
  Radio,
  Upload,
  Space,
} from "antd";
import { AiOutlinePlus } from "react-icons/ai";
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
        <Form.Item label="活动编号" name="id">
          <Input placeholder="请输入课程名称"></Input>
        </Form.Item>
        <Form.Item label="活动封面" name="cover">
          <Upload listType="picture-card">
            <div>
              <AiOutlinePlus />
              <div style={{ marginTop: 8 }}>上传照片</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="活动状态" name="priceRestrict">
          <Radio.Group>
            <Radio value="on">上线状态</Radio>
            <Radio value="off">下线状态</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="活动日期" name="coursePrice">
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
