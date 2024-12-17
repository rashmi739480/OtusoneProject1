import React from "react";

const DestinationList = () => {
  const cardData = [
    {
      from: "Delhi",
      to: "Agra, Jaipur, Dehradun, Haridwar, Chandigarh",
      image: "/public/Images/Delhi.png",
    },
    {
      from: "Pune",
      to: "Mumbai, Shirdi, Mahabaleshwar, Nasik, Aurangabad",
      image: "/public/Images/Pune.png",
    },
    {
      from: "Bangalore",
      to: "Ooty, Madikeri, Coorg, Vellore",
      image: "/public/Images/Banglore.png",
    },
    {
      from: "Agra",
      to: "New Delhi, Gurgaon, Noida, Faridabad, Ghaziabad",
      image: "/public/Images/Agra.png",
    },
    {
      from: "Mumbai",
      to: "Pune, Nasik, Shirdi, Lonavala, Mahabaleshwar",
      image: "/public/Images/Mumbai.png",
    },
    {
      from: "Chennai",
      to: "Vellore, Pondicherry, Bangalore, Tirupati",
      image: "/public/Images/Chennai.png",
    },
    {
      from: "Jaipur",
      to: "New Delhi, Gurgaon, Noida, Faridabad, Ghaziabad",
      image: "/public/Images/Jaipur.png",
    },
    {
      from: "Chandigarh",
      to: "New Delhi, Shimla, Manali, Gurgaon, Noida",
      image: "/public/Images/Chandigarh.png",
    },
    {
      from: "Dehradun",
      to: "Mussoorie, New Delhi, Gurgaon, Noida, Faridabad",
      image: "/public/Images/Dehradun.png",
    },
  ];

  return ( 
    <section className="xsm:w-[90vw] xsm:mx-auto xsm:mt-[13rem]  mt-40 sm:mt-44 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex-shrink-0">
            <img
              src={data.image}
              alt={`Image of ${data.from}`}
              className="rounded-full w-14 h-14 object-cover"
            />
          </div>
          <div className="ml-4">
            <h1 className="font-bold text-lg text-gray-800">From {data.from} To</h1>
            <p className="text-sm text-gray-600">{data.to}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DestinationList;

