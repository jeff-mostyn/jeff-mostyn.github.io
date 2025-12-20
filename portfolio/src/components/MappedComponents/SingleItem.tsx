import { SingleItem } from "src/utils/portfolioSegmentTypes"
import { GetLocalizedContentValue, Sizes } from "../Util/util";
import { mapVisualizationComponent } from "src/utils/componentMapping";
import classNames from "classnames";
import { headingStyles } from "src/utils/styles";

const styles = (padding: Sizes | undefined) => classNames(
  'pt-4', {
    'md:px-4 lg:px-12 xl:px-40': padding == Sizes.XS,
    'md:px-6 lg:px-16 xl:px-48': padding == Sizes.SM,
    'md:px-8 lg:px-20 xl:px-64': padding == Sizes.MD,
    'md:px-10 lg:px-24 xl:px-72': padding == Sizes.LG,
    'md:px-12 lg:px-32 xl:px-96': padding == Sizes.XL,
  }
);

export const ContainerSingleItem: React.FC<SingleItem> = ({ heading, child, padding }: SingleItem) => {
  return (
    <div className={styles(padding)}>
      {heading && <h2 className={headingStyles(heading)}>
         {GetLocalizedContentValue(heading.text)}
      </h2>}
      <div className={`flex flex-col`}>
        <div className={`pb-4 self-center w-full lg:pb-0`}>
          {mapVisualizationComponent(child)}
        </div>
      </div>
    </div>
  )
}