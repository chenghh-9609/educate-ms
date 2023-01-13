import React, { useState, useEffect } from "react";
import OrderSearch from "./components/OrderSearch";
import OrderTable from "./components/OrderTable";
import OrderDetail from "./components/OrderDetail";

import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Order(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurMenu(props.menu));
  }, []);
  const [isDetail, setIsDetail] = useState(false);
  const [curRecord, setCurRecord] = useState({});
  const getDetail = (record) => {
    setIsDetail(true);
    setCurRecord(record);
  };
  return (
    <div>
      {isDetail ? (
        <OrderDetail curRecord={curRecord} />
      ) : (
        <>
          <OrderSearch />
          <OrderTable setIsDetail={getDetail} />
        </>
      )}
    </div>
  );
}
