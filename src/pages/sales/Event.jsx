import React, { useState, useEffect } from "react";
import Search from "./components/EventSearch";
import Table from "./components/EventTable";
import Add from "./components/EventAdd";
import Set from "./components/EventSet";
import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Event(props) {
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
