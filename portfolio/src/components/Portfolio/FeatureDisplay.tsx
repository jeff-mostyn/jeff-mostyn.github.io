import React from "react";

import { Projects } from "src/pages/Portfolio";
import { NavLink } from "react-router-dom";

export type PortfolioItemData = {
	project?: Projects;
	banner: {
		image: string;
		label: string;
		tagline: string;
	}
	content: {
		title: string;
		roles: string[];
		summary: string;
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
			text: string[];
			imageLeft: boolean;
		}[]
	}
	path: string;
}

type FeatureDisplayProps = {
	data: PortfolioItemData;
	route: string;
	alignLeft: boolean
}

export const FeatureDisplay = ( { data, route, alignLeft } : FeatureDisplayProps ) => {
	return (
		<NavLink to={route}>
			<div className="relative w-full h-64 md:h-72">
				<div className="
					absolute w-full h-full bg-black opacity-15 
					md:transition-opacity md:duration-300 md:opacity-55 md:hover:opacity-15"
				/>
				<img className="w-full h-full object-cover object-center" src={data.banner.image} alt="bannerImage"/>
				<div className="
					absolute flex flex-row justify-center w-full bottom-0 items-end pb-6 px-6 
					md:pb-16 md:px-16 md:pointer-events-none
				" >
					<div className={`flex flex-col items:center ${alignLeft ? 'md:items-center' : 'md:items-center'}`}>
						<div className="pb-1 text-white font-urbanist font-medium text-5xl">
							{data.banner.label}
						</div>
						<div className="pb-4 text-white font-urbanist font-medium text-md md:text-lg">
							{data.banner.tagline}
						</div>

						{/* Button */}
						<div 
							className={`flex max-w-min border-2 border-white rounded-md self-center justify-center md:hidden`}>
							<NavLink to={route} type="button" className="px-8 py-2 transition-colors duration-300 text-white bg-transparent hover:bg-white hover:text-black" >
								{"DETAILS"}
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</NavLink>
	)
}