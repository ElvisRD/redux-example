import React from "react";
import { useSelector } from "react-redux";

export default function Text() {
  const state = useSelector((state: any) => state);

  return (
    <div>
      <h1>{state.amountReducer.amount}</h1>
    </div>
  );
}
