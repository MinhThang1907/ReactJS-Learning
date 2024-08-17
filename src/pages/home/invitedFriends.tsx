// import { Table } from "antd";
import React from "react";
// import { invitedFriendsColumns } from "./columns/invitedFriends";

const InvitedFriends = () => {
  return (
    <div className="bg-[#FBF8F7] w-full flex flex-col justify-center items-center mt-14 mb-14">
      <div className="w-3/4">
        <h1 className="flex justify-start items-start text-2xl font-medium">
          Invited friends
        </h1>
        {/* <Table
          columns={invitedFriendsColumns}
          className="mt-5 border-2 border-[#EEC5E7] rounded-xl"
        /> */}
      </div>
    </div>
  );
};

export default InvitedFriends;
