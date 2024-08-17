import { DefaultButton } from "@/components/buttons";
import { DefaultInput } from "@/components/inputs";
import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const ReferralCampaign = () => {
  return (
    <div className="bg-[#FBF8F7] w-full flex flex-col justify-center items-center mt-14">
      <div className="text-5xl font-bold py-5">Referral Campaign</div>
      <div className="py-3 text-[#6B6B6B] font-medium">
        Share your referral link to earn extra points
      </div>
      <div className="w-3/4 h-48 bg-[#FFFFFF] border-2 border-[#EEC5C7] rounded-xl">
        <div className="pl-5 bg-[#FFFFFF] rounded-xl">
          <div className="text-2xl py-5">Enter Referral Code</div>
          <div className="text-[#5A5A5A] font-medium">
            Please enter referral code to earn extra points
          </div>
          <div>
            <Link to="/#" className="text-[#0D88D8] hover:underline">
              Learn more <RightOutlined />
            </Link>
          </div>
          <div className="mt-3 flex justify-between h-12">
            <div className="w-96 relative h-10 top-1 bottom-1">
              <DefaultInput
                placeHolder="Enter referral code"
                className="border-2 border-[#D0D5DD] rounded-full px-4 h-full hover:bg-[#f5f7fa] focus:outline-none w-full absolute top-0"
              />
              <DefaultButton className="absolute bg-[#09AE7D] text-[#FFFFFF] w-28 rounded-full top-1 bottom-1 right-1">
                Go
              </DefaultButton>
            </div>
            <div className="pr-5">
              <DefaultButton className="bg-[#CA5C3B] w-52 h-12 rounded-full text-[#FFFFFF]">
                Invite Your Friends
              </DefaultButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralCampaign;
