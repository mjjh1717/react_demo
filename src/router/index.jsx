/**
 * App->home - list -detail
 * react-router-dom中有两种模式
 *  BrowserRouter(History模式)
 *  HashRouter(Hash模式)
 */

import App from "../App12";
import Home from "../page/Home";
import List from "../page/List";
import Detail from "../page/Detail";
import Notfont from "../page/Notfont";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//定义一个路由
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/list/:id" element={<List />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/*" element={<Notfont />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
