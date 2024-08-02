import { useSelector, useDispatch } from "react-redux";
import { addItemcart } from "../state/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { food } from "../pages/product_data";
import Header from "../components/Header";

const ProductShowPage = () => {
  const [isPresentIncart, setIsPresentIncart] = useState(false);
  const [singleItem, setSingleItem] = useState([]);
  const myitemId = useSelector((state) => state.items.selectedItem);
  const cartItempresent = useSelector((state) => state.cartproduct.cartItem);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      // try {
      //   const response = await axios.get("/api/food/");
      //   const allData = response.data;
      //   const selectedIdItem = allData.find((product) => product.id === myitemId);
      //   setSingleItem(selectedIdItem);
      // } catch (error) {
      //   console.error(error);
      // }
      const allData = food;
      const selectedIdItem = allData.find((product) => product.id === myitemId);
      setSingleItem(selectedIdItem);
    };
    fetchData();
  }, [myitemId]);

  useEffect(() => {
    const myfunc01 = () => {
      const falg = cartItempresent.find((Item) => Item.id === singleItem.id);
      if (falg !== undefined) {
        setIsPresentIncart(true);
      }
    };
    myfunc01();
  });

  const handleAddToCart = () => {
    dispatch(addItemcart(singleItem));
  };

  if (myitemId != singleItem.id) {
    return <div>Product is not found</div>;
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="max-w-[80%] mx-auto">
        <div className="flex mt-[5%] justify-center">
          <div className="flex border h-[50vh] w-[75vh] justify-center items-center">
            <img src={singleItem.image} alt={singleItem.name} className="rounded-md h-[85%] w-[60%]" />
          </div>
          <div className=" flex bg-white shadow-md p-6 border rounded-md ml-[2%] w-[45%] ">
            <div className="ml-[10%]">
              <h1 className="text-xl font-bold mb-4">{singleItem.name}</h1>
              <p className="text-gray-800 font-semibold text-lg mb-4">Rent: Rs-{singleItem.price}/Hours</p>
              <div className="py-2 mb-4">
                <button className="bg-red-200 text-red-600 font-semibold px-4 py-2 rounded hover:bg-green-200">Get Bike</button>
              </div>
              <div className="py-2 mb-4">
                <button className="bg-red-200 text-yellow-600 font-semibold px-4 py-2 rounded hover:bg-green-200">+91 3235272912</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-[95%] my-[5%] justify-center border rounded-md shadow-md">
          <div className="ml-[2%]">
            <p>Product details-</p>
            <p className="text-gray-700 mb-4">{singleItem.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit molestiae molestias nemo odio, pariatur dolores earum quibusdam harum dolor ipsam suscipit modi laboriosam excepturi est, numquam culpa. Molestias, illo?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductShowPage;
