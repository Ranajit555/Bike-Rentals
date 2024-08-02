import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../state/productSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(searchInput));
    setSearchInput("");
    nevigate("/sp");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <>
      <header id="header" className="flex h-[65%] w-[100%] text-[white] bg-[rgba(33,33,34,0.7)] items-center ">
        <div id="box1" className="flex w-[37%] ml-[7%] space-x-3">
          <Link to="/" className=" rounded-l-[80px] rounded-r-[80px] hover:bg-[rgba(252,252,252,0.8)] hover:text-black">
            <span className="flex w-[55%] items-center m-2">
              <p className="text-[35px]">MakeYourRide</p>
            </span>
          </Link>
          <Link to="/product_gallery" className="rounded-l-[80px] rounded-r-[80px] hover:bg-[rgba(252,252,252,0.8)] hover:text-black">
            <div className="flex w-[45%] items-center m-5 1 ">
              <div id="DepartmentLogo" className="flex mr-[7px]">
                <div id="1st_row">
                  <div className="h-[8px] w-[8px] bg-[rgb(0,155,0)] border mb-[2px] mr-[2px]"></div>
                  <div className="h-[8px] w-[8px] bg-[rgb(0,155,0)] border mb-[2px]"></div>
                </div>
                <div id="2nd_row">
                  <div className="h-[8px] w-[8px] bg-[rgb(0,155,0)] border mb-[2px] mr-2[px]"></div>
                  <div className="h-[8px] w-[8px] bg-[rgb(0,155,0)] border mb-[2px]"></div>
                </div>
              </div>
              <div>
                <p className="text-[17px]">
                  Bike<span className="mr-2"></span>Gallery
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* <form className="ml-[2%] w-[100%]">
          <div className="flex relative h-[40px] w-[100%] rounded-l-[80px] rounded-r-[80px] bg-white items-center">
            <input type="text" placeholder="Search" value={searchInput} onChange={handleInputChange} onKeyDown={handleKeyPress} className=" h-[40px] w-[100%] bg-white text-black rounded-l-[80px] rounded-r-[80px] pr-[10%] pl-[4%]"></input>
           <button onClick={handleSearch} id="search_icon" className="absolute right-3">
              <Link to={"/sp"}>
                <img src="https://www.svgrepo.com/show/356535/search-button.svg" className="ml-[5px] h-[15px] w-[15px]"></img>
              </Link>
            </button>
          </div>
        </form> */}

        <div id="logo" className="border rounded w-[7%] mx-[2%]">
          <img src="https://png.pngtree.com/element_our/20190523/ourmid/pngtree-motorcycle-black-and-white-logo-image_1077807.jpg" className="h-[55px] w-[100px]" />
        </div>
        <div className=" mr-[1%] w-[40%]">
          <ul className="flex justify-center space-x-[12%]">
            <p>+913597495923</p>
            <Link to="/blog" className="rounded hover:bg-[rgba(252,252,252,0.8)] hover:text-black px-[1%]">
              Blog
            </Link>
            <Link to="/login" className="rounded hover:bg-[rgba(252,252,252,0.8)] hover:text-black px-[1%]">
              sign in
            </Link>
            <Link to="/partnar" className="rounded hover:bg-[rgba(252,252,252,0.8)] hover:text-black px-[1%]">
              Partnarship
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
