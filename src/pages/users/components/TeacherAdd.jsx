import React, { useState } from "react";
import { Card, Form, Input, Button, Upload, Space } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { createTeacher } from "../../../apis/post";
const { TextArea } = Input;
export default function AddTeacher() {
  const [fileList, setFileList] = useState([]);
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const onFinish = async (values) => {
    const { avatar } = values;
    values.avatar = avatar.file.originFileObj;
    const res = await createTeacher(values);
    console.log(res);
  };
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
        <Form.Item label="讲师名称" name="name">
          <Input placeholder="请输入讲师名称"></Input>
        </Form.Item>
        <Form.Item label="讲师头像" name="avatar">
          <Upload
            listType="picture-card"
            name="avatar"
            fileList={fileList}
            onChange={handleChange}
            maxCount={1}
            action="#"
          >
            <div>
              <AiOutlinePlus />
              <div style={{ marginTop: 8 }}>上传照片</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="讲师简介" name="desc">
          <Input placeholder="请输入内容"></Input>
        </Form.Item>
        <Form.Item label="详细介绍" name="detail">
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
