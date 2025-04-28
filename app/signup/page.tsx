import React from "react";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/bg.jpg')"  
      }}

 


    >
      <div className="bg-black bg-opacity-70 p-10 rounded-xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-center text-3xl font-serif mb-8">SIGN UP</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">NICK NAME</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border-none focus:outline-none"
              placeholder="Enter your nickname"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">PASSWORD</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border-none focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">GMAIL</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border-none focus:outline-none"
              placeholder="Enter your Gmail"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

