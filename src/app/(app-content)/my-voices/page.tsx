"use client";
import { type FC, useEffect } from "react";

import { resetAllSteps } from "@redux/steps/slice";
import { useAppDispatch } from "@redux/store";

const Page: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetAllSteps());
  }, []);

  return <div className="">my voices page</div>;
};

export default Page;
