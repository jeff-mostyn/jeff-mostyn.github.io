import React from "react";

import github from "../../media/github-mark.png"

import { NavLinkWrapper } from "./NavLinkWrapper";
import { SVG } from "../Util/Svg";
import { GetLocalizedContentValue, Sizes, browserLanguage, languages } from "../Util/util";

export const Nav = () => {
	const labels = {
		about: {
			"en": "About",
			"ja": "について",
		},
		portfolio: {
			"en": "Portfolio",
			"ja": "ポートフォリオ",
		},
		resume: {
			"en": "Resume",
			"ja": "履歴書",
		}
	}

	return (
		<div>
			<div className="flex flex-row self-center justify-center items-center gap-6 h-16 bg-zinc-800 border-b-2 border-theme1 md:gap-8">
				<NavLinkWrapper route={"/"} label={GetLocalizedContentValue(labels.portfolio)}/>
				<NavLinkWrapper route={"/About"} label={GetLocalizedContentValue(labels.about)}/>
				<a 
					className="flex self-center pt-0.5 transition-colors duration-300 text-white hover:text-theme1" 
					href="https://drive.google.com/file/d/1qDVNx8KCV2D5rOPRf7rE9zLEiokatI1V/view?usp=sharing"
				>
					{GetLocalizedContentValue(labels.resume)}
				</a>
				<a className="flex self-center pt-0.5" href="https://www.linkedin.com/in/jeffreymostyn/">
					<SVG name="linkedin" size={Sizes.LG} baseColor="white" transition={true} transitionColor="theme1"/>
				</a>
				<div className="flex w-8 h-8 items-center justify-center transition-colors duration-300 bg-white hover:bg-theme1 rounded-lg">
				<a className="flex self-center" href="https://github.com/jeff-mostyn">
					<img src={github} className="h-6 w-6" alt={"github"}/>
				</a>	
				</div>
			</div>
			{
				browserLanguage() == languages.JAPANESE && 
				<div className="px-4 bg-theme1 min-h-8">
					このサイトは私の日本語能力限り翻訳されました。間違いや不自然な文法などがあれば、申し訳ございません。
				</div>
			}
		</div>
	)
}