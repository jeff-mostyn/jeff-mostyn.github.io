import React, { useState } from "react";

import triangleIcon from '../../media/triangle.svg'

export type WorkSampleContent = {
  image: string;
  title: string;
  description: string[];
}

export const WorkSample = ({ image, title, description }: WorkSampleContent) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);

  return (
    <div className="w-full">
      <img className="aspect-video rounded" src={image} alt={`${title} Sample`}/>
      <div className="pt-4 text-white text-xl font-urbanist">
        {title}
      </div>
      {detailsOpen && <div>
        {description.map((descrip, key) => {
          return (
            <div className="pt-4 text-white text-base font-urbanist text-left indent-8" key={key}>
              {descrip}
            </div>
          )  
        })}
      </div>}
      <button
        onClick={() => setDetailsOpen(!detailsOpen)}
      >
        Text
      </button>
    </div>
  )
}