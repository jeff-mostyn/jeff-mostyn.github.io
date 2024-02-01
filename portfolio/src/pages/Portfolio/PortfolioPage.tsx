import React from "react";
import { PortfolioItemData } from "src/components/Portfolio/FeatureDisplay";
import { ImageAndText } from "src/components/Util/ImageAndText";
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
          <div className="flex flex-col md:flex-row pt-8 pb-8">
            <div className="pb-4 self-center md:w-1/2 md:pb-0 md:pr-12">
              {data.content.keyVideo && 
                <YoutubeEmbed embedId={data.content.keyVideo ?? ""} />
              }
              {
                data.content.keyImage &&
                <img className="aspect-video rounded-md" src={data.content.keyImage} />
              }
            </div>
            <div 
              className="
                w-full h-px self-center bg-gradient-to-r from-gray-500 via-white to-gray-500
                md:max-height-96 md:h-80 md:min-h-[1em] md:w-px md:bg-gradient-to-t md:row-span-full
              "
            />
            <div className="pt-4 self-center md:w-1/2 md:pt-0 md:pl-12">
              <div className="text-left self-center">
                <ul className="text-left list-disc list-outside pl-4 pb-6">
                  {data.content.accomplishments.map((line, key) => {
                    return <li className="list-item" key={key}>{line}</li>
                  })}
                </ul>
                {data.content.involvement.map((paragraph, i) => {
                  return (
                    <div className="pb-4 whitespace-pre-line indent-6" key={i}>
                      {paragraph}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* data.content.sections.map((section, key) => {
            return <ImageAndText image={section.image} text={section.text} imageLeft={section.imageLeft} key={key} />
          })*/}
        </div>
      </div>
    </div>
  )
}