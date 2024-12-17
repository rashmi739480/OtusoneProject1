import React from 'react'
const traveler = [
    {
      id: 1,
      title: "Tata Urbania EV",
      image: "public/Images/force-urbania.avif", // Replace with your image URL
      link: "#",
      kms: "28,471 kms",
      fuel: "Diesel",
      transmission: "5Seater",
      price: "₹20 Lakh",
      distance: "34.5 kms away",
      location: "Sector 21e, Gurgaon",
    },
    {
      id: 2,
      title: "Hyundai Urban EV",
      image: "public/Images/Urban.jpeg", // Replace with your image URL
      link: "#",
      kms: "30,000 kms",
      fuel: "Petrol",
      transmission: "5Seater",
      price: "₹20 Lakh",
      distance: "28 kms away",
      location: "Sector 18, Noida",
    },
    {
      id: 3,
      title: "Chevrolet Urban Express",
      image: "public/Images/Express.jpeg", // Replace with your image URL
      link: "#",
      kms: "20,000 kms",
      fuel: "Diesel",
      transmission: "8Seater",
      price: "₹8 Lakh",
      distance: "20 kms away",
      location: "Cyber Hub, Gurgaon",
    },
    {
      id: 4,
      title: "Honda Urban SUV",
      image: "public/Images/HOndasuv.jpg", // Replace with your image URL
      link: "#",
      kms: "35,000 kms",
      fuel: "Diesel",
      transmission: "4Seater",
      price: "₹20Lakh",
      distance: "25 kms away",
      location: "Connaught Place, Delhi",
    },
    {
      id: 5,
      title: "Mercedes-Benz EQB Urban SUV",
      image: "public/Images/mercedes.jpg", // Replace with your image URL
      link: "#",
      kms: "15,000 kms",
      fuel: "Petrol",
      transmission: "7Seater",
      price: "₹70 Lakh",
      distance: "18 kms away",
      location: "DLF Phase 1, Gurgaon",
    },
    {
      id: 6,
      title: "Ford Urban Cross",
      image: "public/Images/ford.jpg", // Replace with your image URL
      link: "#",
      kms: "10,000 kms",
      fuel: "Diesel",
      transmission: "5 Seater",
      price: "₹10 lakh",
      distance: "40 kms away",
      location: "Sector 62, Noida",
    },
  ];
const Urbania = () => {
  return (
    <div>
          <div>
        <div className="relative bg-[url('/public/Images/Footer.jpeg')] bg-cover bg-center bg-no-repeat  h-80 sm:h-[200px]  md:h-[250px] md:-mt-[32x] xsm:-mt-[1px]">
        <div className='bg-black opacity-50 absolute inset-0'></div>


      </div>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Luxury Urbania Listings
        </h1>
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {traveler.map((traveler) => (
            <div
              key={traveler.id}
              className="max-w-sm border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={traveler.image}
                  alt={traveler.title}
                  className="w-full h-48 object-cover"
                />

              </div>

              {/* Content Section */}
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  {traveler.title}
                </h2>

                <p className="text-gray-500 text-sm mb-2">
                  {traveler.kms} • {traveler.fuel} • {traveler.transmission}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-800">
                    {traveler.price}
                  </span>
                

                </div>
              <div className='flex justify-between'>
                <p className="text-xs text-gray-500 mt-2">
                  {traveler.distance} • {traveler.location}
                </p>
                <button className="text-white text-[14px] bg-[#00AB8E] font-normal rounded h-6 w-28  ">
                  Enquiry Now
                </button></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>  
    </div>
  )
}

export default Urbania
