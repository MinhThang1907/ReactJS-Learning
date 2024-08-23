import { request } from "@/common/config/request.js";

export const HomeAPI = {
  getUserByAddress: async (address: string) => {
    const response = await request.get(`/api/v1/user?address=${address}`);
    return response.data;
  },
};
