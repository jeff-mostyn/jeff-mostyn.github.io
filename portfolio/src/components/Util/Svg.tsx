import React from "react";

import classNames from "classnames";
import { Sizes } from "./util"
import { linkedin_path, triangle_down_path, triangle_up_path } from "./svgPaths";

const iconsMap: Map<string, JSX.Element> = new Map<string, JSX.Element>([
  ["linkedin", linkedin_path],
  ["triangle_down", triangle_down_path],
  ["triangle_up", triangle_up_path]
])

const iconStyles = (baseColor: string, transition?: boolean, transitionColor?: string) => classNames(
  "",
  {
    "fill-white": baseColor === "white",
    "transition-colors duration-300 hover:fill-theme1": transition && transitionColor === "theme1",
  }
);

const sizeMap: Map<Sizes, string> = new Map<Sizes, string>([
  [Sizes.XS, "12px"],
  [Sizes.SM, "16px"],
  [Sizes.MD, "24px"],
  [Sizes.LG, "32px"],
  [Sizes.XL, "40px"]
])

type SvgProps = {
  name: string;
  size: Sizes;
  transition?: boolean;
  baseColor: string;
  transitionColor?: string;
}

export const SVG = ({ name, size, transition, baseColor, transitionColor }: SvgProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={sizeMap.get(size)} 
      height={sizeMap.get(size)} 
      viewBox="0 0 24 24"
      className={iconStyles(baseColor, transition ?? false, transitionColor ?? "")}
    >
      {iconsMap.get(name)}
    </svg>
  )
}