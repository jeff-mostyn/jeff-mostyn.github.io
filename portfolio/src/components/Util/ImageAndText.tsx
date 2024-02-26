import React, { useState } from "react";
import { ModalCapableImage } from "./ModalCapableImage";

type ImageAndTextProps = {
  title: string;
  image?: string;
  video?: string;
  text: string[];
  imageLeft: boolean
}

export const ImageAndText = ({ title, image, text, imageLeft }: ImageAndTextProps) => {
  const [ modalOpen, setModalOpen ] = useState(false);

  return (
    <div>
      <ModalCapableImage isOpen={modalOpen} setIsOpen={setModalOpen} image={image} />
      <div className="flex flex-col pt-4">
        {/* Title */}
        <div className=" text-3xl text-white pb-8 md:text-5xl">
          {title}
        </div>
        <div className={`flex flex-col items-center w-full pb-8 lg:grid-rows-1 ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} `}>
          
          {/* Image */}
          <div className={`pb-4 lg:w-1/2 ${imageLeft ? "lg:pr-12" : "lg:pl-12"} lg:row-span-full lg:pb-0`}>
            <img className="aspect-video rounded-md cursor-pointer" src={image} alt={`${title} Sample`} onClick={() => setModalOpen(true)}/>
          </div>
          
          {/* Divider */}
          <div 
            className="
              w-full h-px self-center bg-gradient-to-r from-gray-500 via-white to-gray-500
              lg:max-height-96 lg:h-80 lg:min-h-[1em] lg:w-px lg:bg-gradient-to-t lg:row-span-full
            "
          />

          {/* Text */}
          <div className={`pt-4 whitespace-pre-line lg:w-1/2 lg:pt-0 ${imageLeft ? 'lg:pl-12' : 'lg:pr-12'}`}>
              <div className="text-left self-center">
                {text.map((line, key) => {
                  return (
                    <p className={`indent-6 ${key > 0 && "pt-2"}`} key={key}>
                      {line}
                    </p>
                  )
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}