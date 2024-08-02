import React from "react";
import Header from "../components/Header";

const Partnar = () => {
  return (
    <div className="h-[87vh] bg-white rounded-lg shadow">
      <div>
        <Header />
      </div>
      <div className="flex-col items-center justify-center mt-[5%]">
        <div className="text-[35px] flex justify-center items-center">Jion with us as a partnar</div>
        <div className="flex justify-center items-center text-[22px]">Register Your Garage</div>
        <div className="flex justify-center items-center mt-[5vh]">
          <p className="w-[50%] p-[19px] border rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nemo eum sunt tempore molestias nostrum, quam maxime omnis fuga, autem distinctio provident dolor cum quasi est velit, perspiciatis modi sit?
            <br/>
            <span className="flex justify-center font-bold text-[26px]">Contact Us: +913597495923</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partnar;
