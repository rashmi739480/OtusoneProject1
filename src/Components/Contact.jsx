import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
  

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        vehicleNumber: '',
        rcFile: null,
        vendorPhoto: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const handleFileChange = (e) => {
          const { name, files } = e.target;
          setFormData((prevState) => ({
            ...prevState,
            [name]: files[0],
          }));
        };
        const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
        };
  return (
    <div>
       <>
       <Header/>
    
       <div className="relative bg-[url('/public/Images/Contact.png')] bg-cover bg-center bg-no-repeat  h-80 sm:h-[200px]  md:h-[250px] md:-mt-[52px] xsm:-mt-[127px]">
        <div className='bg-black opacity-50 absolute inset-0'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='text-white text-3xl md:text-6xl z-10 font-extrabold'>Contact Us</h1>
        </div>
        <div className='flex flex-col items-center justify-center xsm:mt-32  md:mt-[52px]'>
        <div className='py-3 border    xsm:px-5 border-black bg-white shadow-[0_3px_10px_#0003] rounded-xl w-[80%]  md:mt-[599px] sm:mt-[550px]  absolute xs:mt-[780px] md:px-20 xsm:mt-[855px] md:h-72 xsm:h-auto'>
          <div className='mt-6 text-gray-700'> 
          <h1 className='font-semibold text-black mt-8 ml-5'>Feel Free to
          Knock Us!</h1>
          <p className='ml-5 mr-5 mt-2 text-gray-700'>
          At Continental Rentals, we believe in fostering strong and open communication with our customers. Whether you're looking for a quick ride across town, planning a long-distance trip, or have questions about our services, we are here to assist you every step of the way. Your convenience, comfort, and satisfaction are at the heart of everything we do, and we encourage you to reach out with any inquiries, concerns, or feedback.
            
          </p>
          </div>
        </div></div>
      </div>
     
      <div className="xsm:mt-80 sm:mt-44  w-full mx-auto px-8 flex flex-col md:flex-row justify-center items-center lg:gap-10 md:gap-8 xsm:gap-5">
      <div className="w-[90%] md:w-[50%] mx-auto flex justify-center items-center h-[500px] xsm:mt-20 md:mt-10">
        <form className="w-full font-poppins" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block text-gray-600 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border bg-[#F8F8F8] border-[#DDDDDD]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-600 mb-1">Mobile Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border bg-[#F8F8F8] border-[#DDDDDD]"
                placeholder="Enter mobile number"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-600 mb-1">Vehicle Number</label>
              <input
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                className="w-full p-3 border bg-[#F8F8F8] border-[#DDDDDD]"
                placeholder="Enter vehicle number"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-600 mb-1">RC Upload</label>
              <input
                type="file"
                name="rcFile"
                onChange={handleFileChange}
                className="w-full p-3 border bg-[#F8F8F8] border-[#DDDDDD]"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-600 mb-1">Vendor Photo Upload</label>
              <input
                type="file"
                name="vendorPhoto"
                onChange={handleFileChange}
                className="w-full p-3 border bg-[#F8F8F8] border-[#DDDDDD]"
                required
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <button type="submit" className="w-fit mt-6 p-3 bg-[#00AB8E] text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-[80%] md:w-[30%] flex justify-center items-center">
        <img
          src="/public/Images/Our Vision.jpg"
          alt="Our Vision"
          className="h-72 w-full object-center object-contain rounded-md"
        />
      </div>
    </div>
      <div className="mt-0">
        <Footer/>
      </div>
    </>
    </div>
  )
}


export default Contact
