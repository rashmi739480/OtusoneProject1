import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const savari = [
  {
    id: 1,
    title: "Tempo Traveler ",
    description: "Spacious and comfortable travel for large groups.",
    image: "public/Images/Tra.avif",
    link: "/tempo",
  },
  {
    id: 2,
    title: "Bus ",
    description: "Ideal for school trips, tours, and events.",
    image: "public/Images/B.avif",
    link: "/bus",
  },
  {
    id: 3,
    title: "Car ",
    description: "Luxury and compact cars for comfortable rides.",
    image: "public/Images/CAR.avif",
    link: "/car",
  },
  {
    id: 4,
    title: "Urbania ",
    description: "Premium vans perfect for business and travel.",
    image: "public/Images/urbania.jpg",
    link: "/urbania",
  },
];

const ServicePage = () => {
  return (
    <>
      <div className="relative bg-[url('/public/Images/serviceImage.jpeg')] bg-cover bg-center bg-no-repeat  h-80 sm:h-[200px]  md:h-[250px] md:-mt-[52px] xsm:-mt-[127px]">
        <div className='bg-black opacity-50 absolute inset-0'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='text-white text-3xl md:text-6xl z-10 font-extrabold'>Services</h1>
        </div>
        <div className='flex flex-col items-center justify-center xsm:mt-32  md:mt-[52px]'>
          <div className='py-3 border   xsm:px-5 border-black bg-white shadow-[0_3px_10px_#0003] rounded-xl w-[80%]  md:mt-[639px] sm:mt-[550px]  absolute xs:mt-[848px] md:px-20 xsm:mt-[974px] md:h-80 xsm:h-auto'>
            <h1 className='font-semibold mt-8 ml-5'>Travel Made Easy with Our Comprehensive Services</h1>
            <p className='ml-5 mr-5 mt-2 text-gray-700'>
              We offer a range of reliable and efficient transportation solutions tailored to your needs. Whether you're planning a group trip with our traveler services, commuting with our well-maintained bus fleet, exploring city life with Urbania  premium urban transport, or booking a quick ride with our on-demand taxi services, we ensure comfort, safety, and convenience every step of the way.
              <br /><br />
              Choose us for seamless and stress-free travel experiences!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen xsm:mt-[484px] xs:mt-[340px]  flex items-center md:mt-20 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {savari.map((savari) => (
          <div
            key={savari.id}
            className="max-w-72 bg-white rounded-lg shadow-2xl "
          >
            <img
              src={savari.image}
              alt={savari.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
             <div className='h-24'> <h3 className="text-lg font-bold text-gray-800 mb-2">
                {savari.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{savari.description}</p></div>
             <Link to={savari.link}
                className="text-blue-500  underline font-semibold "
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default ServicePage;
