import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Product_gallery from "../pages/Product_gallery";
import Blog from "../pages/Blog";
import Partnar from "../pages/Partnarship";
import Login from "../pages/Login";
import Product_page from "../pages/Product_page";
import Search_p from "../pages/SearchP";

const Container = () => {
  return (
    <main id="Container" className="h-[90%] w-[100%] bg-[rgb(255,255,255,0.9)] text-black">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/product_gallery"} element={<Product_gallery />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/partnar"} element={<Partnar/>} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/pi/*"} element={<Product_page/>}/>
        <Route path={"/sp"} element={<Search_p/>}/>
      </Routes>
    </main>
  );
};
export default Container;
