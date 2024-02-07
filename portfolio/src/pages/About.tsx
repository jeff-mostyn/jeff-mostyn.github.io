import React from "react";

import { data } from "../_data/Home/home";

export const About = () => {
	return (
		<div className="px-12 md:px-24">
			<div className="flex flex-col md:flex-row pt-8 pb-8 md:pt-16">
				<div className="flex pb-4 justify-center md:justify-end md:w-1/2 md:pb-0 md:pr-12 lg:w-2/5">
					<img className="w-auto h-auto max-w-52 max-h-[277px] rounded-md md:max-w-80 md:max-h-[426px]" src={data.photo} alt={"Portrait"} />
				</div>
				<div 
					className="
						w-full h-px self-center bg-gradient-to-r from-gray-500 via-white to-gray-500
						md:max-height-96 md:h-96 md:min-h-[1em] md:w-px md:bg-gradient-to-t md:row-span-full
					"
				/>
				<div className="pt-4 self-center md:w-1/2 md:pt-0 md:pl-12 lg:3/5">
					<div className="text-left self-center text-gray-100">
						{data.bio.map((paragraph, i) => {
							return (
								<div className="pb-4 whitespace-pre-line indent-10" key={i}>
									{paragraph}
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}