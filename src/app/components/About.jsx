import React from "react";
import Image from "next/image";
import providingVisa from "../../../public/providing-visa.jpg";
import { FaStar } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const About = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 my-12">
      <div className="flex justify-end">
        <Image
          className="rounded-full border-8 border-[#fbea07] rounded-ee-none "
          src={providingVisa}
          height={500}
          width={500}
          alt="About our Service"
        />
      </div>
      <div>
        <p className="uppercase text-xs mb-3">training & certification</p>
        <h2 className="capitalize text-3xl lg:text-5xl font-semibold">
          Providing the Best Visa <br /> Services to Clients
        </h2>
        <p className="my-3">
          There are many variations of passages of available but the majority
          have suffered alteration in some form, by injected hum randomised
          words which do not simply free text now slightly.
        </p>
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-3">
            <div className="bg-[#fbea07] p-2">
              <FaStar></FaStar>
            </div>
            <p>
              Ready to Help You <br /> in Immigration
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#fbea07] p-2">
              <FaStar></FaStar>
            </div>
            <p>
              Works Fast & We are
              <br /> Cost Effective
            </p>
          </div>
        </div>
        <div className="mt-5 font-semibold flex justify-between lg:w-[75%]" >
        <p>Construction</p>
          <p>88%</p>
        </div>
          <progress
            className="progress bg-[#fbea07] lg:w-[75%]"
            value="88"
            max="100"
          ></progress>
          <div className="mt-5 flex gap-5 items-center">
            <button className="btn-yellow">Discover More</button>
            <div className="flex gap-4 items-center">
              <BiPhoneCall className="text-2xl"></BiPhoneCall>
              <p>Have Question? <br /> Free +92 ### ####</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
