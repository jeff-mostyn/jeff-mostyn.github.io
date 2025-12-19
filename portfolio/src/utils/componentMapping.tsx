import { C_SideBySide } from "src/components/MappedComponents/SideBySide";
import { ContainerTypes, containerTypes, visualizationTypes, VisualizationTypes } from "./portfolioSegmentTypes";
import { C_Hyperlinks } from "src/components/MappedComponents/Hyperlinks";
import { V_Image } from "src/components/MappedComponents/V_Image";
import { V_Summary } from "src/components/MappedComponents/V_Summary";
import { V_ListAndSummary } from "src/components/MappedComponents/V_ListAndSummary";
import { V_ImageComparison } from "src/components/MappedComponents/V_ImageComparison";
import { V_Youtube } from "src/components/MappedComponents/V_Youtube";
import { ContainerSingleItem } from "src/components/MappedComponents/SingleItem";

export const mapContainerComponent = (containerInfo: ContainerTypes): React.ReactElement => {
  return (
    containerInfo.name === containerTypes.SIDE_BY_SIDE 
      ? <C_SideBySide 
          name={containerInfo.name}
          heading={containerInfo.heading}
          children={containerInfo.children}
          reverse={containerInfo.reverse}
        />
      : containerInfo.name === containerTypes.HYPERLINKS 
        ? <C_Hyperlinks 
            name={containerInfo.name}
            links={containerInfo.links}
          />
        : containerInfo.name === containerTypes.SINGLE_ITEM
         ? <ContainerSingleItem 
            name={containerInfo.name}
            child={containerInfo.child}
          />
         : <></>
  )
}

export const mapVisualizationComponent = (visualizationInfo: VisualizationTypes) => {
  switch(visualizationInfo.name) {
    case visualizationTypes.IMAGE:
      return <V_Image {...visualizationInfo} />
    case visualizationTypes.IMAGE_COMPARE:
      return <V_ImageComparison {...visualizationInfo} />
    case visualizationTypes.LIST_AND_SUMMARY:
      return <V_ListAndSummary {...visualizationInfo} />
    case visualizationTypes.SUMMARY:
      return <V_Summary {...visualizationInfo} />
    case visualizationTypes.YOUTUBE:
      return <V_Youtube {...visualizationInfo} />
    default:
      return null;
  }
}