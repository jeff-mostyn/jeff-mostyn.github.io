import classNames from "classnames";
import React from "react";

enum Roles {
  ANIMATION = "Animation",
  DESIGN = "Design",
  PROGRAMMING = "Programming",
  TECH_ART = "Tech Art",
  UI_UX = "UI/UX",
}

const pillBadgeStyles = (role: string) => classNames('mx-1 px-2.5 py-0.5 rounded-md', {
  "bg-[#e05865]": role === Roles.ANIMATION,
  "bg-[#54bf7a]": role === Roles.DESIGN,
  "bg-[#9454bf]": role === Roles.PROGRAMMING,
  "bg-[#d1905a]": role === Roles.TECH_ART,
  "bg-[#5abfd1]": role === Roles.UI_UX,
})

type RoleBadgeProps = {
  role: string;
}

export const RoleBadge = ( { role }: RoleBadgeProps) => {
  return (
    <div className={pillBadgeStyles(role)}>
      {role}
    </div>
  )
}