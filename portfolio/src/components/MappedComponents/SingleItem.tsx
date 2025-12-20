import { SingleItem } from "src/utils/portfolioSegmentTypes"
import { GetLocalizedContentValue, Sizes } from "../Util/util";
import { mapVisualizationComponent } from "src/utils/componentMapping";
import classNames from "classnames";

const styles = (padding: Sizes | undefined) => classNames(
  'pt-8', {
    'px-40': padding == Sizes.XS,
    'px-48': padding == Sizes.SM,
    'px-64': padding == Sizes.MD,
    'px-72': padding == Sizes.LG,
    'px-96': padding == Sizes.XL,
  }
);

export const ContainerSingleItem: React.FC<SingleItem> = ({ heading, child, padding }: SingleItem) => {
  console.log(padding);

  return (
    <div className={styles(padding)}>
      {heading && <h2 className="text-3xl text-white py-6 md:text-5xl">
         {GetLocalizedContentValue(heading)}
      </h2>}
      <div className={`flex flex-col`}>
        <div className={`pb-4 self-center w-full lg:pb-0`}>
          {mapVisualizationComponent(child)}
        </div>
      </div>
    </div>
  )
}