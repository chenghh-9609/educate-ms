import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaCoins,
  FaUserFriends,
  FaClipboardList,
  FaPercent,
} from "react-icons/fa";

export default function TitleCards({ data }) {
  const [cards, setCards] = useState([
    {
      key: "1",
      title: "今日订单收入",
      component: <FaCoins />,
      color: "#1dd3b0",
    },
    {
      key: "2",
      title: "今日订单数量",
      component: <FaClipboardList />,
      color: "#9d4edd",
    },
    {
      key: "3",
      title: "今日访客数量",
      component: <FaUserFriends />,
      color: "#ff9e00",
    },
    {
      key: "4",
      title: "支付转化率",
      component: <FaPercent />,
      color: "#f25c54",
    },
  ]);
  useEffect(() => {
    const cardData = cards.map((item,index) => ({ ...item, ...data[index] }))
    setCards(cardData);
  }, [data]);
  return (
    <Div className="title-cards">
      {cards.map((item) => (
        <div
          className="card"
          style={{ backgroundColor: item.color }}
          key={item.key}
        >
          {item.component}
          <div className="content">
            <h3>{item.title}</h3>
            <h2>{item.num}</h2>
            <p>{item.cmp}% 同昨天对比</p>
          </div>
        </div>
      ))}
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  & > * {
    flex: 1;
  }
  .card {
    color: #f0f0f0;
    text-align: right;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.5rem;
    padding: 1rem;
    opacity: 0.8;
    svg {
      font-size: 5rem;
      color: #e0e0e0;
      opacity: 0.5;
    }
    h3 {
      font-weight: 400;
    }
    .content > * {
      margin-top: 0.8rem;
    }
  }
`;
