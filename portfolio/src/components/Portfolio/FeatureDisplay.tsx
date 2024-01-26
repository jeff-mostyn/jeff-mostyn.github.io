import React from "react";

import classNames from "classnames";
import { Button, ButtonType } from "../Util/Button";

export type PortfolioItemData = {
	banner: {
		image: string;
		label: string;
	}
	content?: {}
}

const labelStyles = (alignLeft: boolean) => classNames("flex flex-row items-end pb-16 w-full h-80 px-8 bg-purple-800 ", {
	"justify-start": alignLeft,
	"justify-end": !alignLeft
});

type FeatureDisplayProps = {
	data: PortfolioItemData;
	alignLeft: boolean
}

export const FeatureDisplay = ( { data, alignLeft } : FeatureDisplayProps ) => {

	return (
		<div>
			<img src={process.env.PUBLIC_URL + data.banner.image} />
			<div className={labelStyles(alignLeft)}>
				<div className="flex flex-col items-start">
					<div className="pb-4 text-white font-urbanist font-medium text-5xl">
						{data.banner.label}
					</div>
					<Button type={ButtonType.NAV_LINK} label="DETAILS" path="/Portfolio/SonsOfRa" />
				</div>
			</div>
		</div>
	)
}