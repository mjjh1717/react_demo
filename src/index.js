import ReactDOM from 'react-dom/client';
import App from "./App11";
import { Provider } from 'react-redux'
import store from "./store";
import Router from "./router/index.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <Router></Router>
  </Provider>
);

// 组件销毁
// setTimeout(() => {
//   ReactDom.render(
//     <input />,
//     document.getElementById('root')
//   )
// }, 3000);