// 1在顶级组件(index.js)中使用provider包裹并且声明store
// 声明一个高阶函数将状态映射的函数获取state中的数据
// 在函数组件中的props中获取到对应的数据
import React from "react";
import { connect } from "react-redux";

function App11(props) {
  return (
    <>
      <div>App11 {props.num}</div>
      <button onClick={() => props.addNum()}>累加</button>
    </>
  );
}

// 状态映射:将reducer中的state映射成props.让开发者可以在组件中
//   使用prpps获取到state中的数据
const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

// 事件派发映射.将reducer中的事件映射成props,让开发者可以从组件中
//   使用props.xxx()实现具体函数功能
const mpaDispatchToProps = (dispatch) => {
  return {
    addNum() {
      const action = { type: "addNum", value: 3 };
      dispatch(action);
    },
  };
};

// export default connect(state映射,dispatch映射)(当前组件名称);
export default connect(mapStateToProps, mpaDispatchToProps)(App11);
