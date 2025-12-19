import { SingleItem } from "src/utils/portfolioSegmentTypes"
import { GetLocalizedContentValue } from "../Util/util";
import { mapVisualizationComponent } from "src/utils/componentMapping";

export const ContainerSingleItem: React.FC<SingleItem> = ({heading, child}: SingleItem) => {
  return (
    <div className="pt-8">
      {heading && <h2 className="text-3xl text-white py-6 md:text-5xl">
         {GetLocalizedContentValue(heading)}
      </h2>}
      <div className={`flex flex-col`}>
        <div className={`pb-4 self-center w-full lg:w-1/2 lg:pb-0`}>
          {mapVisualizationComponent(child)}
        </div>
      </div>
    </div>
  )
}