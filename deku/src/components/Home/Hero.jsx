import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full z-0 object-cover" 
      >
        <source src="https://videos.pexels.com/video-files/6893778/6893778-hd_1920_1080_25fps.mp4" type="video/mp4" />
      
      </video>
      <div className="relative z-10 flex flex-col justify-center items-center h-screen">
        <h1 className="text-white text-5xl lg:text-8xl font-bold text-center">
          Donate<span className="text-orange-600">Us</span>
        </h1>
        <h3 className="text-white text-lg lg:text-xl font-medium text-center mt-4">
        Transforming Goodwill into Tangible Impact
        </h3>
      </div>
    </div>
  );
};

export default Hero;
