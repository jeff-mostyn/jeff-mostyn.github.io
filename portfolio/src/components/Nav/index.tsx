import React from "react";

import github from "../../media/github-mark.png"

import { NavLinkWrapper } from "./NavLinkWrapper";
import { SVG } from "../Util/Svg";
import { GetLocalizedContentValue, Sizes, browserLanguage, languages } from "../Util/util";
import { useBoundStore } from "src/store/store";

import close from '../../svg/close-svgrepo-com.svg'

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

	const activePortfolioItem = useBoundStore(state => state.activePortfolioItem);
	const setActivePortfolioItem = useBoundStore(state => state.setActivePortfolioItem);

	return (
		<div className="sticky top-0 z-10 h-16 border-b-2 border-theme1">
			<div className="flex h-full flex-row bg-zinc-800 justify-center items-center">
				{/* Back button for breakpoints medium and above is in the nav bar*/}
				{activePortfolioItem && 
					<button 
						className=" hidden md:flex md:items-center md:justify-center md:absolute md:left-4 w-16 h-8 rounded-sm bg-theme1 text-white"
						onClick={() => setActivePortfolioItem(null)}
					>
						Back
					</button>
				}
				<div className="flex flex-row w-full self-center justify-center items-center gap-6 md:gap-8">
					<NavLinkWrapper route={"/"} label={GetLocalizedContentValue(labels.portfolio)}/>
					<NavLinkWrapper route={"/About"} label={GetLocalizedContentValue(labels.about)}/>
					<a 
						className="flex self-center pt-0.5 transition-colors duration-300 text-white hover:text-theme1" 
						href="https://drive.google.com/file/d/1PYKZ72kfuU87XZK8oWvgJzjk9SHivaNf/view?usp=sharing"
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
			</div>
			
			{
				browserLanguage() == languages.JAPANESE && 
				<div className="px-4 bg-theme1 min-h-8">
					このサイトは私の日本語能力限り翻訳されました。間違いや不自然な文法などがあれば、申し訳ございません。
				</div>
			}
			{/* small screen back button */}
			{activePortfolioItem && 
				<div
					className=" md:hidden flex flex-col fixed h-32 w-full bottom-0 justify-center bg-gradient-to-t from-black/60 to-black/0"
				>
					<button
						className="flex flex-end h-16 w-16 rounded-full bg-theme1 border-4 border-white items-center justify-center self-center"
						onClick={() => setActivePortfolioItem(null)}
					>
						<img className="h-10 w-10 filter-white" src={close} />
					</button>
				</div>
			}
		</div>
	)
}