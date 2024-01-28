import React from "react";

import classNames from "classnames";
import { Button, ButtonType } from "../Util/Button";
import { Projects } from "src/pages/Portfolio";

export type PortfolioItemData = {
	project?: Projects;
	banner: {
		image: string;
		label: string;
		tagline: string;
	}
	content: {
		title: string;
		summary: string;
		roles: string[];
	}
	path: string;
}

const labelStyles = (alignLeft: boolean) => classNames("absolute flex flex-row w-full bottom-0 items-end pb-12 px-16", {
	"justify-start": alignLeft,
	"justify-end": !alignLeft
});

type FeatureDisplayProps = {
	data: PortfolioItemData;
	alignLeft: boolean
	setActiveProject: (data: PortfolioItemData) => void;
}

export const FeatureDisplay = ( { data, alignLeft, setActiveProject } : FeatureDisplayProps ) => {
	return (
		<div className="relative w-full h-80">
			<img className="w-full h-full object-cover object-center" src={data.banner.image} alt="bannerImage"/>
			<div className={labelStyles(alignLeft)}>
				<div className={`flex flex-col ${alignLeft ? 'items-start' : 'items-end'}`}>
					<div className="pb-1 text-white font-urbanist font-medium text-5xl">
						{data.banner.label}
					</div>
					<div className="pb-4 text-white font-urbanist font-medium text-sm">
						{data.banner.tagline}
					</div>

					{/* Button */}
					<div className="flex text-white border-2 border-white rounded-md items-center justify-center cursor-pointer">
						<div className=" px-8 py-2">
							<button type="button" onClick={() => {
								console.log("clicky clicky")
								setActiveProject(data)
							}}>
								{"DETAILS"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}