// 生命周期
import React, { useState, useEffect } from "react";

export default function App4() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(100);
  // 模拟mounted： 一般在这个位置写axios请求
  // useEffect(() => {
  //   console.log("挂载完成");
  // });
  // 模拟updated： 监听数据更新 在第二个参数中传递需要监听的数据
  // 当要检测的式页面中所有的变量的时候，有两个选择
  //    填写所有的数组
  //    直接不填写
  // 如果一个都不想检测直接填写一个空数组
  // useEffect(() => {
  //   console.log("num1被点击");
  // }, [num1]);

  // 模拟 beforeDestroy 在这个阶段触发垃圾回收
  useEffect(() => {
    return () => {
      console.log("销毁阶段");
    };
  });
  return (
    <>
      <div>数字为：{num1}</div>
      <button onClick={() => setNum1(num1 + 1)}>累加</button>
      <hr />
      <div>数字为：{num2}</div>
      <button onClick={() => setNum2(num2 - 1)}>累加</button>
    </>
  );
}

/**
 * 函数式组件没有生命周期
 *
 * [Vue生命周期]mounted updated beforeDestroy
 * 数据请求 检测数据更新 垃圾回收
 *
 * [react函数式使用hook模拟]  useEffect
 *
 */
