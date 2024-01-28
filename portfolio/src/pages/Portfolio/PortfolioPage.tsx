import React from "react";
import { PortfolioItemData } from "src/components/Portfolio/FeatureDisplay";
import { RoleBadge } from "src/components/Util/RoleBadge";

type PortfolioPageProps = {
  data: PortfolioItemData;
  banner: string
  setActiveProject: (data: PortfolioItemData | undefined) => void;
}

export const PortfolioPage = ( { data, banner, setActiveProject }: PortfolioPageProps) => {
  return (
    <div>
      <button 
        type="button" 
        className="absolute top-0 left-0 pt-2 pl-3 text-white"
        onClick={() => setActiveProject(undefined)}>
        {"< Back"}
      </button>
      <div className="relative w-full h-60">
        <img className="w-full h-full object-cover object-center" src={banner} alt="bannerImage"/>
      </div>
      <div className="flex flex-col justify-center items-center pt-4">
        <div className="text-6xl text-white font-urbanist font-normal">
          {data.content.title}
        </div>
        <div className="flex pt-3 text-md flex-row text-white font-urbanist font-normal">
          {data.content.roles.map((role, key) => {
            return <RoleBadge role={role} key={key}/>
          })}
        </div>
      </div>
      <div className=" px-16">

      </div>
    </div>
  )
}