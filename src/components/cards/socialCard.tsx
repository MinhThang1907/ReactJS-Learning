import React from "react";
import Heart from "@/assets/logos/heart.svg";
import Ball from "@/assets/logos/ball.svg";
import Paw from "@/assets/logos/paw.svg";
import Fishbone from "@/assets/logos/fishbone.svg";
import { DefaultButton } from "../buttons";

interface SocialCardProps {
  logo?: string;
  title?: string;
  shortDescription?: string;
}

const SocialCard = ({ logo, title, shortDescription }: SocialCardProps) => {
  return (
    <div className="relative h-72 w-80 border-[2px] border-[#EEC5C7] bg-[#FFFFFF] rounded-3xl flex flex-col items-start justify-center px-6">
      <img src={Paw} alt="Paw" className="absolute right-[6px] top-[6px]" />
      <img
        src={Ball}
        alt="Ball"
        className=" absolute right-[65px] top-[15px]"
      />
      <img
        src={Fishbone}
        alt="Fishbone"
        className=" absolute right-[5px] top-[65px]"
      />
      <img src={logo} alt="logo" className="mb-5" />
      <h5 className=" text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal mb-10 text-gray-700 text-sm">
        {shortDescription}
      </p>
      <div className="flex gap-5">
        <DefaultButton className="inline-flex gap-2 items-center px-5 py-2 text-sm font-medium text-center text-black bg-[#F5EEEC] rounded-full hover:text-white border-none focus:outline-none">
          <span>+20</span>
          <img src={Heart} alt="Heart" />
        </DefaultButton>
        <DefaultButton className="inline-flex gap-2 items-center px-14 py-2 text-sm font-medium text-center text-[#b0b9c5] rounded-full border-[2px] border-[#b0b9c5] bg-white focus:outline-none">
          Follow
        </DefaultButton>
      </div>
    </div>
  );
};

export { SocialCard };
