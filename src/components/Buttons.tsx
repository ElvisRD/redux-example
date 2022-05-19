import React from "react";
import { useDispatch } from "react-redux";
import { aumento, disminuye } from "../redux/action";

export default function Buttons() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(aumento())}>aumentar</button>
      <button onClick={() => dispatch(disminuye())}>disminuir</button>
    </div>
  );
}
