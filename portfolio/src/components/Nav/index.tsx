import React from "react";

import github from "../../media/github-mark-white.png"

import { NavLinkWrapper } from "./NavLinkWrapper";
import { SVG } from "../Util/Svg";
import { Sizes } from "../Util/util";

export const Nav = () => {
	return (
		<div className="flex flex-row self-center justify-center items-center gap-6 h-16 bg-zinc-800 border-b-2 border-theme1 md:gap-8">
			<NavLinkWrapper route={"/"} label={"Portfolio"}/>
			<NavLinkWrapper route={"/About"} label={"About"}/>
			<a 
				className="flex self-center pt-0.5 transition-colors duration-300 text-gray-200 hover:text-theme1" 
				href="https://drive.google.com/file/d/1MVsDg8WRjpZ-Z0BcPrGbZSVS87TsJs53/view?usp=drive_link"
			>
				Resume
			</a>
			<a className="flex self-center pt-0.5" href="https://www.linkedin.com/in/jeffreymostyn/">
				<SVG name="linkedin" size={Sizes.MD} baseColor="white" transition={true} transitionColor="theme1"/>
			</a>
			<a className="flex self-center pt-0.5" href="https://github.com/jeff-mostyn">
				<img src={github} className="h-6 w-6"/>
			</a>	
		</div>
	)
}