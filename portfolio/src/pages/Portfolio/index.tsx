import React, { useState } from "react";
import { FeatureDisplay, FeatureDisplayProps } from "../../components/Portfolio/FeatureDisplay";

import comcastData from "../../_data/Portfolio/Comcast/comcast";
import miniMinecraftData from "../../_data/Portfolio/MiniMinecraft/miniMinecraft";
import pathRedesignData from '../../_data/Portfolio/PathRedesign/pathRedesign';
import racingGameData from "../../_data/Portfolio/NovaChasers/racingGame";
import sonsOfRaData from '../../_data/Portfolio/SonsOfRa/sonsOfRa'
import { shaderImplementationData } from "../../_data/SmallProjects/ColoredPencilShader/coloredPencilShader";
import { openGlPathTracerData } from "../../_data/SmallProjects/OpenGLPathTracer/openGlPathTracer";

import { Roles, Sizes } from "src/components/Util/util";
import { RoleBadge } from "src/components/Util/RoleBadge";
import { PortfolioPage } from "./PortfolioPage";
import { useBoundStore } from "src/store/store";
import { PortfolioItemData, ProjectData } from "src/utils/types";
import { WorkSample } from "src/components/Portfolio/WorkSample";


const FeatureDisplayData: FeatureDisplayProps[] = [
	{
		data: sonsOfRaData,
		order: 0,
		onClick: () => {},
	},
	{
		data: racingGameData,
		order: 0,
		onClick: () => {}
	},
	{
		data: miniMinecraftData,
		order: 0,
		onClick: () => {}
	},
	{
		data: comcastData,
		order: 0,
		onClick: () => {}
	},
	{
		data: pathRedesignData,
		order: 0,
		onClick: () => {}
	}
]

const ProjectsData: ProjectData[] = [
	shaderImplementationData,
	openGlPathTracerData
]

const roleList: string[] = [
	Roles.ANIMATION, Roles.DESIGN, Roles.PROGRAMMING, Roles.TECH_ART, Roles.UI_PROGRAMMING, Roles.UI_UX
] 

export const Portfolio = () => {
	const activePortfolioItem = useBoundStore(state => state.activePortfolioItem);
	const setActivePortfolioItem = useBoundStore(state => state.setActivePortfolioItem);
	const activeRole = useBoundStore(state => state.roleFilter);
	const setActiveRole = useBoundStore(state => state.setRoleFilter);

	const [playAnim, setPlayAnim] = useState<boolean>(true); 

	// look for query params for automatically opening project
	const urlParams = new URLSearchParams(window.location.search);
	const project = urlParams.get('project');

	switch (project) {
		case comcastData.path:
			setActivePortfolioItem(comcastData);
			break;
		case miniMinecraftData.path:
			setActivePortfolioItem(miniMinecraftData);
			break;
		case racingGameData.path:
			setActivePortfolioItem(racingGameData);
			break;
		case sonsOfRaData.path:
			setActivePortfolioItem(sonsOfRaData);
			break;
		case pathRedesignData.path:
			setActivePortfolioItem(pathRedesignData);
			break;
		default:
			break;
	}

	const handleClick = (newItem: PortfolioItemData | null) => {
		setPlayAnim(false);
		setActivePortfolioItem(newItem);
	}

	const handleRoleFilter = (newRole: string) => {
		setPlayAnim(false);
		setActiveRole(newRole);
	}

	return (
		<div className="bg-zinc-800" >
			{activePortfolioItem && <PortfolioPage/> }
			<div className={`${activePortfolioItem ? 'hidden' : ""}`}>
				<h1 className="py-4 text-3xl font-urbanist text-white">Jeff Mostyn's Portfolio</h1>
				<div className="pb-2">
					<div className="flex flex-row flex-wrap items-center justify-center max-h-20 min-h-10">
						{roleList.map((role, key) => {
							return (
								<button onClick={() => {
									handleRoleFilter(activeRole === role ? '' : role);
								}}>
									<RoleBadge role={role} size={Sizes.SM} key={key} showBorder={activeRole === role}/>
								</button>
							)
						})}
					</div>
				</div>
				<div className="mb-8">
					{
						FeatureDisplayData.map((featureDisplay, key) => {
							return (
								(!activeRole || featureDisplay.data.content.roles.includes(activeRole as Roles)) && 
									<FeatureDisplay 
										data={featureDisplay.data}
										order={key}
										onClick={handleClick}
										playAnim={playAnim}
									/>
							)
						})
					}
				</div>
				<div>
					<h2 className="pb-8 text-2xl text-white font-urbanist font-medium md:text-5xl">
						Work Samples
					</h2>
					<div
						className="flex flex-row flex-wrap justify-center gap-4"
					>
						{ProjectsData.map((data, i) => {
							return (
								(!activeRole || data.roles.includes(activeRole as Roles)) &&
									<WorkSample 
									key={i}
									sampleData={data}
								/>
							)})
						}
					</div>
				</div>
			</div>
		</div>
	)
}