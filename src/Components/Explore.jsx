import React, { useState } from "react";

export default function Explore() {
  const [activeTab, setActiveTab] = useState("oneWay");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=""> {/* Added padding-bottom to prevent overlap */}
      {/* Explore Section */}
      <div
        className="relative flex items-center justify-center bg-[url('/public/Images/Seen.png')] bg-cover bg-center bg-no-repeat h-[34rem] sm:h-[350px] md:h-[400px]"
      >
        {/* Card Section */}
        <div className="border border-black xsm:w-[90vw] xsm:mx-auto xsm:mt-[24rem] relative z-10 mx-auto w-full max-w-6xl mt-60 bg-white px-4 sm:px-6 md:px-8 rounded-xl shadow-lg">
          {/* Tabs */}
          {/* <div className="flex flex-wrap xsm:justify-evenly md:justify-center gap-2 xsm:gap-0 sm:gap-4 mt-2">
            {["One Way", "Round Trip", "Local", "Airport"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab.toLowerCase().replace(" ", ""))}
                className={`px-4 xsm:text-[0.8rem] xsm:px-1 sm:px-6 py-2 text-sm font-semibold rounded h-[45px] sm:h-[50px] sm:w-[120px] transition-all duration-300 ${
                  activeTab === tab.toLowerCase().replace(" ", "")
                    ? "text-white bg-[#00AB8E]"
                    : "text-[#B5B5B5] hover:text-white hover:bg-[#00AB8E]"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div> */}

          {/* Form */}
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
            {/* From */}
            <div>
              <label className="text-sm text-black font-bold">FROM</label>
              <input
                type="text"
                placeholder="Start typing city - e.g. Bangalore"
                className="mt-2 w-full p-2 border-b border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AB8E]"
              />
            </div>

            {/* To */}
            <div>
              <label className="text-sm text-black font-bold">TO</label>
              <input
                type="text"
                placeholder="Start typing city - e.g. Mysore"
                className="mt-2 w-full p-2 border-b border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AB8E]"
              />
            </div>

            {/* Pick Up Date */}
            <div>
              <label className="text-sm text-black font-bold">PICK UP</label>
              <input
                type="date"
                className="mt-2 w-full p-2 border-b border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AB8E]"
              />
            </div>

            {/* Pick Up Time */}
            <div>
              <label className="text-sm text-black font-bold">PICK UP AT</label>
              <input
                type="time"
                className="mt-2 w-full p-2 border-b border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#00AB8E]"
              />
            </div>
          </form>

          {/* Submit Button */}
          <div className="flex justify-center items-center mt-4 mb-3">
            <button
              type="submit"
              className="w-full sm:w-60 h-10 bg-[#00AB8E] text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition-all duration-300"
            >
              EXPLORE VEHICLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

