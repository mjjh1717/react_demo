import React from "react";
import { useLocation } from "react-router-dom";

export default function detail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let location = useLocation();
  console.log(location.state?.username);
  return <div>detail</div>;
}
