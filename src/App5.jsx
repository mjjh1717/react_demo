// 父传子
import React from "react";

// 父组件
function Father(props) {
  return (
    <>
      <h2>父组件{props.num}</h2>
      <Child num={props.num + 321}></Child>
    </>
  );
}

// 子组件
function Child(props) {
  return <h3>子组件 {props.num}</h3>;
}

//根组件
export default function App5() {
  return (
    <>
      <h1>根组件</h1>
      <Father num={123}></Father>
    </>
  );
}
