import React, { useState } from "react";
import Header from "../components/Header";

function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { username, password });
  };

  return (
    <div className="h-[87vh]">
      <div id="head" className="h-[18%] w-[100%] fixed">
        <Header />
      </div>
      <div className="flex justify-center h-[fit] pt-[5%]">
        <form onSubmit={handleSubmit} className="bg-gray-100 h-[55%] w-[37%] mt-[7%] rounded-lg">
          <div className="mx-[5%]">
            <h2 className="text-2xl font-bold mb-8 ">Sign In</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
