import Image from "next/image";
import React from "react";
// import logo from "../../../public/ig-logo.jpg";
import citizen from "../../../public/citizen.jpg";
import ielts from "../../../public/ielts.jpg";
import pte from "../../../public/pte.jpg";

const Training = () => {
  return (
    <div className="h-[1620px] lg:h-[700px]">
      <div className="relative h-full lg:px-20">
        <div className="w-full lg:w-[1350px] mx-auto  bg-gradient-to-b from-gray-300 via-[#f4f3f3] to-white absolute -top-16 left-0 right-0 p-5 lg:p-10 ">
          <p className="uppercase text-xs mb-3">training & certification</p>
          <h2 className="capitalize text-3xl lg:text-5xl font-semibold">
            get the immigration <br /> training you Deserve
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3  text-center mt-5">
            <div className="bg-base-100 shadow-xl m-5">
              <figure>
                <Image height={300} width={500} src={citizen} alt="images" />
              </figure>
              <div className="card-body">
                <h4 className="font-semibold text-2xl">Citizenship Test</h4>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered freedom alteration.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-neutral btn-circle">-&gt;</button>
                </div>
              </div>
            </div>
            <div className="bg-base-100 shadow-xl m-5">
              <figure>
                <Image height={300} width={500} src={ielts} alt="images" />
              </figure>
              <div className="card-body">
                <h4 className="font-semibold text-2xl">Take IELTS</h4>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered freedom alteration.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-neutral btn-circle">-&gt;</button>
                </div>
              </div>
            </div>
            <div className="bg-base-100 shadow-xl m-5">
              <figure>
                <Image height={300} width={500} src={pte} alt="images" />
              </figure>
              <div className="card-body">
                <h4 className="font-semibold text-2xl">PTE Coaching</h4>
                <p>
                  There are many variations of passages of available, but the
                  majority have suffered freedom alteration.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-neutral btn-circle">-&gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
