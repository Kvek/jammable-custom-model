import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type StepsTitleType = "configure" | "train" | "upload";

export interface StepsInterface {
  title: StepsTitleType;
  complete: boolean;
}

export interface StepsStateInterface {
  steps: StepsInterface[];
  currentCompletedStep: number;
  currentStep: number;
  allStepsComplete: boolean;
}

const initialState: StepsStateInterface = {
  allStepsComplete: false,
  currentCompletedStep: -1,
  currentStep: 0,
  steps: [
    { complete: false, title: "upload" },
    { complete: false, title: "configure" },
  ],
};

const stepsSlice = createSlice({
  initialState,
  name: "steps",
  reducers: {
    resetAllSteps: (state) => {
      state.allStepsComplete = false;
    },
    resetSteps: (state) => {
      state.steps = initialState.steps;
      state.currentCompletedStep = initialState.currentCompletedStep;
      state.currentStep = initialState.currentStep;
    },
    updateCurrentCompletedStep: (state, { payload }: PayloadAction<StepsInterface>) => {
      const index = state.steps.findIndex((s) => s.title === payload.title);
      state.currentCompletedStep = index;
      state.currentStep = index + 1;
    },
    updateStepsState: (state, { payload: { complete, title } }: PayloadAction<StepsInterface>) => {
      state.steps = state.steps.map((c) => (c.title === title ? { ...c, complete } : c));
      const currIndex = state.steps.findLastIndex((c) => c.complete);
      state.currentStep = currIndex === -1 ? 0 : currIndex;

      const allStepsComplete = currIndex === state.steps.length - 1;
      state.allStepsComplete = allStepsComplete;
    },
  },
});

const { actions, reducer } = stepsSlice;
export const { resetAllSteps, resetSteps, updateCurrentCompletedStep, updateStepsState } = actions;
export const steps = reducer;
