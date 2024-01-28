import React from "react";

import classNames from "classnames";
import { Button, ButtonType } from "../Util/Button";
import { Projects } from "src/pages/Portfolio";
import { StringLiteral } from "typescript";

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
		accomplishments: string[];
	}
	path: string;
}

const labelStyles = (alignLeft: boolean) => classNames("absolute flex flex-row justify-center w-full bottom-0 items-end pb-6 px-12 md:pb-12 md:px-16", {
	"md:justify-start": alignLeft,
	"md:justify-end": !alignLeft
});

type FeatureDisplayProps = {
	data: PortfolioItemData;
	alignLeft: boolean
	setActiveProject: (data: PortfolioItemData) => void;
}

export const FeatureDisplay = ( { data, alignLeft, setActiveProject } : FeatureDisplayProps ) => {
	return (
		<div className="relative w-full h-64 md:h-80">
			<img className="w-full h-full object-cover object-center" src={data.banner.image} alt="bannerImage"/>
			<div className={labelStyles(alignLeft)}>
				<div className={`flex flex-col items:center ${alignLeft ? 'md:items-start' : 'md:items-end'}`}>
					<div className="pb-1 text-white font-urbanist font-medium text-5xl">
						{data.banner.label}
					</div>
					<div className="pb-4 text-white font-urbanist font-medium text-sm">
						{data.banner.tagline}
					</div>

					{/* Button */}
					<div 
						className={`flex max-w-min text-white border-2 border-white rounded-md self-center justify-center ${alignLeft ? "md:self-start" : "md:self-end"}`}>
						<button type="button" className="px-8 py-2" onClick={() => {
							setActiveProject(data)
						}}>
							{"DETAILS"}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}