import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative mt-44 mb-40 h-[92vh] -mb-6 w-full overflow-hidden">
      {/* YouTube Video Background */}
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/0x5mf8BUJZY?autoplay=1&mute=1&loop=1&controls=0&playlist=0x5mf8BUJZY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-5xl font-bold">Hello World Welcome</h1>
        <p className="w-4/6 mx-auto leading-relaxed py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          reprehenderit officia labore quas eligendi blanditiis eos. Amet modi
          earum saepe provident, exercitationem quae praesentium rem ipsam a
          ratione tempora odio.
        </p>
        <button className="px-8 py-4 bg-indigo-500 text-white rounded-lg text-lg font-medium">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
