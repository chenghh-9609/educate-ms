import Mock from "mockjs";
const homeData = {
  title: [
    {
      num: "$7777",
      cmp: "+1.2",
    },
    {
      num: 345,
      cmp: "+1.5",
    },
    {
      num: 222,
      cmp: "+1.1",
    },
    {
      num: "34.01%",
      cmp: "-2.1",
    },
  ],
  distribute: [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
  payAmount: [
    {
      name: "00:00",
      uv: 4000,
    },
    {
      name: "03:00",
      uv: 3000,
    },
    {
      name: "06:00",
      uv: 2000,
    },
    {
      name: "09:00",
      uv: 2780,
    },
    {
      name: "12:00",
      uv: 1890,
    },
    {
      name: "15:00",
      uv: 2390,
    },
    {
      name: "18:00",
      uv: 3490,
    },
    {
      name: "21:00",
      uv: 3990,
    },
    {
      name: "24:00",
      uv: 2490,
    },
  ],
  activeUsers: [
    {
      name: "小仓鼠的老房子",
      id: "207HHM1",
      percent: 95,
      avatar: "avatar1",
    },
    {
      name: "松狸奶芙",
      id: "2073HM6",
      percent: 50,
      avatar: "avatar2",
    },
    {
      name: "是个勇士",
      id: "207HRM6",
      percent: 88,
      avatar: "avatar3",
    },
    {
      name: "南方有佳木",
      id: "203HHM6",
      percent: 45,
      avatar: "avatar4",
    },
    {
      name: "金金小张",
      id: "207HSM6",
      percent: 60,
      avatar: "avatar5",
    },
    {
      name: "咖喱酱",
      id: "207HeM6",
      percent: 25,
      avatar: "avatar6",
    },
  ],
  overview: [
    {
      title: "学员数",
      num: 84,
      percent: "+1.2",
      yesterday: "78",
    },
    {
      title: "教师数",
      num: 84,
      percent: "-1.2",
      yesterday: "100+",
    },
    {
      title: "视频数",
      num: 84,
      percent: "+1.2",
      yesterday: "78",
    },
    {
      title: "资讯数",
      num: 284,
      percent: "+1.2",
      yesterday: "100+",
    },
  ],
};
const courseList = [];
const orderList = [];
const refundOrders = [];
const studentList = [];
const teacherList = [];
const carouselList = [];
const articleList = [];
const eventList = [];
const couponList = [];
const COUNT = 100;
const Random = Mock.Random;
for (let index = 0; index < COUNT; index++) {
  courseList.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      title: Random.ctitle(),
      cover: "",
      "status|1": ["上架", "下架"],
      "price|1": [120, 180, 90, 200],
      sales: Random.natural(0, 100),
      "uploader|1": ["admin", "normal"],
      time: Random.datetime(),
    })
  );
  Random.extend({
    phone: () => {
      const prefix = ["132", "139", "136"];
      return (
        prefix[Math.floor(Math.random() * prefix.length)] + Mock.mock(/\d{8}/)
      );
    },
  });
  orderList.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      username: Random.cname(),
      "phonenumber|1": Random.phone(),
      coursename: Random.ctitle(),
      "status|1": ["待支付", "已支付", "已取消"],
      "price|1": [120, 180, 90, 200],
      time: Random.datetime(),
    })
  );
  refundOrders.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      username: Random.cname(),
      "phonenumber|1": Random.phone(),
      coursename: Random.ctitle(),
      "status|1": ["待支付", "已支付", "已取消"],
      "price|1": [120, 180, 90, 200],
      time: Random.datetime(),
    })
  );
  studentList.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      username: Random.cname(),
      "phonenumber|1": Random.phone(),
      coursename: Random.ctitle(),
      "status|1": ["待支付", "已支付", "已取消"],
      "amount|1": [120, 180, 90, 200],
      time: Random.datetime(),
      number: [10, 20, 15],
      disable: Random.boolean(),
    })
  );
  teacherList.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      name: Random.cname(),
      desc: Random.sentence(),
      time: Random.datetime(),
    })
  );
  carouselList.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      title: Random.ctitle(),
      thumbnail: Random.phone(),
      desc: Random.cparagraph(),
      uploader: Random.cname(),
      time: Random.datetime(),
    })
  );
  articleList.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      title: Random.ctitle(),
      cover: Random.phone(),
      desc: Random.cparagraph(),
      uploader: Random.cname(),
      time: Random.datetime(),
    })
  );
  eventList.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      title: Random.ctitle(),
      "status|1": ["进行中", "未上线", "已取消"],
      starttime: Random.datetime(),
      endtime: Random.datetime(),
    })
  );
  couponList.push(
    Mock.mock({
      key: Random.guid(),
      id: Random.guid(),
      title: Random.ctitle(),
      "range|1": ["100-300", "300-500", "500-800", "1000以上"],
      "threshhold|1": ["100", "300", "800", "1000"],
      "price|1": [20, 80, 50, 100],
      validtime: Random.datetime(),
    })
  );
}

export {
  homeData,
  courseList,
  orderList,
  refundOrders,
  studentList,
  teacherList,
  carouselList,
  articleList,
  eventList,
  couponList,
};
