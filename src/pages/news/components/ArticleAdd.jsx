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
      <p style={{ marginBottom: "3rem", color: "grey" }}>请输入文章相关信息</p>
      <Form
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item label="文章标题" name="title">
          <Input placeholder="请输入课程名称"></Input>
        </Form.Item>
        <Form.Item label="文章封面" name="cover">
          <Upload listType="picture-card">
            <div>
              <AiOutlinePlus />
              <div style={{ marginTop: 8 }}>上传照片</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="文章描述" name="desc">
          <TextArea placeholder="请输入内容" rows={4}></TextArea>
        </Form.Item>
        <Form.Item label="文章内容" name="content">
          <TextArea placeholder="请输入内容" rows={9}></TextArea>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
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
