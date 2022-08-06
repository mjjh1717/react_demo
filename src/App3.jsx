// 动台绑定数据
import React, { useState } from "react";

// let msg = "你好世界";

export default function App3() {
  // const fn = () => {
  //   msg = "hello world";
  //   console.log(msg);
  // };
  // hook只能用在组件函数中的最顶层

  const [msg, setMsg] = useState("你好世界");

  const fn = () => {
    setMsg("hello world");
    console.log(msg);
  };

  return (
    <>
      <h2>{msg}</h2>;{/* 不行，这样没有触发视图更新 */}
      {/* <button onClick={fn}>修改msg</button> */}
      {/* 使用hook中的useState */}
      <button onClick={fn}>hook修改msg</button>
    </>
  );
}

/*
  Hooks (钩子 - 生命周期钩子相当于特殊的回调函数)
  React 官方提供的Hooks
  开发人员自定义的Hooks
*/
