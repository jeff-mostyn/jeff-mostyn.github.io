import React from "react";

import { NavLinkWrapper } from "./NavLinkWrapper";

export const Nav = () => {
	return (
		<div className="flex justify-center items-center h-16 bg-white border border-b border-green-900">
			<NavLinkWrapper route={"/"} label={"Home"}/>
			<NavLinkWrapper route={"/Portfolio"} label={"Portfolio"}/>
		</div>  
	)
}