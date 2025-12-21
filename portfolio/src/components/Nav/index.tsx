import React from "react";

import github from "../../media/github-mark.png"

import { NavLinkWrapper } from "./NavLinkWrapper";
import { SVG } from "../Util/Svg";
import { GetLocalizedContentValue, Sizes, browserLanguage, languages } from "../Util/util";
import { useBoundStore } from "src/store/store";

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

	const hasNotif = browserLanguage() == languages.JAPANESE;

	return (
		<div className="
			fixed items-center z-30 left-0 right-0 bottom-8 mx-auto h-fit max-w-96 w-fit
			sm:left-0
			md:gap-6 md:mr-8 md:top-4
		">
			<div className={`flex flex-col ${hasNotif && 'bg-theme1'} rounded-t-2xl rounded-xl h-fit shadow-[0px_4px_8px_1px_rgba(0,_0,_0,_0.65)]`}>
				<div className="flex flex-row px-8 py-2 w-fit h-fit gap-4 bg-material-neutral-secondary rounded-xl">
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
				{
					browserLanguage() == languages.JAPANESE && 
					<div className="px-4 min-h-8 rounded-b-xl">
						このサイトは翻訳が途中です。
					</div>
				}
			</div>
		</div>
	)
}