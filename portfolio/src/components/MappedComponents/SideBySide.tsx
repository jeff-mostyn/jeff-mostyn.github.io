import { SideBySide } from "src/utils/portfolioSegmentTypes"
import { GetLocalizedContentValue } from "../Util/util";
import { mapVisualizationComponent } from "src/utils/componentMapping";

export const C_SideBySide: React.FC<SideBySide> = ({heading, children, reverse}: SideBySide) => {
  return (
    <div className="pt-8">
      {heading && <h2 className="text-3xl text-white py-6 md:text-5xl">
         {GetLocalizedContentValue(heading)}
      </h2>}
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:gap-12`}>
        { children[0] && <div className={`pb-4 self-center w-full lg:w-1/2 lg:pb-0`}>
          {mapVisualizationComponent(children[0])}
        </div> }
        <div 
          className="
            w-full h-px my-8 self-center bg-gradient-to-r from-gray-500 via-white to-gray-500
            lg:max-height-96 lg:h-80 lg:min-h-[1em] lg:w-px lg:mx-2 lg:bg-gradient-to-t lg:row-span-full
          "
        />
        { children[1] && <div className={`pb-4 self-center w-full lg:w-1/2 lg:pb-0`}>
          {mapVisualizationComponent(children[1])}
        </div> }
      </div>
    </div>
  )
}