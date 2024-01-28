import React from "react";
import { PortfolioItemData } from "src/components/Portfolio/FeatureDisplay";
import { RoleBadge } from "src/components/Util/RoleBadge";
import { YoutubeEmbed } from "src/components/Util/YoutubeEmbed";

type PortfolioPageProps = {
  data: PortfolioItemData;
  banner: string
  setActiveProject: (data: PortfolioItemData | undefined) => void;
}

export const PortfolioPage = ( { data, banner, setActiveProject }: PortfolioPageProps) => {
  return (
    <div className="text-white">
      <div className="relative w-full h-60">
        <img className="w-full h-full object-cover object-center" src={banner} alt="bannerImage"/>
      </div>
      <div className="relative h-full">
        <button 
          type="button" 
          className="absolute top-0 left-0 pt-2 pl-3"
          onClick={() => setActiveProject(undefined)}>
          {"< Back"}
        </button>
        <div className="flex flex-col justify-center items-center pt-8 md:pt-4">
          <div className="text-5xl font-urbanist font-normal md:text-6xl">
            {data.content.title}
          </div>
          <div className="flex flex-wrap justify-center pt-3 text-md flex-row font-urbanist font-normal">
            {data.content.roles.map((role, key) => {
              return <RoleBadge role={role} key={key}/>
            })}
          </div>
        </div>

        <div className="px-6 md:px-16">
          {/* Summary */}
          <div className="pt-4 md:px-20">
            {data.content.summary}
          </div>

          {/* Links */}
          <div className="flex flex-col justify-center pt-4 md:flex-row md:divide-x">
            { data.content.hyperlinks.map((link, key) => {
                return <a className="pb-1 px-3 text-theme1 underline" href={link.url} key={key}>{link.text}</a>
              })
            }
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:grid md:grid-cols-12 pt-8 pb-8 divide-y md:divide-x md:divide-y-0 ">
            <div className="pb-4 md:grid md:col-span-6 md:pb-0 md:pr-12">
              {data.content.keyVideo && 
                <YoutubeEmbed embedId={data.content.keyVideo ?? ""} />
              }
              {
                data.content.keyImage &&
                <img className="aspect-video" src={data.content.keyImage} />
              }
            </div>
            <div className="pt-4 md:grid md:col-span-6 md:pt-4 md:pl-12">
              <ul className="text-left list-disc list-outside pl-4 self-center">
                {data.content.accomplishments.map((line, key) => {
                  return <li className="list-item" key={key}>{line}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}