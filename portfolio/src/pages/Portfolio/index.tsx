import React, { useEffect, useState } from "react";
import { FeatureDisplay, FeatureDisplayProps } from "../../components/Portfolio/FeatureDisplay";

import comcastData from "../../_data/Portfolio/Comcast/comcast_comp";
import miniMinecraftData from "../../_data/Portfolio/MiniMinecraft/miniMinecraft_comp";
import pathRedesignData from '../../_data/Portfolio/PathRedesign/pathRedesign_comp';
import racingGameData from "../../_data/Portfolio/NovaChasers/nova_comp";
import sonsOfRaData from '../../_data/Portfolio/SonsOfRa/sonsOfRa_comp'
import { shaderImplementationData } from "../../_data/SmallProjects/ColoredPencilShader/coloredPencilShader";
import { openGlPathTracerData } from "../../_data/SmallProjects/OpenGLPathTracer/openGlPathTracer";

import { Roles, Sizes } from "src/components/Util/util";
import { RoleBadge } from "src/components/Util/RoleBadge";
import { PortfolioPage } from "./PortfolioPage";
import { useBoundStore } from "src/store/store";
import { ProjectData } from "src/utils/types";
import { PortfolioItemData } from "src/utils/portfolioSegmentTypes";
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
		data: comcastData,
		order: 0,
		onClick: () => {}
	},
	{
		data: miniMinecraftData,
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

	useEffect(() => {
		if (!!activePortfolioItem) {
			document.body.classList.add("overflow-hidden");
		}
		else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [activePortfolioItem])

	switch (project) {
		case comcastData.path:
			setActivePortfolioItem(comcastData);
			break;
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
		//window.scrollTo(0, 0);
	}

	const handleRoleFilter = (newRole: string) => {
		setPlayAnim(false);
		setActiveRole(newRole);
	}

	return (
		<div className="bg-material-neutral-primary">
			{activePortfolioItem && <div
				className="fixed z-10 top-0 right-0 left-0 bg-black opacity-60 w-full h-full"
				id={"overlay"}
				onClick={() => setActivePortfolioItem(null)}
			/>}
			<div className={`
				fixed z-10 bottom-0 left-0 right-0 ${activePortfolioItem ? "translate-y-0" : "translate-y-full"} w-11/12 h-5/6 mx-auto overflow-y-scroll rounded-t-xl
			`}>
				<PortfolioPage/>
			</div>
			<div className={""/*`${activePortfolioItem ? 'hidden' : ""}`*/}>
				<h1 className="pt-5 pb-6 px-8 text-3xl text-center font-urbanist text-white border-b-2 border-theme1 md:text-left">
					Jeff Mostyn's Portfolio
				</h1>
				<div className="pt-4 pb-2 px-4 md:px-8">
					<div className="flex flex-row flex-wrap items-center justify-center min-h-10">
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