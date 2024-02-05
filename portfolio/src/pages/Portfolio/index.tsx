import React, { useState } from "react";
import { FeatureDisplay, PortfolioItemData } from "../../components/Portfolio/FeatureDisplay";
import { PortfolioPage } from "./PortfolioPage";

import miniMinecraftData from "../../_data/Portfolio/MiniMinecraft/miniMinecraft";
import racingGameData from "../../_data/Portfolio/RacingGame/racingGame";
import sonsOfRaData from '../../_data/Portfolio/SonsOfRa/sonsOfRa'

import workSampleData from "../../_data/WorkSamples/workSamples";
import { WorkSample, WorkSampleContent } from "src/components/Portfolio/WorkSample";

export enum Projects {
  SONS_OF_RA = "Sons of Ra",
  RACING_GAME = "Racing game"
}

export const Portfolio = () => {
	const workSamples: WorkSampleContent[] = workSampleData;

	const [openedProjectData, setOpenedProjectData] = useState<PortfolioItemData | undefined>(undefined);

	const setActiveProject = (data: PortfolioItemData | undefined) => {
		setOpenedProjectData(data);
	}

	return (
		<div className="bg-zinc-700">
			{ openedProjectData 
				?	<PortfolioPage 
						data={openedProjectData} 
						banner={openedProjectData.banner.image} 
						setActiveProject={setActiveProject}
					/>
				:	<div>
						<div>
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
							<FeatureDisplay 
								data={miniMinecraftData}
								alignLeft={true}
								setActiveProject={setActiveProject}
							/>
						</div>

						{/* Professional Work */}
						<div className="flex flex-col px-6 pt-14 pb-10 md:px-16">
							<div className="pb-8 text-white font-urbanist font-medium text-5xl md:text-6xl">
								Work Samples
							</div>
							<div className="grid grid-cols-1 md:grid-cols-3">
								{ workSampleData.map((sample: WorkSampleContent, key: number) => {
									return (
										<div className="col-span-1">
											<WorkSample {...sample} key={key}/>
										</div>
									)
								}) }
							</div>
						</div>
					</div>
			}
		</div>
	)
}