// memo 记忆
// 父组件数据却换时,子组件也被更新了
// 使用memo包裹子组件,就可记忆住子组件的状态不再刷新
// 但是如果子组件式动态的那么memo会失效
// 所以需要使用useCallback去配合memo将对应的函数缓存下来

import React, { useState, memo, useCallback, useMemo } from "react";

const Child = memo((props) => {
  console.log(123);
  return (
    <>
      <div>子组件</div>
      <button onClick={() => props.doSth()}>累加</button>
    </>
  );
});

export default function App10() {
  const [num, setNum] = useState(1);
  // const doSth = useCallback(() => setNum(num + 1), []);

  const doSth = useCallback(() => setNum((num) => num + 1), []);
  // 类似以effect传入空值就是让useCallback不再监听对应的函数
  // 这时点击时只能加一次原因是
  // setNum(newValue) 使用新值强行覆盖初始值
  // setNUm(num => num+1) 不断使用新值覆盖旧值
  // useMemo 函数中返回函数 高阶函数
  const doSth2 = useMemo(() => {
    return () => setNum((num) => num + 1);
  }, []);

  return (
    <>
      <div>
        <h3>数字为{num}</h3>
        {/* <button onClick={() => setNum(num + 1)}>累加</button> */}
        <hr />
        <Child doSth={doSth2} />
      </div>
    </>
  );
}
