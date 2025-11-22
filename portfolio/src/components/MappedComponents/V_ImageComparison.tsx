import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { Vis_Img, Vis_ImgCompare } from "src/utils/portfolioSegmentTypes";

export const V_ImageComparison: React.FC<Vis_ImgCompare> = ({ image1, altText1, image2, altText2 }: Vis_ImgCompare) => {
  return (
    <ReactCompareSlider 
      itemOne={<ReactCompareSliderImage src={image1} alt={altText1} />}
      itemTwo={<ReactCompareSliderImage src={image2} alt={altText2} />}                      
    />
  )
}