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

  return (
    <div className="w-full">
      <div className="px-6">
        <img className="aspect-video rounded" src={image} alt={`${title} Sample`}/>
        <div className="pt-4 text-white text-xl font-urbanist">
          {title}
        </div>
      </div>
      {detailsOpen && <div className="mt-3.5">
        {description.map((descrip, key) => {
          return (
            <div className="px-3 text-white text-base font-urbanist text-left indent-8" key={key}>
              {descrip}
            </div>
          )  
        })}
      </div>}
      <div className="w=full px-3 mt-3.5">
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
  )
}