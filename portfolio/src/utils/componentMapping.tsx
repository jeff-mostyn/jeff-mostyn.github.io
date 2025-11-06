import { C_SideBySide } from "src/components/MappedComponents/SideBySide";
import { ContainerTypes, containerTypes, visualizationTypes, VisualizationTypes } from "./portfolioSegmentTypes";
import { C_Hyperlinks } from "src/components/MappedComponents/Hyperlinks";
import { V_Image } from "src/components/MappedComponents/V_Image";
import { V_Summary } from "src/components/MappedComponents/V_Summary";

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
        : <></>
  )
}

export const mapVisualizationComponent = (visualizationInfo: VisualizationTypes) => {
  return (
    visualizationInfo.name === visualizationTypes.IMAGE
      ? <V_Image
          name={visualizationInfo.name}
          image={visualizationInfo.image} 
        />
      : visualizationInfo.name === visualizationTypes.IMAGE_COMPARE
        ? <></>
        : visualizationInfo.name === visualizationTypes.LIST_AND_SUMMARY
          ?  <></>
          : visualizationInfo.name === visualizationTypes.SUMMARY
            ? <V_Summary 
                name={visualizationInfo.name}
                paragraphs={visualizationInfo.paragraphs}   
              />
            : <></>
  )
}