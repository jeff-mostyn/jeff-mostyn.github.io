import React from "react";

import triangle_down from '../../media/triangle_down.svg';
import triangle_up from '../../media/triangle_up.svg';
import classNames from "classnames";
import { Sizes } from "./util";

const iconsMap: Map<string, string> = new Map<string, string>([
  ["triangle_down", triangle_down],
  ["triangle_up", triangle_up]
])

const iconStyles = (size: string) => classNames(
  "",
  {
    "h-3 w-3": size == Sizes.SM,
    "h-4 w-4": size == Sizes.MD,
    "h-6 w-6": size == Sizes.LG,
    "h-8 w-8": size == Sizes.XL,
  }
);

type SvgProps = {
  name: string;
  size: string;
}

export const SVG = ({ name, size }: SvgProps) => {
  return (
    <img className={iconStyles(size)} src={iconsMap.get(name)} alt="" />
  )
}