import React from "react";

import { data } from "../_data/Home/home";
import Markdown from "markdown-to-jsx";
import { GetLocalizedContentValue } from "src/components/Util/util";

export const About = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full pb-16 md:pb-0">
			<h1 className="w-full pt-5 pb-6 pl-8 text-3xl text-left font-urbanist text-white border-b-2 border-theme1">
				About Me
			</h1>
			<div className="
				flex flex-col justify-center px-12 pt-8 pb-8 
				md:max-w-full md:flex-row md:pt-16 
				lg:px-0 lg:w-[1000px]
			">
				<div className="flex pb-4 justify-center md:w-1/2 md:pb-0 md:pr-12">
					<img className="w-48 h-[256px] object-scale-down rounded-md md:w-80 md:h-[426px]" src={data.photo} alt={"Portrait"} />
				</div>
				<div 
					className="
						w-full h-px self-center bg-gradient-to-r from-gray-500 via-white to-gray-500
						md:max-height-96 md:h-96 md:min-h-[1em] md:w-px md:bg-gradient-to-t md:row-span-full
					"
				/>
				<div className="pt-4 self-center md:w-1/2 md:pt-0 md:pl-12 lg:3/5">
					<div className="text-left self-center text-gray-100">
						<div className="pb-6 text-xl">
							{GetLocalizedContentValue(data.header)}
						</div>
						<ul>
							{data.bio.map((line, i) => {
								return (
									<li className="pb-2.5 list-inside list-disc text-base" key={i}>
										<Markdown>{GetLocalizedContentValue(line)}</Markdown>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}