import React, { useState, useEffect } from "react";
import Search from "./components/CouponSearch";
import Table from "./components/CouponTable";
import Add from "./components/CouponAdd";
import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Coupon(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurMenu(props.menu));
  }, []);
  const [isAdd, setIsAdd] = useState(false);
  return (
    <div>
      {isAdd ? (
        <Add />
      ) : (
        <>
          <Search />
          <Table setIsAdd={() => setIsAdd(true)} />
        </>
      )}
    </div>
  );
}
