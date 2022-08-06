// 非父子组件传值 createContext
import React, { useState, createContext, useContext } from "react";

// 创建上下文空间 provider(提供者), comsumer(消费者)
const NumContext = createContext();
// 使用NumContext.Provider进行包裹
// 在其他组件中使用NumContext.Consume进行读取

// 父组件
function Father() {
  return (
    <>
      <h2>父组件</h2>
      <Child />
    </>
  );
}

// 子组件
function Child() {
  const { num, setNum } = useContext(NumContext);
  return (
    <>
      <h2>子组件{num}</h2>
      <button onClick={() => setNum(444)}>修改</button>
    </>
  );
}

//根组件
export default function App7() {
  const [num, setNum] = useState(123);
  return (
    <>
      <h1>根组件</h1>
      <NumContext.Provider value={{ num, setNum }}>
        <Father />
      </NumContext.Provider>
    </>
  );
}
