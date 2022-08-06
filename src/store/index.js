// 仓库入口文件 
// 引入reducer
import reducer from './reducer';
// 创建仓库
import { createStore } from "redux";
// createStore 已经过时了,现在可以使用configureSgtore来替换它


const store = createStore(reducer)

// 导出仓库
export default store;