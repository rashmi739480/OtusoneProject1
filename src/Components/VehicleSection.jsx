import React from 'react';

const vehicles = [
  {
    name: "Bus",
    image: "public/Images/Car3.png",
    buttonText: "Enquiry now",
  },
  {
    name: "Tempo Traveler",
    image: "public/Images/Car2.png",
    buttonText: "Enquiry now",
  },
  {
    name: "Car",
    image: "public/Images/Car1.png",
    buttonText: "Enquiry now",
  },
];

const VehicleSection = () => {
  return (
    <section className="xsm:mt-8 md:mt-24">
      <div className="text-center">
        <h1 className="text-black text-2xl sm:text-4xl md:text-5xl font-medium">
          Choose Your Suitable Vehicle
        </h1>
        <p className="mt-3 text-base leading-6 text-gray-600">
          We present popular cars that are rented by customers to maximize your comfort on long trips.
        </p>
      </div>

      <div className="flex flex-wrap mt-6 gap-8 justify-center items-center">
        {vehicles?.map((data, index) => (
          <div
            key={index}
            className="w-full sm:w-[398px] h-[428px] flex flex-col items-center bg-white shadow-lg rounded-lg p-4"
          >
            <div className="w-full h-[60%] bg-[#D9D9D9] flex justify-center items-center rounded-lg">
              <img className="w-80 h-40 object-contain" src={data.image} alt={data.name} />
            </div>
            <div className="ml-4 mt-4 flex flex-col">
              <p className="text-[26px] font-medium text-black">{data.name}</p>
              <button className="mt-4 w-64 sm:w-80 h-16 bg-[#00AB8E] text-white rounded-lg">
                {data.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VehicleSection;

