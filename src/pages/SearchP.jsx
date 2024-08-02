import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import {setSearchQuery,filterProducts } from "../state/productSlice";
import { selectItem } from "../state/itemSlice";
import { food } from "../pages/product_data";
import Header from "../components/Header";

const Search_p = () => {
  const [productdata, setProductdata] = useState([]);
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.products.searchQuery);
  const products = useSelector((state) => state.products.filteredProducts);
  
  useEffect(() => {
    // axios
    //   .get("/api/food/")
    //   .then((response) => {
    //     setProductdata(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setProductdata(food);
  });

  useEffect(() => {
    dispatch(filterProducts({ products: productdata}));
  }, [dispatch,productdata]);

  const handleProductPage =(productId) => {
    dispatch(selectItem(productId));
  };
  
  return (
    <>
    <div>
      <Header/>
    </div>
      <div id="product-list" className={`mt-[3%] flex flex-wrap justify-center aligne-item word-wrap space-x-[2.5%]`}>
        {products.map(product =>
          product.id > 3 ? (
            <Link onClick={() => handleProductPage(product.id)} to={`${product.link}/${product.id}`}  id="product_card" className="flex-col h-[60vh] w-[17%] border border-solid border-red-300 rounded-md mb-[2%] bg-[rgb(248,255,189)]">
              <div id="img_product" className="h-[70%] mb-[13%] w-[100%]">
                <img src={`${product.image}`} className="h-[100%] w-[100%]"></img>
              </div>
              <div className="h-[fit]">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Rs.{product.price}/Hours</p>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </>
  );
};

export default Search_p;
