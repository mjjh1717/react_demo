import React from "react";
import { useSearchParams } from "react-router-dom";

export default function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchParams] = useSearchParams();
  const id = searchParams.getAll("id")[0];
  return <div>home {id}</div>;
}
