import React, { useEffect } from "react";
import Search from "./components/StudentSearch";
import Table from "./components/StudentTable";

import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Student(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurMenu(props.menu));
  }, []);
  return (
    <div>
      <Search />
      <Table />
    </div>
  );
}
