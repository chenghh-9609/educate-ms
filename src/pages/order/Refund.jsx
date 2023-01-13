import React, { useState, useEffect } from "react";
import RefundSearch from "./components/RefundSearch";
import RefundTable from "./components/RefundTable";
import OrderDetail from "./components/OrderDetail";
import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Refund(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurMenu(props.menu));
  }, []);
  const [isDetail, setIsDetail] = useState(false);
  const [curRecord, setCurRecord] = useState({});
  const setRecord = (record) => {
    console.log(record);
    setIsDetail(true);
    setCurRecord(record);
  };
  return (
    <div>
      {isDetail ? (
        <OrderDetail curRecord={curRecord} />
      ) : (
        <>
          <RefundSearch />
          <RefundTable setIsDetail={setRecord} />
        </>
      )}
    </div>
  );
}
