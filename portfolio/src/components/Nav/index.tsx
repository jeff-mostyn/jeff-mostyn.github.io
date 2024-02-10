import React from "react";

import { NavLinkWrapper } from "./NavLinkWrapper";
import { SVG } from "../Util/Svg";
import { Sizes } from "../Util/util";

export const Nav = () => {
	return (
		<div className="flex flex-row self-center justify-center items-center gap-8 h-16 bg-zinc-800 border-b-2 border-theme1">
			<NavLinkWrapper route={"/"} label={"Portfolio"}/>
			<NavLinkWrapper route={"/About"} label={"About"}/>
			<a className="flex self-center pt-0.5" href="https://www.linkedin.com/in/jeffreymostyn/">
				<SVG name="linkedin" size={Sizes.MD} baseColor="white" transition={true} transitionColor="theme1"/>
			</a>		
		</div>
	)
}