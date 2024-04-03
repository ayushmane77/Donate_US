import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8 h-screen content-center ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold">About Us</h2>
          <p className="mt-4 text-lg">
            We are an organization aims to reduce the wastage of stuffs.we have seen that lots of items were dumped in dustbins or thrown away as a waste.<br/> But is it really a waste ??. <br/> we don't think so ,because the things you consider as a waste maybe the reason of smile, a reason of happiness for someone.<br/> That's why we provide you the facility to donate your unnecessary items so that it will be helpful to bring a smile on someone's face.

          </p>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-90 transition duration-300"
            />
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold">Our Website</h3>
                <p className="mt-2">
                  A brief description about our website and organization.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
