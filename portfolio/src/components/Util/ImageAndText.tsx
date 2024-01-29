import React from "react";

type ImageAndTextProps = {
  image?: string;
  video?: string;
  text: string[];
  imageLeft: boolean
}

export const ImageAndText = ({ image, text, imageLeft }: ImageAndTextProps) => {
  return (
    <>
      <div className={`flex flex-col items-center w-full pt-8 pb-8 md:grid-rows-1 ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} md:pt-12`}>
        <div className={`pb-4 md:w-1/2 ${imageLeft ? "md:pr-12" : "md:pl-12"} md:row-span-full md:pb-0`}>
          {/* {data.content.keyVideo && 
            <YoutubeEmbed embedId={data.content.keyVideo ?? ""} />
          } */}
          {
            // data.content.keyImage &&
            <img className="aspect-video" src={image} />
          }
        </div>
        <div 
          className="
            w-full h-px self-center bg-gradient-to-r from-gray-500 via-white to-gray-500
            md:max-height-96 md:h-80 md:min-h-[1em] md:w-px md:bg-gradient-to-t md:row-span-full
          "
        />
        <div className={`pt-4 whitespace-pre-line md:w-1/2 md:pt-0 ${imageLeft ? 'md:pl-12' : 'md:pr-12'}`}>
          { text.length > 1 
            ? <ul className="text-left list-disc list-outside pl-4 self-center">
                {text.map((line, key) => {
                  return <li className="list-item" key={key}>{line}</li>
                })}
              </ul>
            : <div className="flex self-center text-left">
                {text}
              </div>
          }
        </div>
      </div>
    </>
  )
}