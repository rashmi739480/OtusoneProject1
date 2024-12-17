import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useRef } from "react";
const parastyles = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}
const About = () => {


  const [activeTab, setActiveTab] = useState("aboutUs");
  const [IsOpen, setIsOpen] = useState(false);
  const [showReadMoreBtn, setshowReadMoreBtn] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    // if we have ref.current thats null we will show this showReadMoreBtn when scrollheight is not equal to clientheight
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight)
      setshowReadMoreBtn(ref.current.scrollHeight !== ref.current.clientHeight)
    }
  }, [])

  // we need to calculate scrollheight vs the and client height so we will use useEffect
  // scrollHeight	Entire content height (visible + overflow)
  // clientHeight	Visible content height + padding 
  const tabsContent = {
    aboutUs: {
      image: "/public/Images/About.png",
      content: (
        <div className="">
          {/* <h1 className="text-black font-semibold">What do we provide?</h1> */}
          <p style={IsOpen ? null : parastyles} ref={ref}>
            Continental Rentals is a provider of convenient and reliable online taxi booking services. We specialize in offering a seamless transportation experience, connecting customers with professional drivers through our user-friendly platform. Whether you need a quick ride across town, airport transfers, or outstation travel, Continental Rentals ensures comfort, safety, and affordability. Our diverse fleet of vehicles caters to both individual and group travel needs. With 24/7 availability, transparent pricing, and excellent customer support, Continental Rentals is your go-to solution for hassle-free travel. Experience the future of transportation with Continental Rentals, where every journey is just a click away.
          </p>

        </div>
      ),
    },
    journey: {
      image: "/public/Images/Mission.png",
      content: (
        <div className="">
          {/* <h1 className="text-black font-semibold">Our Mission</h1> */}
          <p style={IsOpen ? null : parastyles} ref={ref}>
            At Continental, our mission is to make transportation accessible, comfortable, and affordable for all. We are dedicated to creating a seamless rental experience by continually expanding our fleet, refining our services, and listening to the feedback of those we serve.
          </p>
        </div>
      ),
    },
    team: {
      image: "/public/Images/Vision.png",
      content: (
        <div className="">
          {/* <h1 className="text-black font-semibold">Our Vision</h1> */}
          <p style={IsOpen ? null : parastyles} ref={ref}>
            We aim to become the go-to choice for vehicle rentals, recognized for our commitment to quality, innovation, and exceptional customer experience. By adapting to changing travel needs and advancing sustainable practices, we strive to set new standards in the industry.
          </p>
        </div>
      ),
    },
  };

  const { image, content } = tabsContent[activeTab];

  return (
    <>
      <section id="about">
        {/* Dynamic background image with black wrap and common heading */}
        <div className="relative">
          <div
            className=" bg-cover bg-center bg-no-repeat h-80 sm:h-[200px]  md:h-[250px]"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="bg-black opacity-50 inset-0 h-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white xsm text-3xl md:text-6xl z-10 font-extrabold ">About Us</h1>
            </div>
          </div>

          {/* Tabs Section */}

          <div className=" absolute left-[50%]  top-[201px] transform -translate-x-1/2  flex flex-col items-center  justify-center xsm:-mt-10 ">
            <div className="border xs:w-[360px] xs:mt-[52px] xl:w-[1014px] lg:mt-[2px] xsm:mt-[32px] sm:mt-1 h-auto xsm:px-5 border-black bg-white shadow-[0_3px_10px_#0003] rounded-xl md:w-[650px] xsm:w-[260px]  lg:w-[800px]    md:px-20  ">
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setActiveTab("aboutUs")}
                  className={`px-4 xsm:text-[0.7rem]  w-52 md:font-semibold ${activeTab === "aboutUs" ? "bg-[#00AB8E] text-white" : "border-gray-500 border text-[#B5B5B5]"
                    }`}
                >
                  ABOUT US
                </button>
                <button
                  onClick={() => setActiveTab("journey")}
                  className={`px-4 py-2 xsm:text-[0.7rem] w-52 md:font-semibold ${activeTab === "journey" ? "bg-[#00AB8E] text-white" : "border-gray-500 border-b border-t text-[#B5B5B5]"
                    }`}
                >
                  OUR MISSION
                </button>
                <button
                  onClick={() => setActiveTab("team")}
                  className={`px-4 py-2 w-52 xsm:text-[0.7rem] md:font-semibold ${activeTab === "team" ? "bg-[#00AB8E] text-white" : "border-gray-500 border text-[#B5B5B5]"
                    }`}
                >
                  OUR VISION
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-6 text-gray-700">{content}
                {showReadMoreBtn && (
                  // if showReadMoreBtn is true then blew functionalities will work

                  <button className="text-blue-500  underline" onClick={() => setIsOpen(!IsOpen)}>{IsOpen ? 'Read less' : 'Read more'}
                  </button>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="xsm:mt-[240px] sm:mt-[167px] md:mt-72 ">
        <Footer />
      </div>
    </>
  );
};

export default About;
