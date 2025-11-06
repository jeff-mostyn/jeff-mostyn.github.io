import { SideBySide } from "src/utils/portfolioSegmentTypes"
import { GetLocalizedContentValue } from "../Util/util";
import { mapVisualizationComponent } from "src/utils/componentMapping";

export const C_SideBySide: React.FC<SideBySide> = ({heading, children}: SideBySide) => {
  return (
    <>
      <div>
        {heading && GetLocalizedContentValue(heading)};
      </div>
      <div>
        {
          children.map((child, i) => (
            <div className="flex flex-col lg:flex-row pt-8 pb-8">
              {mapVisualizationComponent(child)}
              {i < children.length && 
                <div 
                  className="
                    w-full h-px self-center bg-gradient-to-r from-gray-500 via-white to-gray-500
                    lg:max-height-96 lg:h-80 lg:min-h-[1em] lg:w-px lg:bg-gradient-to-t lg:row-span-full
                  "
                />
              }
            </div>
          ))
        }
      </div>
    </>
  )
}