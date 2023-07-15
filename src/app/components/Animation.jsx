"use client"

import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import flightAnimation from "../../../public/flightAnimation.json"

const Animation = () => {
  return (
    <div className="mt-12 container mx-auto">
      <Player
        autoplay
        loop
        src={flightAnimation}
        className="w-full"
      >
      </Player>
    </div>
  );
};

export default Animation;
