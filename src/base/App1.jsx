import React from "react";

const msg = "hellw world";
const mystyle = { backgroundColor: "skyblue" };
const flag = false;
let arr = ["刘备", "关羽", "张飞"];

// 类组件
export default class App extends React.Component {
  render() {
    return (
      <>
        <h2>{msg}</h2>
        <hr />
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
        <hr />
        <div className="box">盒子</div>
        <hr />
        <div style={mystyle}>盒子</div>
        <hr />
        <div style={{ backgroundColor: flag ? "skyblue" : "pink" }}>盒子</div>
        <hr />
        <ul>
          {
            // React中的列表循环有且只有map可以使用
            // 只有map才有返回值，forEach没有
            arr.map((item, index) => {
              return <li>{item}</li>;
            })
          }
        </ul>
      </>
    );
  }
}

/*
  使用react必须要有一个根元素
  但是也是可以使用 <></> 包裹元素
*/

/*
  代码生成
  插件 ES7+ React/Redux/React-Native snippet
  rcc react class compontent
  rfc react function compontent
*/
