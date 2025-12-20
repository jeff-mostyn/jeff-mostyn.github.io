import React, { useState } from "react";

import { RoleBadge } from "../Util/RoleBadge";
import { GetLocalizedContentValue, Sizes } from "../Util/util";
import { ProjectData } from "src/utils/types";

export type WorkSampleProps = {
  sampleData: ProjectData;
}

export const WorkSample = ( { sampleData }: WorkSampleProps) => {
  const {
    description,
    icons,
    image,
    label,
    roles
  } = sampleData;

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleImageClick = () => {
    setModalOpen(true);
    document.body.classList.add("overflow-hidden");
  }

  const handleOverlayClick = () => {
    setModalOpen(false);
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="pb-10">
      <div 
        className={`${modalOpen ? 'fixed' : 'hidden'} flex flex-col top-0 right-0 left-0 z-30 justify-center items-center w-full h-full`}
        id={"modal"}
      >
        {/* this div is the overlay */}
        <div
          className="fixed top-0 right-0 left-0 bg-black opacity-60 w-full h-full"
          id={"overlay"}
          onClick={() => handleOverlayClick()}
        />
        {/* This div is the modal */}
        <div className="flex flex-col w-5/6 h-3/4 p-4 rounded-lg bg-zinc-700 items-center overflow-scroll z-30 md:w-1/2 md:h-5/6">
          <img className="flex aspect-video rounded-md w-11/12 top-0 right-0 left-0 md:w-5/6" src={image} alt={"Work Sample"} />
          <h3 className="pt-4 text-white text-3xl font-urbanist">
            { GetLocalizedContentValue(label) }
          </h3>
          <div className="pt-2">
            {roles.map((role: string, key: number) => {
              return <RoleBadge role={role} size={Sizes.MD} key={key}/>
            })}
          </div>

          <div className="pt-2 md:flex md:flex-row md:justify-center md:gap-3 md:visible">
            {
              icons.map((icon, key) => {
                return <img className="rounded-md" src={icon} key={key} height={"40"} width={"40"} alt={icon.split(".")[0]}/>
              })
            }
          </div>

          <div className="min-h-px w-5/6 my-4 bg-gradient-to-r from-white/0 via-white/100 to-white/0"/>

          {description.map((paragraph, i) => (
            <p className="w-5/6 pb-2 text-md text-left indent-8 text-white">
              { GetLocalizedContentValue(paragraph) }
            </p>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="px-6">
          <img 
            className="w-96 aspect-video rounded-lg cursor-pointer" 
            src={image} alt={`${GetLocalizedContentValue(label)} Sample`} 
            onClick={() => handleImageClick()}
          />
          <h3 className="pt-4 text-white text-xl font-urbanist">
            {GetLocalizedContentValue(label)}
          </h3>
          <div className="flex flex-wrap justify-center pt-1.5 flex-row">
            {roles.map((tag, key) => {
              return <RoleBadge role={tag} size={Sizes.SM} key={key} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}