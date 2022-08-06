import React, { Component } from "react";
import "./App4.css";

export default class App2 extends Component {
  state = {
    num: 1,
  };
  render() {
    return (
      // 写样式的两种方式
      // 默认行内引入
      // <div
      //   style={{
      //     width: "200px",
      //     height: "200px",
      //     background: "pink",
      //   }}
      // >
      //   <button onClick={this.btnClick.bind(this, 1)}>按钮1</button>
      //   <button onClick={this.btnClick.bind(this, 2)}>按钮2</button>
      // </div>
      // 引入css文件
      <div className="box">
        <button onClick={this.btnClick.bind(this, 1)}>按钮1</button>
        <button onClick={this.btnClick.bind(this, 2)}>按钮2</button>
      </div>
    );
  }
  btnClick(num) {
    console.log(num);
  }
}
