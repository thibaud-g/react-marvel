import React from "react";
import AnimatedPage from "./AnimatedPage";
export default function Grid({ children }) {
  return <AnimatedPage><div className="grid">{children}</div></AnimatedPage>;
}
