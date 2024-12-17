import React from "react";

const Features = () => {
  const features = [
    {
      title: "Clean and Hygienic Car",
      img: "public/Icons/img11.png",
    },
    {
      title: "Transparent Billing",
      img: "public/Icons/img10.png",
    },
    {
      title: "Expert Chauffeurs",
      img: "public/Icons/img8.png",
    },
    {
      title: "Multiple Cities",
      img: "public/Icons/img9.png",
    },
  ];

  return (
    <div className="text-black px-4 sm:px-6 py-8 rounded-md flex flex-col items-center xsm:mt-7 md:mt-14">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">
        What Sets Continental Traveler Apart?
      </h2>
      <div className="gap-6 bg-[#00AB8E] flex flex-wrap justify-center items-center rounded-2xl max-w-[90vw] sm:max-w-[1140px] p-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-3 text-white p-4 w-full sm:w-52"
          >
            <img src={feature.img} className="w-16 h-16 sm:w-20 sm:h-20" alt="" />
            <p className="font-semibold text-center sm:text-left text-sm sm:text-base">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
