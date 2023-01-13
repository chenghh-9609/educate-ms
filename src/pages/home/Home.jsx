import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TitleCards from "./components/TitleCards";
import DistributeChart from "./components/DistributeChart";
import AmountChart from "./components/AmountChart";
import ActiveUser from "./components/ActiveUser";
import Overview from "./components/Overview";
import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
import { getHomeData } from "../../apis/get";
export default function Home(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: {},
    distribute: [],
    payAmount: [],
    activeUsers: [],
    overview: [],
  });
  useEffect(() => {
    dispatch(setCurMenu(props.menu));
    async function fetchData() {
      const res = await getHomeData();
      setData(res.data);
      console.log(res.data);
    }
    fetchData();
  }, []);

  return (
    <Section>
      <TitleCards data={data.title} />
      <div className="charts">
        <DistributeChart data={data.distribute} />
        <AmountChart data={data.payAmount} />
        <ActiveUser data={data.activeUsers} />
        <Overview data={data.overview} />
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .charts {
    display: grid;
    gap: 2rem;
  }
`;
