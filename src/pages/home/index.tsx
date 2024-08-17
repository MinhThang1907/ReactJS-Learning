import React from "react";
import SocialTasks from "./socialTasks";
import ReferralCampaign from "./referralCampaign";
import InvitedFriends from "./invitedFriends";
import Footprint from "../../assets/icons/footprint.svg";

const Home = () => {
  return (
    <div className="relative">
      <img src={Footprint} alt="Footprint" className="absolute right-52" />
      <img
        src={Footprint}
        alt="Footprint"
        className="absolute right-32 top-5 -rotate-45"
      />
      <img
        src={Footprint}
        alt="Footprint"
        className="absolute right-28 top-24 -rotate-12"
      />
      <img
        src={Footprint}
        alt="Footprint"
        className="absolute right-7 top-28 -rotate-[30deg]"
      />
      <SocialTasks />
      <ReferralCampaign />
      <InvitedFriends />
    </div>
  );
};

export default Home;
