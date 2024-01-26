import React from "react";
import { FeatureDisplay } from "../../components/Portfolio/FeatureDisplay";

import sorData from '../../_data/Portfolio/SonsOfRa/sonsOfRa.json'

export const Portfolio = () => {
	return (
		<div>
			<FeatureDisplay 
				data={sorData}
				alignLeft={true}
			/>
		</div>
	)
}