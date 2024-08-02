import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectItem } from "../state/itemSlice";
import { food } from "../components/Data";
import Header from "../components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const images = [
  "https://www.onnbikes.com/img/long-term-desktopbanner@2x.jpg",
  "https://acko-cms.ackoassets.com/Top_Reasons_to_Ride_a_Bike_d20c7d5214.png",
  "https://rewanderlustprod.blob.core.windows.net/rental/operator/152eb626-51e7-4e49-984b-42d97b9796bd/general/business-image/business-image-20230707194628.jpg",
];
const interval = 1200;

const HomePage = () => {
  const [product_data, setProduct_data] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios
    //   .get("/api/food/")
    //   .then((response) => {
    //     setProduct_data(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setProduct_data(food);
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isSliding) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(intervalId);
  }, [images.length, interval, isSliding]);

  const handleInteraction = () => {
    {
      isSliding ? setIsSliding(false) : setIsSliding(true);
    }
  };

  const nextimage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleProductPage = (productId) => {
    dispatch(selectItem(productId));
  };

  const [selectedCity, setSelectedCity] = useState("");
  const cities = ["Siliguri","Jaipur","Kolkata","Bangaluru","Delhi"];
  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  //datapicker for calendder->
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <div id="product-list" className={`flex flex-wrap justify-center aligne-item word-wrap space-x-[2.5%]`}>
        {product_data.map((product) =>
          product.id <= 3 ? (
            product.id == 2 ? (
              <div id="product_card" className={`text-white h-[100vh] w-screen rounded-md mb-[2%] bg-blue-400`} style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div id="head" className="h-[18%] w-[100%] fixed">
                  <Header />
                </div>

                <div id="saerch_filter" className="mt-[15%]">
                  <form className="mx-[23%] w-[54%]">
                    <div className="flex justify-center relative space-x-2 h-[80px] w-[100%] rounded-l-[20px] rounded-r-[20px] bg-white items-center">
                      <div id="select city" className="flex flex-col items-center justify-center h-fit w-[30%]">
                        <label htmlFor="city" className="mb-1 text-lg font-semibold text-black">
                          City: 
                        </label>
                        <select id="city" value={selectedCity} onChange={handleChange} className="w-[100%] p-2 border rounded-md">
                          <option value="" disabled>
                            Choose a city
                          </option>
                          {cities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                        {/* {selectedCity && (
                            <div className="mt-4 text-xl">
                              You selected: <span className="font-bold">{selectedCity}</span>
                            </div>
                          )} */}
                      </div>
                      <div id="start_date" className="flex flex-col items-center justify-center h-fit w-[30%]">
                        <label htmlFor="date" className="mb-1 text-lg font-semibold text-black">
                          Start Date:
                        </label>
                        <div className="w-[100%]">
                          <DatePicker selected={startDate} className="w-[100%] p-2 border rounded-md" onChange={(date) => setStartDate(date)} />
                        </div>
                        {/* {selectedDate && (
                            <div className="mt-4 text-xl">
                              You selected: <span className="font-bold">{selectedDate.toDateString()}</span>
                            </div>
                          )} */}
                      </div>
                      <div id="end_date" className="flex flex-col items-center justify-center h-fit w-[30%]">
                        <label htmlFor="date" className="mb-1 text-lg font-semibold text-black">
                          End Date:
                        </label>
                        <div className="w-[100%]">
                          <DatePicker selected={endDate} className="w-[100%] p-2 border rounded-md" onChange={(date) => setEndDate(date)} />
                        </div>
                        {/* {selectedDate && (
                            <div className="mt-4 text-xl">
                              You selected: <span className="font-bold">{selectedDate.toDateString()}</span>
                            </div>
                          )} */}
                      </div>
                      <div id="search_icon" className="ml- mt-5 ">
                          <Link to={"/sp"}>
                            <img src="https://www.svgrepo.com/show/356535/search-button.svg" className="ml-[5px] h-[25px] w-[25px]"></img>
                          </Link>
                        </div> 
                    </div>
                  </form>
                </div>
                <div id="pause&nextbutton" className="flex-col">
                  <div id="slide_control" className="h-full mt-[46vh]">
                    <button onClick={handleInteraction} className="text-white  bg-gray-700 px-4 py-2 hover:bg-gray-800">
                      {!isSliding && (
                        <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                        </svg>
                      )}
                      {isSliding && (
                        <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      )}
                    </button>
                    <button onClick={nextimage} className="text-white  bg-gray-700 px-4 py-2 hover:bg-gray-800">
                      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : null
          ) : // (
          //   <div id="product_card" className={`h-[60vh] w-[20%] rounded-md mb-[2%] bg-blue-400`} style={{ backgroundImage: `url(${product.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          //     <div>
          //       <h3>{product.name}</h3>
          //       <p>{product.description}</p>
          //     </div>
          //   </div>
          // )
          null || product.id >= 4 ? (
            <div id="product_card" className="flex-col h-[60vh] w-[17%] border border-solid border-red-300 rounded-md mb-[2%] bg-white">
              {/* <div id="img_product" className="h-[70%] mb-[13%] w-[100%]">
                <img src={`${product.image}`} className="h-[100%] w-[100%]"></img>
              </div> */}
              <div className="h-[fit]">
                <div className="flex my-4 items-center justify-center text-[27px]">
                  <h1>{product.name}</h1> 
                </div>
                <div className="mx-3 mt-5">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};
export default HomePage;
