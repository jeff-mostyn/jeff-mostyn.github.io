import React from "react";
import { NavLink } from "react-router-dom";

export enum ButtonType {
  STANDARD = "STANDARD",
  NAV_LINK = 'NAV_LINK'
}

type ButtonProps = {
  type: ButtonType;
  label: string;
  path?: string;
}

export const Button = ( { type, label, path } : ButtonProps) => {
  return (
    <div className="flex text-white border-2 border-white rounded-md items-center justify-center cursor-pointer">
      <div className=" px-8 py-2">
        { type === ButtonType.NAV_LINK ?
            <NavLink to="/Portfolio/SonsOfRa">
              {label}
            </NavLink>
            : <button />
        }
      </div>
    </div>
  )
}