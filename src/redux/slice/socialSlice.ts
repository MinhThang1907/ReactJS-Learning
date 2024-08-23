import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUserTask } from "@/types";
import { HomeAPI } from "@/services/homeService";

// Define a type for the slice state
export interface SocialState {
  taskUser: IUserTask;
  loadingTaskUser: boolean;
}

// Define the initial state using that type
const initialState: SocialState = {
  taskUser: {
    twitterUsername: "",
    telegramId: "",
    twitterId: "",
    discordId: "",
  },
  loadingTaskUser: false,
};

export const getTaskUser = createAsyncThunk(
  "getTaskUser",
  async (address: string, thunkAPI) => {
    const { social } = thunkAPI.getState() as RootState;
    try {
      const rq = await HomeAPI.getUserByAddress(address);
      return rq.msg;
    } catch (error) {
      return;
    }
  }
);

export const socialSlice = createSlice({
  name: "social",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTaskUser.pending, (state) => {
      state.loadingTaskUser = true;
    });
    builder.addCase(getTaskUser.fulfilled, (state, action) => {
      state.loadingTaskUser = false;
      state.taskUser = action.payload;
    });
    builder.addCase(getTaskUser.rejected, (state) => {
        state.loadingTaskUser = false;
    })
  },
});

export const {} = socialSlice.actions;

export default socialSlice.reducer;
