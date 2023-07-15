"use client";
import Image from "next/image";
import {useState} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import citizen from "../../../public/citizen.jpg";
import CountriesData from "../hooks/CountriesData";

const Countries = () => {
  const countries = CountriesData()

  console.log(countries)

  return (
    <div
      style={{
        backgroundImage:
          "url(https://www.visafirst.com/blog/wp-content/uploads/2021/03/visa-application-form.jpg)",
        backgroundBlendMode: "multiply",
      }}
      className=" bg-yellow-600 bg-cover w-full text-white p-10 lg:p-20"
    >
      <div className="container mx-auto text-white text-center">
          <p className="uppercase text-xs mb-3"> <span className="font-bold text-[#fbea07] pl-2">| </span>
          Countries we offer
        </p>
        <h2 className="capitalize text-3xl lg:text-5xl font-semibold">
          select the country of <br /> your choice
        </h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-6 lg:mt-12"
        >
          {countries?.slice(0,10).map(country => <SwiperSlide style={{backgroundColor: "none"}} key={country.area}>
            <figure className="w-32 h-32 border-4 mx-auto relative">
              <Image className="rounded-full absolute -top-6" height={300} width={300} src={country.flags.png} alt="images" />
            </figure>
          </SwiperSlide>)}
          
        </Swiper>
      </div>
    </div>
  );
};

export default Countries;
