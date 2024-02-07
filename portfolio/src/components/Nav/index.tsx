import React from "react";

import { NavLinkWrapper } from "./NavLinkWrapper";

export const Nav = () => {
	return (
		<div className="flex justify-center items-center h-16 text-gray-200 bg-zinc-800 border-b-2 border-theme1">
			<NavLinkWrapper route={"/"} label={"Portfolio"}/>
			<NavLinkWrapper route={"/About"} label={"About"}/>
		</div>  
	)
}