import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, DatePicker } from "antd";
import { ImUserTie } from "react-icons/im";
import { RiFileUserFill } from "react-icons/ri";
import { AiFillVideoCamera } from "react-icons/ai";
import { IoNewspaperSharp } from "react-icons/io5";
export default function Overview(props) {
  const [data, setData] = useState([
    {
      icon: <RiFileUserFill />,
      color: "#fb5607",
    },
    {
      icon: <ImUserTie />,
      color: "#2ec4b6",
    },
    {
      icon: <AiFillVideoCamera />,
      color: "#ffbe0b",
    },
    {
      icon: <IoNewspaperSharp />,
      color: "#3a86ff",
    },
  ]);
  useEffect(() => {
    setData(data.map((item, index) => ({ ...item, ...props.data[index] })));
  }, [props.data]);
  const dataComp = (
    <div className="data-overview">
      {data.map((item, index) => (
        <div className="data-item" key={index}>
          <div className="data-item-profile">
            <div
              className="data-item-profile-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>
            <div className="data-item-profile-text">
              <h4>{item.title}</h4>
              <h2>{item.num}</h2>
            </div>
          </div>
          <div className="data-item-desc">
            <small>
              同昨天对比 {item.percent}% 昨日 {item.yesterday}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <Div>
      <Card title="实时概况" extra={<DatePicker />}>
        {dataComp}
      </Card>
    </Div>
  );
}

const Div = styled.div`
  .data-overview {
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 1rem;
    .data-item {
      padding: 1rem;
      .data-item-profile {
        display: flex;
        justify-content: flex-start;
        gap: 2rem;
        align-items: center;
        .data-item-profile-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
        }
        .data-item-profile-text h2 {
          margin-top: 0.5rem;
        }
        svg {
          font-size: 2.5rem;
          color: #fff;
        }
      }
      .data-item-desc {
        margin-top: 2rem;
        color: grey;
      }
    }
  }
`;
