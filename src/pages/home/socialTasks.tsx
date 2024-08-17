import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { DefaultButton } from "@/components/buttons";
import React, { useState } from "react";
import { SocialCard } from "@/components/cards";
import XLogo from "@/assets/logos/Xblack.svg";
import DiscordLogo from "@/assets/logos/discord.svg";

const SocialTasks = () => {
  const [isClickConnect, setIsClickConnect] = useState<boolean>(false);
  const socialTasks = [
    {
      id: 1,
      logo: XLogo,
      title: "Follow Tapos X",
      shortDescription: "Follow Tapos X to earn Points",
    },
    {
      id: 2,
      logo: XLogo,
      title: "Retweet post on X",
      shortDescription: "Retweet Tapos post on X to earn Points",
    },
    {
      id: 3,
      logo: DiscordLogo,
      title: "Join VibrantX Discord",
      shortDescription: "Retweet a daily tweet to earn HEART",
    },
  ];

  return (
    <div className="bg-[#FBF8F7] w-full flex flex-col justify-center items-center mt-14">
      <div className="text-5xl font-bold py-5">Social Tasks</div>
      <div className="py-3 text-[#6B6B6B] font-medium">
        Complete the Social Tasks to earn extra $Heart token
      </div>
      <div className="w-3/4 h-48 bg-[#FFFFFF] border-2 border-[#EEC5C7] rounded-xl">
        <div className="pl-5 bg-[#FFFFFF] rounded-xl">
          <div className="text-2xl py-5">Connect Your X account</div>
          <div className="text-[#5A5A5A] font-medium">
            You need connect your X account to join Social Task
          </div>
          <div>
            <Link to="/#" className="text-[#0D88D8] hover:underline">
              Learn more <RightOutlined />
            </Link>
          </div>
          <div className="pt-3">
            <DefaultButton
              loading={isClickConnect}
              className="bg-[#CA5C3B] text-[#FFFFFF] rounded-full px-7 py-3 font-medium hover:bg-[#a0492f] cursor-pointer"
              onClick={() => setIsClickConnect(true)}
            >
              Connect your X account
            </DefaultButton>
          </div>
        </div>
      </div>
      <div className="flex w-3/4 gap-2 my-3 justify-end items-end">
        <DefaultButton className="bg-[#FFFFFF] hover:bg-[#ffe3e4] text-[#EEC5C7] hover:text-[#FFFFFF] rounded-3xl border-2 border-[#EEC5C7] w-14 h-10">
          <LeftOutlined />
        </DefaultButton>
        <DefaultButton className="bg-[#FFFFFF] hover:bg-[#ffe3e4] text-[#EEC5C7] hover:text-[#FFFFFF] rounded-3xl border-2 border-[#EEC5C7] w-14 h-10">
          <RightOutlined />
        </DefaultButton>
      </div>
      <div className="w-3/4 flex justify-between">
        {socialTasks.map((task) => (
          <SocialCard
            key={task.id}
            logo={task.logo}
            title={task.title}
            shortDescription={task.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialTasks;
