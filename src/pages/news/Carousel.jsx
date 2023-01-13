import React, { useState, useEffect } from "react";
import Search from "./components/CarouselSearch";
import Table from "./components/CarouselTable";
import Add from "./components/CarouselAdd";
import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Carousel(props) {
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
