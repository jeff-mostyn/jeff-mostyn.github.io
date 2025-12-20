import classNames from "classnames";
import { Header } from "./portfolioSegmentTypes";

export const headingStyles = ({alignment, size}: Header) => classNames(
  "text-white",
  {
    "py-6 text-3xl md:text-5xl": size === '1',
    "py-4 text-2xl md:text-4xl": size === '2',
    "py-3 text-xl md:text-3xl": size === '3',
    "py-2 text-xl md:text-2xl": size === '4',
    "text-left": alignment === 'left',
    "text-center": alignment === 'center',
    "text-right": alignment === 'right',
  }
)