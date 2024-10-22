import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { FeedbackSliceInitialState } from "./types"

const feedbackInitialState: FeedbackSliceInitialState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    like: create.reducer((state: FeedbackSliceInitialState) => {
      state.likes = state.likes + 1
    }),
    dislike: create.reducer((state: FeedbackSliceInitialState) => {
      state.dislikes = state.dislikes + 1
    }),
    resetResult: create.reducer((state: FeedbackSliceInitialState) => {
      state.likes = 0
      state.dislikes = 0
    }),
  }),
  selectors: {
    like: (state: FeedbackSliceInitialState) => {
      return state.likes
    },
    dislike: (state: FeedbackSliceInitialState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
