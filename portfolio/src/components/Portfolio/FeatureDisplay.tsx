import React, { useEffect, useState } from "react";

import { Projects } from "src/pages/Portfolio";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { GetLocalizedContentValue, LocalizedContent, browserLanguage, languages } from "../Util/util";

export type PortfolioItemData = {
	project?: Projects;
	banner: {
		image: string;
		label: LocalizedContent;
		tagline: LocalizedContent;
	}
	content: {
		title: LocalizedContent;
		roles: string[];
		summary?: LocalizedContent;
		steamEmbed?: string;
		hyperlinks: {
			text: string;
			url: string;
		}[];
		keyImage?: string;
		keyVideo?: string;
		involvement: string[];
		accomplishments: string[];
		skills: string[];
		sections: {
			title: string;
			image?: string;
			video?: string;
			description?: string[];
			imageLeft: boolean;
		}[]
	};
	icons: string[];
	path: string;
}

export type FeatureDisplayProps = {
	data: PortfolioItemData;
	route: string;
	order: number;
}

const getAnimationDelay = (order: number): number => {
	return 300 + (300 * order);
}

export const FeatureDisplay = ( { data, route, order } : FeatureDisplayProps ) => {
	const [animationStarted, setAnimationStarted] = useState(false);
	const [animationFinished, setAnimationFinished] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAnimationStarted(true);
		}, getAnimationDelay(order));	

		setTimeout(() => {
			setAnimationFinished(true);
		}, getAnimationDelay(order) + 750);	
	}, [animationStarted])

	const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

	return (
		<NavLink to={route}>
			<div 
				className={`relative w-full h-64 overflow-hidden ${!animationFinished && "md:pointer-events-none"}`} 
				onMouseOver={handleMouseOver} 
				onMouseOut={handleMouseOut}
			>
				{ animationStarted 
					? <div className={`
							absolute w-full h-full bg-black opacity-35 animate-darkOverlayFadeResponsive
						 	md:animate-darkOverlayFade md:transition-opacity md:duration-300 md:opacity-60 md:hover:opacity-25`}
						/> 
					:	<div className="absolute w-full h-full bg-black opacity-0"/>
					}
				<img className={`w-full h-full object-cover object-center`} src={data.banner.image} alt="bannerImage"/>
				<div className="
					absolute flex flex-col justify-center w-full h-full bottom-0 items-center pb-8 px-6 
					md:pb-2 md:px-16 md:pointer-events-none
				" >
					{animationStarted &&
						<div className={`flex flex-col h-full justify-end opacity-0 animate-slideInFromRight`}>
							<div className={`translate-y-0 ${isHovered && "md:animate-slideUpFeatureDisplay"} ${!isHovered && "md:animate-slideDownFeatureDisplay"}`}>
								<div className="pb-1 text-4xl text-white font-urbanist font-medium md:text-5xl">
									<h2>{GetLocalizedContentValue(data.banner.label)}</h2>	
								</div>
								<div 
									className={`${isHovered && "md:animate-fastFadeIn"} ${!isHovered && "md:animate-fastFadeOut"}`}
								>
									<div className="pb-2 text-white font-urbanist font-medium text-md md:text-lg">
										<p>{GetLocalizedContentValue(data.banner.tagline)}</p>				
									</div>
									<div className="hidden md:flex md:flex-row md:justify-center md:gap-3 md:visible">
										{
											data.icons.map((icon, key) => {
												return <img className="rounded-md" src={icon} key={key} height={"48"} width={"48px"} alt={icon.split(".")[0]}/>
											})
										}
									</div>
								</div>
							</div>

							{/* Button */}
							<div 
								className={`flex max-w-min border-2 border-white rounded-md self-center justify-center md:hidden`}>
								<NavLink to={route} type="button" className="px-8 py-2 transition-colors duration-300 text-white bg-transparent hover:bg-white hover:text-black" >
									{"DETAILS"}
								</NavLink>
							</div>
						</div>
					}
				</div>
			</div>
		</NavLink>
	)
}