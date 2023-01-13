import React, { useState, useEffect } from "react";
import Search from "./components/TeacherSearch";
import Table from "./components/TeacherTable";
import Add from "./components/TeacherAdd";
import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Teacher(props) {
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
          <Table setIsAdd={()=>setIsAdd(true)} />
        </>
      )}
    </div>
  );
}
