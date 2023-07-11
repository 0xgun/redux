import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "jack Joel" },
  { id: "2", name: "Sam Jam" },
  { id: "3", name: "Neo X" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
