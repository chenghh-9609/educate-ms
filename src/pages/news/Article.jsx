import React, { useState, useEffect } from "react";
import Search from "./components/ArticleSearch";
import Table from "./components/ArticleTable";
import Add from "./components/ArticleAdd";

import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Article(props) {
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
