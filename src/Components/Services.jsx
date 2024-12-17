import React from "react";

const services = [
  {
    title: "Roundtrip Cabs",
    description:
      "Our premium roundtrip services will pamper you with an absolutely comfortable drive from your doorstep & back. Our chauffeurs are not only courteous but also expert travel companions that will make your road travel memorable. .",
    features: ["Expert Chauffeurs", "Safety Certified", "Multiple Routes"],
    image: "./public/Images/c1.png",
    icon: "./public/Icons/Img8.png",
  },
  {
    title: "Oneway Drops",
    description:
      "Our network of over 15 lakh one-way routes ensures that there is no corner of the country that you can’t travel with us. Pay only one side charge at rock bottom rates. If you need to be somewhere, we’ll get you there.",
    features: ["15 Lakh Routes", "Lowest Fares", "All Inclusive Prices"],
    image: "./public/Images/c2.png",
    icon: "./public/Icons/Img7.png",
  },
  {
    title: "Local Rentals",
    description:
      "Book our flexible hourly rental cabs and get chauffeured within the city for your business meetings or shopping chores. Our local rentals are available for 4 hours, 8 hours or 12 hours, based on your needs. Explore your city like a local.",
    features: ["Flexible Packages", "Cab At Your Disposal", "Multiple Stops"],
    image: "./public/Images/c3.png",
    icon: "./public/Icons/Img2.png",
  },
  {
    title: "Airport Transfers",
    description:
      "We care about your flight as much as you do. Our airport transfer services across airports in the country offer pickups and drops with complete reliability. Book in advance and rest easy - we will take care of the rest.",
    features: ["Reliability Guaranteed", "Lowest Fares", "Courteous Chauffeurs"],
    image: "./public/Images/c4.png",
    icon: "./public/Icons/Img6.png",
  },
];

const Services = () => {
  return (
    <div className="mt-0 bg-gray-100 w-full py-10 px-4 md:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold mb-5 text-black">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p- flex flex-col justify-between flex-grow">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {service.title}
                </h3>
              </div>
              <p className="text-[#393939] text-sm h-24 overflow-hidden">{service.description}</p>
              <ul className="flex justify-center gap-5 mt-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-center w-20">
                    <div className="w-14 h-14 flex items-center justify-center mx-auto">
                      <img
                      
                        src={service.icon}
                        className="w-10 h-10 bg-contain bg-center"
                        alt={feature}
                      />
                    </div>
                    <span className="mt-2 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
