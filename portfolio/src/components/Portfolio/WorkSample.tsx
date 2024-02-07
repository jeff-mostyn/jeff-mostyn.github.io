import React, { useState } from "react";

import { SVG } from "../Util/Svg";
import { RoleBadge } from "../Util/RoleBadge";
import { Sizes } from "../Util/util";

export type WorkSampleContent = {
  image: string;
  title: string;
  tags: string[];
  description: string[];
}

export const WorkSample = ({ image, title, tags, description }: WorkSampleContent) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="pb-10">
      <div className={`${modalOpen ? 'fixed' : 'hidden'} flex flex-col top-0 right-0 left-0 justify-center items-center w-full h-full`}>
        <button className="absolute text-white top-0 right-0 pt-6 pr-6" onClick={() => setModalOpen(false)}>
          X
        </button>
        <img className="flex w-5/6 aspect-video rounded-md top-0 right-0 left-0 md:w-3/4" src={image} alt={"Work Sample"} />
        <div className="fixed w-full h-full top-0 bg-black opacity-60 -z-10" onClick={() => setModalOpen(false)}/>
      </div>

      <div className="w-full">
        <div className="px-6">
          <img className="aspect-video rounded cursor-pointer" src={image} alt={`${title} Sample`} onClick={() => setModalOpen(true)}/>
          <div className="pt-4 text-white text-xl font-urbanist">
            {title}
          </div>
          <div className="flex flex-wrap justify-center pt-1.5 flex-row">
            {tags.map((tag, key) => {
              return <RoleBadge role={tag} size={Sizes.SM} key={key} />
            })}
          </div>
        </div>
        {detailsOpen && <div className="mt-3.5">
          {description.map((descrip, key) => {
            return (
              <div className={`px-4 text-white text-base font-urbanist text-left indent-6 ${key > 0 && "pt-3"}`} key={key}>
                {descrip}
              </div>
            )  
          })}
        </div>}
        <div className="w=full px-4 mt-3">
          <button
            type="button"
            className="w-full h-5 px-6 transition-colors duration-150 bg-zinc-700 focus:shadow-outline hover:bg-zinc-750"
            onClick={() => setDetailsOpen(!detailsOpen)}
          >
            <div className="flex w-full justify-center">
              <SVG name={detailsOpen ? "triangle_up" : "triangle_down"} size="md" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}