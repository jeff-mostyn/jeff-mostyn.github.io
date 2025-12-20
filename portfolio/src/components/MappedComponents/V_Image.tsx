import { Vis_Img } from "src/utils/portfolioSegmentTypes";

export const V_Image: React.FC<Vis_Img> = ({ image }: Vis_Img) => {
  return (
    <img className="md:px-4 lg:px-0 mx-auto aspect-video rounded-md" src={image} alt={"Key"} />
  )
}