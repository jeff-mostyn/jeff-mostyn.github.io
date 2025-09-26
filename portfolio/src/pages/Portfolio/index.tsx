import React, { useState } from "react";
import { FeatureDisplay, FeatureDisplayProps, PortfolioItemData } from "../../components/Portfolio/FeatureDisplay";

import comcastData from "../../_data/Portfolio/Comcast/comcast";
import miniMinecraftData from "../../_data/Portfolio/MiniMinecraft/miniMinecraft";
import racingGameData from "../../_data/Portfolio/NovaChasers/racingGame";
import sonsOfRaData from '../../_data/Portfolio/SonsOfRa/sonsOfRa'
import stylizedToonShaderData from '../../_data/Portfolio/ColoredPencilShader/coloredPencilShader'
import { Roles, Sizes } from "src/components/Util/util";
import { RoleBadge } from "src/components/Util/RoleBadge";
import { PortfolioPage } from "./PortfolioPage";
import { useBoundStore } from "src/store/store";

export enum Projects {
  SONS_OF_RA = "Sons of Ra",
  RACING_GAME = "Racing game"
}

const FeatureDisplayData: FeatureDisplayProps[] = [
	{
		data: sonsOfRaData,
		route: "/Portfolio/SonsOfRa",
		order: 0
	},
	{
		data: racingGameData,
		route: "/Portfolio/NovaChasers",
		order: 0
	},
	{
		data: miniMinecraftData,
		route: "/Portfolio/MiniMinecraft",
		order: 0
	},
	{
		data: comcastData,
		route: "/Portfolio/Comcast",
		order: 0
	},
	{
		data: stylizedToonShaderData,
		route: "/Portfolio/ColoredPencilShader",
		order: 0
	},
]

const roleList: string[] = [
	Roles.ANIMATION, Roles.DESIGN, Roles.PROGRAMMING, Roles.TECH_ART, Roles.UI_PROGRAMMING, Roles.UI_UX
] 

export const Portfolio = () => {
	const activePortfolioItem = useBoundStore(state => state.activePortfolioItem);
	const setActivePortfolioItem = useBoundStore(state => state.setActivePortfolioItem);
	const activeRole = useBoundStore(state => state.roleFilter);
	const setActiveRole = useBoundStore(state => state.setRoleFilter);

	return (
		<div className="bg-zinc-800">
			{activePortfolioItem ? (
				<PortfolioPage/>
			) :
			(
				<>
					<h1 className="py-4 text-3xl font-urbanist text-white">Jeff Mostyn's Portfolio</h1>
					<div className="pb-2">
						<div className="flex flex-row flex-wrap items-center justify-center max-h-20 min-h-10">
							{roleList.map((role, key) => {
								return (
									<button onClick={() => {
										setActiveRole(activeRole === role ? '' : role);
									}}>
										<RoleBadge role={role} size={Sizes.SM} key={key} showBorder={activeRole === role}/>
									</button>
								)
							})}
						</div>
					</div>
					<div>
						{
							FeatureDisplayData.map((featureDisplay, key) => {
								return (
									(!activeRole || featureDisplay.data.content.roles.includes(activeRole as Roles)) && 
										<FeatureDisplay 
											data={featureDisplay.data}
											route={featureDisplay.route}
											order={key}
											setActivePage={setActivePortfolioItem}
										/>
								)
							})
						}
					</div>
				</>
			)}
		</div>
	)
}