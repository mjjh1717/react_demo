import React, { Component } from "react";

// let num = 1;

export default class App2 extends Component {
  state = {
    num: 1,
  };
  render() {
    return (
      <div>
        <h2>数字为：{this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          按钮
        </button>
      </div>
    );
  }
}
/*
  由于普通变量无法触发页面数据更新
  所以需要将数据放入到state中
  state -> setState
*/
