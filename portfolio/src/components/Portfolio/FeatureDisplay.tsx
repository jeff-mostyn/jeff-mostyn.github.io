import React from "react";

import classNames from "classnames";
import { Button, ButtonType } from "../Util/Button";

export type PortfolioItemData = {
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
}

export const FeatureDisplay = ( { data, alignLeft } : FeatureDisplayProps ) => {
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
					<Button type={ButtonType.NAV_LINK} label="DETAILS" path={data.path} />
				</div>
			</div>
		</div>
	)
}