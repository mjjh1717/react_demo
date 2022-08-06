import React from "react";

const msg = "hellw world";

// 类组件
class App extends React.Component {
  render() {
    return (
      <div>
        <h2>{msg}</h2>

        <input type="text"></input>
      </div>
    );
  }
}

export default App;

/*
  1.文件明可以是jsx或者js，不影响文件中的代码
  2.组件名称必须大写
  3.Js出现的（）代表其中想写HTML
  4.Html中出现{}代表其中想要编写的js
  5.可以直接export default导出
*/
