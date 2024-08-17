import React from "react";
import Xwhite from "../../assets/logos/Xwhite.svg";

export const Footer = () => {
  return (
    <div className="bg-[##FBF8F7] h-16 w-11/12 mx-auto flex items-center justify-center">
      <div className="w-1/3">
        <img src={Xwhite} alt="X white" />
      </div>
      <div className="w-1/3 text-center">© 2024 Tapos</div>
      <div className="flex gap-3 w-1/3 justify-end">
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  );
};
