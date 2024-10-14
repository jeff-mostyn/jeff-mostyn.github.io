import classNames from "classnames";
import React from "react";

import { Roles, Sizes } from "./util";

const pillBadgeStyles = (role: string, size: string, showBorder?: boolean) => classNames('mx-1 px-2.5 py-0.5 my-1 font-urbanist rounded-md', {
  "px-2.5 py-0.5 my-1 text-sm": size === Sizes.SM,
  "px-2.5 py-0.5 my-1 text-base": size === Sizes.MD || size === Sizes.LG || size === Sizes.XL,
  "bg-[#e05865]": role === Roles.ANIMATION,
  "bg-[#54bf7a]": role === Roles.DESIGN,
  "bg-[#9454bf]": role === Roles.PROGRAMMING,
  "bg-[#d1905a]": role === Roles.TECH_ART,
  "bg-[#6734eb]": role === Roles.UI_PROGRAMMING,
  "bg-[#5abfd1]": role === Roles.UI_UX,
  "border-2 border-white": showBorder
})

type RoleBadgeProps = {
  role: string;
  size: string;
  showBorder?: boolean;
}

export const RoleBadge = ( { role, size, showBorder }: RoleBadgeProps) => {
  return (
    <div className={`${pillBadgeStyles(role, size, showBorder)}`}>
      {role}
    </div>
  )
}