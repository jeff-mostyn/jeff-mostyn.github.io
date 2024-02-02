import React, { useState } from "react";

import triangleIcon from '../../media/triangle.svg'
import { SVG } from "../Util/Svg";

export type WorkSampleContent = {
  image: string;
  title: string;
  description: string[];
}

export const WorkSample = ({ image, title, description }: WorkSampleContent) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className={`${modalOpen ? 'fixed' : 'hidden'} flex flex-col top-0 right-0 left-0 justify-center items-center w-full h-full`}>
        <button className="absolute text-white top-0 right-0 pt-6 pr-6" onClick={() => setModalOpen(false)}>
          X
        </button>
        <img className="flex w-3/4 aspect-video rounded-md top-0 right-0 left-0" src={image} />
        <div className="fixed w-full h-full top-0 bg-black opacity-60 -z-10" onClick={() => setModalOpen(false)}/>
      </div>

      <div className="w-full">
        <div className="px-6">
          <img className="aspect-video rounded cursor-pointer" src={image} alt={`${title} Sample`} onClick={() => setModalOpen(true)}/>
          <div className="pt-4 text-white text-xl font-urbanist">
            {title}
          </div>
        </div>
        {detailsOpen && <div className="mt-3.5">
          {description.map((descrip, key) => {
            return (
              <div className="px-4 text-white text-base font-urbanist text-left indent-6" key={key}>
                {descrip}
              </div>
            )  
          })}
        </div>}
        <div className="w=full px-4 mt-3.5">
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
    </>
  )
}