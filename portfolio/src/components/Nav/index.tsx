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
		close: {
			"en": "Close",
			"ja": "戻る"
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
		<div className="
			fixed flex flex-row items-center z-30 left-0 right-0 bottom-4 mx-auto px-8 py-2 w-fit h-fit gap-4 bg-material-neutral-secondary rounded-xl shadow-[0px_4px_8px_1px_rgba(0,_0,_0,_0.65)] 
			sm:left-0
			md:gap-6 md:mr-8 md:top-4
		">
			<NavLinkWrapper route={"/"} label={
				GetLocalizedContentValue(!!activePortfolioItem ? labels.close : labels.portfolio)}
			/>
			<NavLinkWrapper route={"/About"} label={GetLocalizedContentValue(labels.about)}/>
			<a 
				className="flex self-center transition-colors duration-300 text-white hover:text-theme1" 
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
	)
}