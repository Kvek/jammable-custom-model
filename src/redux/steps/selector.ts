import type { ReduxStateType } from "@redux/store";

import type { StepsInterface, StepsStateInterface } from "./slice";

export const selectCurrentStepsState = ({ steps: { steps } }: ReduxStateType): StepsInterface[] => steps;

export const selectStepsState = ({ steps: state }: ReduxStateType): StepsStateInterface => state;

export const selectCurrentCompletedStepState = ({ steps: { currentCompletedStep } }: ReduxStateType): number =>
  currentCompletedStep;
