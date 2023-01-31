import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Upload,
  Space,
  message,
} from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import { createCourse } from "../../../apis/post";
const { TextArea } = Input;
const { messageApi, contextHolder } = message;
export default function CourseAdd() {
  const [fileList, setFileList] = useState([]);
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const onFinish = async (values) => {
    const { cover } = values;
    values.cover = cover.file.originFileObj;
    const res = await createCourse(values);
    messageApi.open({ type: "success", content: "添加课程成功！" });
  };
  return (
    <Card>
      {contextHolder}
      <p style={{ marginBottom: "1rem", color: "grey" }}>请输入课程相关信息</p>
      <Form
        layout="horizontal"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item label="课程名称" name="name">
          <Input placeholder="请输入课程名称"></Input>
        </Form.Item>
        <Form.Item label="封面图片" name="cover">
          <Upload
            listType="picture-card"
            fileList={fileList}
            maxCount={1}
            onChange={handleChange}
          >
            <div>
              <AiOutlinePlus />
              <div style={{ marginTop: 8 }}>上传照片</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="商品限制" name="status">
          <Radio.Group>
            <Radio value="上架">上架</Radio>
            <Radio value="下架">下架</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="课程价格" name="price">
          <InputNumber
            min={1}
            placeholder="请输入金额"
            prefix="￥"
            style={{ width: "100%" }}
          ></InputNumber>
        </Form.Item>
        <Form.Item label="课程简介" name="courseDesc">
          <TextArea placeholder="请输入内容" rows={4}></TextArea>
        </Form.Item>
        <Form.Item label="讲师介绍" name="teacherDesc">
          <TextArea placeholder="请输入内容" rows={4}></TextArea>
        </Form.Item>
        <Form.Item label="课程目录" name="courseContent">
          <Input placeholder="请输入目录以“逗号”隔开"></Input>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 14 }}>
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
