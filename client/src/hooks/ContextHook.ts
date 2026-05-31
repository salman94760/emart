import { useContext } from "react";

import { AppContext } from "../context/Context";

export const ContextHook = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvide");
  }
  return context;
};
