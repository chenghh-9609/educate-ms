import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, DatePicker, Progress } from "antd";
export default function ActiveUser(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const usersComp = data.map((item, index) => (
    <div className="user-item" key={item.id}>
      <div className="avatar">
        <img
          src={require(`../../../assets/images/avatar1.jpg`)}
          alt=""
        />
      </div>
      <div className="user-profile">
        <h4>{item.name}</h4>
        <small>学号：{item.id}</small>
      </div>
      <div className="user-percent">
        <Progress percent={item.percent} strokeColor={"#ff4d6d"} />
      </div>
    </div>
  ));
  return (
    <Div>
      <Card title="活跃学员" extra={<DatePicker />}>
        <div className="users">{usersComp}</div>
      </Card>
    </Div>
  );
}
const Div = styled.div`
  .users {
    display: grid;
    grid-gap: 1rem;
    .user-item {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 1rem;
      .avatar {
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .ant-progress {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        margin-bottom: 0;
        .ant-progress-text {
          color: grey;
        }
        .ant-progress-outer {
          transform: rotate(180deg);
          margin-inline-end: 0;
          padding-inline-end: 0;
        }
      }
      .user-profile {
        small {
          color: grey;
        }
      }
      .user-percent {
        width: 50%;
      }
    }
  }
`;
