import React from "react";
import { FeatureDisplay } from "../../components/Portfolio/FeatureDisplay";

import comcastData from "../../_data/Portfolio/Comcast/comcast";
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

	const [imagesLoaded, setImagesLoaded] = useState(false);
	
	return (
		<div className="bg-zinc-700">
			<div>
				<FeatureDisplay 
					data={sonsOfRaData}
					route={"/Portfolio/SonsOfRa"}
					order={0}
				/>
				<FeatureDisplay 
					data={racingGameData}
					route={"/Portfolio/RacingGame"}
					order={1}
				/>
				<FeatureDisplay 
					data={miniMinecraftData}
					route={"/Portfolio/MiniMinecraft"}
					order={2}
				/>
				<FeatureDisplay 
					data={comcastData}
					route={"/Portfolio/Comcast"}
					order={3}
				/>
			</div>

			{/* Professional Work */}
			{/* <div className="flex flex-col px-6 pt-14 pb-10 md:px-16">
				<div className="pb-8 text-white font-urbanist font-medium text-5xl md:text-6xl">
					Work Samples
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3">
					{ workSampleData.map((sample: WorkSampleContent, key: number) => {
						return (
							<div className="col-span-1" key={key}>
								<WorkSample {...sample}/>
							</div>
						)
					}) }
				</div>
			</div> */}
		</div>
	)
}