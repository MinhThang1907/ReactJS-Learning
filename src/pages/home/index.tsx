import React, { useEffect } from "react";
import SocialTasks from "./socialTasks";
import ReferralCampaign from "./referralCampaign";
import InvitedFriends from "./invitedFriends";
import Footprint from "../../assets/icons/footprint.svg";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { Button } from "antd";
import { decrement, increment } from "@/redux/slice/homeSlice";
import { getTaskUser } from "@/redux/slice/socialSlice";

const Home = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTaskUser("minhthang"));
  }, [])

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
      {value}
      <Button onClick={() => dispatch(increment())}>Cộng</Button>
      <Button onClick={() => dispatch(decrement())}>Trừ</Button>
    </div>
  );
};

export default Home;
