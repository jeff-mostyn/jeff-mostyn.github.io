import { LocalizedContent } from "src/components/Util/util";

export enum containerTypes {
  HYPERLINKS = "HYPERLINKS",
  SIDE_BY_SIDE = "SIDE_BY_SIDE",
  SINGLE_ITEM = "SINGLE_ITEM",
}

export enum visualizationTypes {
  IMAGE = "IMAGE",
  IMAGE_COMPARE = "IMAGE_COMPARE",
  LIST_AND_SUMMARY = "LIST_AND_SUMMARY",
  SUMMARY = "SUMMARY",
  YOUTUBE = "YOUTUBE"
}

type VisualizationInfo = {
  name: visualizationTypes;
}

export type Vis_Img = VisualizationInfo & {
  name: visualizationTypes.IMAGE;
  image: string;
  altText: string;
}

export type Vis_ImgCompare = VisualizationInfo & {
  name: visualizationTypes.IMAGE_COMPARE;
  image1: string;
  altText1: string;
  image2: string;
  altText2: string;
}

export type Vis_ListAndSum = VisualizationInfo & {
  name: visualizationTypes.LIST_AND_SUMMARY;
  list: LocalizedContent[];
  reverse: boolean;
  summary: LocalizedContent[];
}

export type Vis_Summary = VisualizationInfo & {
  name: visualizationTypes.SUMMARY;
  paragraphs: LocalizedContent[]
}

export type Vis_Youtube = VisualizationInfo & {
  name: visualizationTypes.YOUTUBE;
  id: string;
}

export type VisualizationTypes = 
  Vis_Img | 
  Vis_ImgCompare |
  Vis_ListAndSum |
  Vis_Summary |
  Vis_Youtube

export type Container = {
  name: containerTypes;
  heading?: LocalizedContent
}

export type Hyperlinks = Container & {
  name: containerTypes.HYPERLINKS;
  links: {
    text: LocalizedContent;
    url: string;
  }[];
}

export type SideBySide = Container & {
  name: containerTypes.SIDE_BY_SIDE;
  children: VisualizationTypes[];
  reverse: boolean;
}

export type SingleItem = Container & {
  name: containerTypes.SINGLE_ITEM;
  child: VisualizationTypes;
}

export type ContainerTypes = 
  Hyperlinks |
  SideBySide |
  SingleItem;

export type PortfolioItemData = {
  banner: {
    image: string;
    label: LocalizedContent;
    tagline: LocalizedContent;
  }
  content: {
    title: LocalizedContent;
    roles: string[];
    summary?: LocalizedContent;
    containers: ContainerTypes[];
  };
  icons: string[];
  path: string;
}