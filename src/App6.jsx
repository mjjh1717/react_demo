// 子传父
import React, { useState } from "react";

// 父组件
function Father(props) {
  return (
    <>
      <h2>父组件{props.num}</h2>
      <button
        onClick={() => {
          props.changeNum(777);
        }}
      >
        修改num
      </button>
      <Child num={props.num + 321} changeNum={props.changeNum} />
    </>
  );
}

// 子组件
function Child(props) {
  return (
    <>
      <h2>子组件{props.num}</h2>
      <button
        onClick={() => {
          props.changeNum(999);
        }}
      >
        修改num
      </button>
    </>
  );
}

//根组件
export default function App6() {
  const [num, setNum] = useState(123);
  // 提供给子组件来修改num的函数
  // const changeNum = (arg) => setNum(arg);
  // 简化可以直接传setNum
  return (
    <>
      <h1>根组件</h1>
      {/* <Father num={num} changeNum={changeNum} /> */}
      <Father num={num} changeNum={setNum} />
    </>
  );
}

/**
 * 无论式小程序 vue react,所谓的子传父都是父组件在干活
 */
