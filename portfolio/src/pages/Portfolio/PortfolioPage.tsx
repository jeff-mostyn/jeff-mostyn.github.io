import React from "react";
import { PortfolioItemData } from "src/components/Portfolio/FeatureDisplay";
import { ImageAndText } from "src/components/Util/ImageAndText";
// import { ImageAndText } from "src/components/Util/ImageAndText";
import { RoleBadge } from "src/components/Util/RoleBadge";
import { YoutubeEmbed } from "src/components/Util/YoutubeEmbed";
import { GetLocalizedContentValue, Sizes } from "src/components/Util/util";

type PortfolioPageProps = {
  data: PortfolioItemData;
}

export const PortfolioPage = ( { data }: PortfolioPageProps) => {
  return (
    <div className="text-white">
      <div className="relative w-full h-60">
        <img className="w-full h-full object-cover object-center" src={data.banner.image} alt="bannerImage"/>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="relative flex flex-col justify-center h-full px-5 md:px-28 2xl:w-[1500px]">
          <div className="flex flex-col justify-center items-center pt-8 md:pt-4">
            <div className="text-4xl font-urbanist font-normal md:text-6xl px-8">
              {GetLocalizedContentValue(data.content.title)}
            </div>
            <div className="flex flex-wrap justify-center pt-3 flex-row">
              {data.content.roles.map((role, key) => {
                return <RoleBadge role={role} size={Sizes.MD} key={key}/>
              })}
            </div>
          </div>

          <div className="flex flex-col items-center px-2">
            {/* Summary */}
            <div className="pt-4 text-left indent-6 md:w-[600px] lg:w-[800px]">
              {data.content.summary && GetLocalizedContentValue(data.content.summary)}
            </div>

            {/* {data.content.steamEmbed && <iframe src={data.content.steamEmbed} className="mt-6 mb-4" width="646" height="190"></iframe>} */}

            {/* Links */}
            <div className="flex flex-col justify-center pt-4 md:flex-row md:divide-x">
              { data.content.hyperlinks.map((link, key) => {
                  return <a className="pb-1 px-3 text-theme1 underline" href={link.url} key={key}>{link.text}</a>
                })
              }
            </div>

            {/* Main Content */}
            { ((data.content.keyImage || data.content.keyVideo) 
              && (data.content.accomplishments.length > 0 || data.content.involvement)) &&
              <div className="flex flex-col lg:flex-row pt-8 pb-8">
                <div className="pb-4 self-center w-full lg:w-1/2 lg:pb-0 lg:pr-12">
                  {data.content.keyVideo && 
                    <YoutubeEmbed embedId={data.content.keyVideo ?? ""} />
                  }
                  {
                    data.content.keyImage &&
                    <img className="aspect-video rounded-md" src={data.content.keyImage} alt={"Key"} />
                  }
                </div>
                {(data.content.keyImage || data.content.keyVideo) && <div 
                  className="
                    w-full h-px self-center bg-gradient-to-r from-gray-500 via-white to-gray-500
                    lg:max-height-96 lg:h-80 lg:min-h-[1em] lg:w-px lg:bg-gradient-to-t lg:row-span-full
                  "
                />}
                <div className="pt-4 self-center lg:w-1/2 lg:pt-0 lg:pl-12">
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
            }

            {data.content.sections.map((section, key) => {
              return <ImageAndText title={section.title} image={section.image} text={section.description ?? []} imageLeft={section.imageLeft} key={key} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}