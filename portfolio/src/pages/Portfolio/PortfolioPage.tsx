import React from "react";
import { RoleBadge } from "src/components/Util/RoleBadge";
import { GetLocalizedContentValue, Sizes } from "src/components/Util/util";
import { useBoundStore } from "src/store/store";
import { mapContainerComponent } from "src/utils/componentMapping";

export const PortfolioPage = () => {
  const activePortfolioItem = useBoundStore(state => state.activePortfolioItem);

  if (!activePortfolioItem) {
    return null;
  }

  return (
    <div className="bg-material-neutral-primary text-white pb-24">
      <div className="relative w-full h-60">
        <img className="w-full h-full object-cover object-center" src={activePortfolioItem.banner.image} alt="bannerImage"/>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center py-8 md:pt-4">
          <h1 className="text-4xl font-urbanist font-normal md:text-6xl px-8">
            {GetLocalizedContentValue(activePortfolioItem.content.title)}
          </h1>
          <div className="flex flex-wrap justify-center pt-3 flex-row">
            {activePortfolioItem.content.roles.map((role: string, key: number) => {
              return <RoleBadge role={role} size={Sizes.MD} key={key}/>
            })}
          </div>
        </div>
        <div className="relative flex flex-col justify-center h-full px-8 md:px-12 2xl:max-w-[1500px]">
          {activePortfolioItem.content.summary && 
            <div className="flex flex-wrap self-center text-left indent-4 flex-row md:w-[600px] lg:w-[800px]">
              {GetLocalizedContentValue(activePortfolioItem.content.summary)}
            </div>
          }
          <div className="flex flex-col items-center">
            {activePortfolioItem.content.containers.map((container, i) => (
              <div key={i}>
                {mapContainerComponent(container)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}