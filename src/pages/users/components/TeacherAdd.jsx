import React from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Upload,
  Space,
} from "antd";
import { AiOutlinePlus } from "react-icons/ai";
const { TextArea } = Input;
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
        <Form.Item label="讲师名称" name="teacherName">
          <Input placeholder="请输入讲师名称"></Input>
        </Form.Item>
        <Form.Item label="讲师头像" name="avatar">
          <Upload listType="picture-card" name="avatar">
            <div>
              <AiOutlinePlus />
              <div style={{ marginTop: 8 }}>上传照片</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="讲师简介" name="teacherDesc">
          <Input placeholder="请输入内容"></Input>
        </Form.Item>
        <Form.Item label="详细介绍" name="courseCatalog">
          <TextArea placeholder="请输入内容" rows={4}></TextArea>
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
