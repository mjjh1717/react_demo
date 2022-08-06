// 受控组件和不受控组件
import React, { useState, useRef } from "react";

export default function App9() {
  const [value, setValue] = useState("mjjh");

  const element = useRef(null);
  return (
    <>
      <h3>受控组件</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        获取inpute的值
      </button>
      <hr />
      <h3>不受控组件</h3>
      <input type="text" ref={element} />
      <button onClick={() => console.log(element.current.value)}>
        获取input的值
      </button>
    </>
  );
}

/**
 * 受控组件和不受控组件
 * 受控组件和不受控组件值存在于表单元素中
 * 受控就是以react中的数据操作input等表单的数据
 * 所谓的受控组件就是表单元素的value需要通过state(或useState)来定义
 *
 * 不受控组件就是不管input表单中有什么值,react只管去获取就好了
 * 不受控组件意味着表单元素的value无法通过state获取,只能使用ref(useref)来获取
 */
