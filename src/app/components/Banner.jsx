import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div
          id="slide1"
          style={{
            backgroundImage:
              "url(https://flyone.eu/media/c4fe56b0-c33a-4bd2-a981-404ffff2c7be/W4ZrxA/images/other%20pages/resize-passport-details-867x317.jpg)", backgroundBlendMode: 'multiply'
          }}
          className=" bg-gray-500 carousel-item relative bg-cover w-full h-[60vh] lg:h-[80vh] hero"
        ><div className="hero-content text-center text-white flex flex-col">
            <p className="text-xs lg:text-base">Solution for all type of visas</p>
            <h1 className="font-bold text-4xl lg:text-7xl  uppercase">Apply for visa <br /> Immigration</h1>
            <button className="btn-yellow">Explore More</button>
        </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-neutral btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-neutral btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" style={{
            backgroundImage:
              "url(https://media.gettyimages.com/id/959527164/photo/man-holding-passport-and-boarding-pass-at-airline-check-in-counter.jpg?s=1024x1024&w=gi&k=20&c=dK2ojq8J2_smBFBjySHPxLVHlLy4y_-pg3P6jhTg5vI=)", backgroundBlendMode: 'multiply'
            }}
            className=" bg-gray-500 carousel-item relative bg-cover w-full h-[60vh] lg:h-[80vh] hero"
          ><div className="hero-content text-center text-white flex flex-col">
              <p className="text-xs lg:text-base">Solution for all type of visas</p>
              <h1 className="font-bold text-4xl lg:text-7xl  uppercase">planning to <br /> studying abroad</h1>
              <button className="btn-yellow">Explore More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-neutral btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-neutral btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" style={{
            backgroundImage:
              "url(https://thepointsguy.global.ssl.fastly.net/us/originals/2020/02/Passport_spencer-davis-unsplash.jpg)", backgroundBlendMode: 'multiply'
            }}
            className=" bg-gray-500 carousel-item relative bg-cover w-full h-[60vh] lg:h-[80vh] hero"
          ><div className="hero-content text-center text-white flex flex-col">
              <p className="text-xs lg:text-base">Solution for all type of visas</p>
              <h1 className="font-bold text-4xl lg:text-7xl  uppercase">Most trusted <br /> agency</h1>
              <button className="btn-yellow">Explore More</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-neutral btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-neutral btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
