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

	const [roleFilter, setRoleFilter] = useState<string | undefined>();

	const [activePage, setActivePage] = useState<PortfolioItemData | null>(null);

	return (
		<div className="bg-zinc-800">
			{activePage ? (
				<PortfolioPage 
					data={activePage}
					setActivePage={setActivePage}
				/>
			) :
			(
				<>
					<h1 className="py-4 text-3xl font-urbanist text-white">Jeff Mostyn's Portfolio</h1>
					<div className="pb-2">
						<>
							{roleList.map((role, key) => {
								return (
									<button onClick={() => {
										setRoleFilter(roleFilter === role ? undefined : role);
									}}>
										<RoleBadge role={role} size={Sizes.SM} key={key} showBorder={roleFilter === role}/>
									</button>
								)
							})}
						</>
					</div>
					<div>
						{
							FeatureDisplayData.map((featureDisplay, key) => {
								return (
									(!roleFilter || featureDisplay.data.content.roles.includes(roleFilter as Roles)) && 
										<FeatureDisplay 
											data={featureDisplay.data}
											route={featureDisplay.route}
											order={key}
											setActivePage={setActivePage}
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