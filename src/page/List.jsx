import React from "react";
import { useParams } from "react-router-dom";

export default function list() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  return <div>list{id}</div>;
}
