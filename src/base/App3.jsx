import React, { Component } from "react";

export default class App2 extends Component {
  // state完整写法
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }
  render() {
    return (
      <div>
        <h2>数字为：{this.state.num}</h2>
        {/* 事件的三种写法 */}
        {/* 行内写 */}
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          按钮1 - 累加
        </button>
        {/* 函数监听 */}
        {/* 默认this.addNum()是直接执行的 不能家括号*/}
        {/* <button onClick={this.addNum()}>按钮2 - 累加加括号</button> */}
        {/* <button onClick={this.addNum}>按钮3 - 累加不加括号</button> */}
        {/* 直接使用this不能使用获取到对应的对象 */}
        {/* 放式一 点击时绑使用bind修改this指向 */}
        {/* <button onClick={this.addNum.bind(this)}>按钮4 - 累加不加括号</button> */}
        {/* 将点击事件直接返回一个箭头函数的形式 */}
        <button onClick={() => this.addNum()}>按钮3 - 累加不加括号</button>
      </div>
    );
  }
  addNum() {
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num);
  }
}
