import React, { useState } from "react";
import { FeatureDisplay, PortfolioItemData } from "../../components/Portfolio/FeatureDisplay";

import sonsOfRaData from '../../_data/Portfolio/SonsOfRa/sonsOfRa'
import racingGameData from "../../_data/Portfolio/RacingGame/racingGame";
import { PortfolioPage } from "./PortfolioPage";

export enum Projects {
  SONS_OF_RA = "Sons of Ra",
  RACING_GAME = "Racing game"
}

export const Portfolio = () => {
	const [openedProjectData, setOpenedProjectData] = useState<PortfolioItemData | undefined>(undefined);

	const setActiveProject = (data: PortfolioItemData | undefined) => {
		setOpenedProjectData(data);
	}

	return (
		<>
			{ openedProjectData 
				?	<PortfolioPage 
						data={openedProjectData} 
						banner={openedProjectData.banner.image} 
						setActiveProject={setActiveProject}
					/>
				:	<div>
						<FeatureDisplay 
							data={sonsOfRaData}
							alignLeft={true}
							setActiveProject={setActiveProject}
						/>
						<FeatureDisplay 
							data={racingGameData}
							alignLeft={false}
							setActiveProject={setActiveProject}
						/>
					</div>
			}
		</>
	)
}