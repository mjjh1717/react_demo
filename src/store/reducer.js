// 创建初始状态 并导出一个函数

const defaultState = {
  num: 1
}

// 导出一个函数
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'addNum') {
    // 直接修改state num的内存地址没有发生变化所以没有监听到数据修改
    newState.num += action.value
  }
  // 推荐使用switch case的格式
  console.log(newState.num);
  return newState
}