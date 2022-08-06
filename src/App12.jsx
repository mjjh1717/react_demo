// react路由
// 查资料需要找到对应的路由版本,每个版本的写法各不相同
// 注册子路由类似于Vue中的routerView
import React from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

export default function App12() {
  const location = useLocation();
  console.log(location.pathname);

  /**
   * router三种数据携带方式
   * 1: 在链接后面加上 /数据 的形式 使用useParams hook获取
   * 2: 在链接后面加上 ?数据名=数据值&数据名=数据值 的格式,使用useSearchParams hook获取传入的数组数据
   * 3: 在跳转事件的时候跟上需要跳转的数据 使用useLocation的f方式获取数据
   */
  const naviate = useNavigate();
  const goDetail = () => {
    naviate("/detail", {
      state: { username: "张三" },
    });
  };

  return (
    <>
      <div>App12</div>
      <ul>
        <li>
          <Link to="/home?id=456">首页</Link>
        </li>
        <li>
          <Link to="/list/123">列表</Link>
        </li>
        <li>
          <Link to="/detail">详情</Link>
        </li>
      </ul>
      <button onClick={goDetail}>跳转详情</button>
      <hr />
      <Outlet></Outlet>
    </>
  );
}
