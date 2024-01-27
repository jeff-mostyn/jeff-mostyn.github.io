import React from "react";
import { FeatureDisplay } from "../../components/Portfolio/FeatureDisplay";

import sonsOfRaData from '../../_data/Portfolio/SonsOfRa/sonsOfRa'
import racingGameData from "../../_data/Portfolio/RacingGame/racingGame";

export const Portfolio = () => {
	return (
		<div>
			<FeatureDisplay 
				data={sonsOfRaData}
				alignLeft={true}
			/>
			<FeatureDisplay 
				data={racingGameData}
				alignLeft={false}
			/>
		</div>
	)
}