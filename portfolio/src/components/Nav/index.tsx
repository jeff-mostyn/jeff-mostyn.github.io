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

	// in addition to setting the portfolio item to null, we want to erase any query parameters that
	// may have directed the user to a specific project
	const handleBackClick = () => {
		setActivePortfolioItem(null);
		window.history.replaceState(null, "Portfolio Overview", "/");
		window.scrollTo(0, 0);
	}

	return (
		<div className="flex flex-row-reverse justify-between items-center fixed top-0 z-10 w-full h-fit px-8 pt-4 pb-2">
			<div className="
				flex flex-row self-center items-center px-8 py-2 w-fit gap-4 bg-material-neutral-secondary rounded-xl shadow-[0px_4px_8px_1px_rgba(0,_0,_0,_0.65)] 
				md:gap-6
			">
				<NavLinkWrapper route={"/"} label={GetLocalizedContentValue(labels.portfolio)}/>
				<NavLinkWrapper route={"/About"} label={GetLocalizedContentValue(labels.about)}/>
				<a 
					className="flex self-center pt-0.5 transition-colors duration-300 text-white hover:text-theme1" 
					href="https://drive.google.com/file/d/1PYKZ72kfuU87XZK8oWvgJzjk9SHivaNf/view?usp=sharing"
				>
					{GetLocalizedContentValue(labels.resume)}
				</a>
				<a className="flex self-center pt-0.5" href="https://www.linkedin.com/in/jeffreymostyn/">
					<SVG name="linkedin" size={Sizes.MD} baseColor="white" transition={true} transitionColor="theme1"/>
				</a>
				<div className="flex w-6 h-6 items-center justify-center transition-colors duration-300 bg-white hover:bg-theme1 rounded-md">
					<a className="flex self-center" href="https://github.com/jeff-mostyn">
						<img src={github} className="h-5 w-5" alt={"github"}/>
					</a>	
				</div>
			</div>

			{/* Back button for breakpoints medium and above is in the nav bar*/}
			{activePortfolioItem && 
				<button 
					className=" hidden md:flex items-center justify-center h-10 px-4 rounded-md bg-theme1 hover:bg-theme1-hover transition-colors duration-200 text-white font-semibold shadow-[0px_4px_8px_2px_rgba(0,_0,_0,_0.65)]"
					onClick={() => handleBackClick()}
				>
					Return
				</button>
			}
			
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
						onClick={() => handleBackClick}
					>
						<img className="h-10 w-10 filter-white" src={close} />
					</button>
				</div>
			}
		</div>
	)
}