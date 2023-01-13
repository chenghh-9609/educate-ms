import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectBar from "./components/CourseSearch";
import CourseTable from "./components/CourseTable";
import AddCourse from "./components/CourseAdd";
import { setCurMenu } from "../../store/menu";
import { useDispatch } from "react-redux";
export default function Course(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurMenu(props.menu));
  }, []);

  const [isAdd, setIsAdd] = useState(false);
  const content = isAdd ? (
    <AddCourse />
  ) : (
    <>
      <SelectBar />
      <CourseTable setIsAdd={() => setIsAdd(true)} />
    </>
  );
  return <Div>{content}</Div>;
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
